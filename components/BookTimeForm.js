import PropTypes from 'prop-types'
import React, { useState, useCallback } from 'react'
import { x } from '@xstyled/styled-components'
import { useForm, FormProvider } from 'react-hook-form'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import firebase from '../lib/firebase'

import FormCalendar from 'components/FormFields/FormCalendar'
import FormInput from 'components/FormFields/FormInput'
import FormTextarea from 'components/FormFields/FormTextarea'

import DateTimePicker from 'components/DateTimePicker'
import Heading from 'components/Heading'
import Button from 'components/Button'

const firestore = firebase.firestore()

dayjs.extend(utc)

function getElement ({ type, ...rest }) {
  switch (type) {
    case 'email':
      return (
        <FormInput
          placeholder="you@example.com"
          pattern={/^\S+@\S+$/i}
          type={type}
          {...rest}
        />
      )
    case 'text':
      return <FormInput placeholder="Enter input here" type={type} {...rest} />
    case 'textarea':
      return (
        <FormTextarea placeholder="Enter input here" type={type} {...rest} />
      )
    default:
      return null
  }
}

export default function BookTimeForm ({
  appointmentsEnabled,
  questions,
  pageName,
  pageId,
  contactEmails
}) {
  if (!appointmentsEnabled) {
    return <x.div>Error</x.div>
  }
  const { executeRecaptcha } = useGoogleReCaptcha()
  console.log(questions)
  const methods = useForm()

  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const onSubmit = useCallback(async (formData, e) => {
    if (!executeRecaptcha) {
      return
    }
    try {
      setSubmitting(true)
      const token = await executeRecaptcha(pageName)
      const { appointmentDate, appointmentTime, ...rest } = formData
      const date = dayjs(appointmentDate).format('MM-DD-YYYY')
      const currentDate = dayjs(`${date} ${appointmentTime.value}`).utc()
      const utcDate = currentDate.format('MM-DD-YYYY')
      const utcTime = currentDate.format('HH:mm')
      console.log({ ...rest, token, date: utcDate, time: utcTime })
      const data = await firestore
        .collection('pages')
        .doc(pageId)
        .collection('appointments')
        .add({
          ...rest,
          token,
          date: utcDate,
          time: utcTime,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          contactEmails,
          pageName,
          status: 'requested'
        })
      e.target.reset()
      console.log(data.id)
      setSuccess(true)
    } catch (e) {
      console.error(e)
    }
    setSubmitting(false)
  }, [])

  if (success) {
    return (
      <x.div
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <x.h1 marginBottom="1rem" color="#030047" fontSize="1.5rem">
          Thank you! We got your details.
        </x.h1>
        <h4 color="#33272A">Redireacting in 5 second...</h4>
      </x.div>
    )
  }

  return (
    <FormProvider {...methods}>
      <x.form
        boxShadow="0px 7px 15px -4px rgba(13, 15, 19, 0.1)"
        p={{ md: 16, xs: 12 }}
        borderRadius="10px"
        onSubmit={methods.handleSubmit(onSubmit)}
        w={{ md: '40%', xs: '100%' }}
        marginBottom="6rem"
      >
        <Heading
          as="h3"
          fontWeight="600"
          fontSize={['.8rem', '.8rem', '1rem']}
          marginBottom="1rem"
        >
          Book my time
        </Heading>
        <x.div marginBottom="20px">
          <FormCalendar id="appointmentDate" required label="Pick a date" />
        </x.div>
        <DateTimePicker pageId={pageId} />
        {questions.map(
          ({
            show,
            type = 'text',
            title,
            id,
            required
          }) => {
            if (!show) {
              return null
            }
            return getElement({
              type,
              key: id,
              name: id,
              label: title,
              required: required,
              margin: '20px 0'
            })
          }
        )}
        <Button type="submit" bg="primary" color="#fff" disabled={submitting} loading={submitting}>
          Submit
        </Button>
      </x.form>
    </FormProvider>
  )
}

BookTimeForm.propTypes = {
  appointmentsEnabled: PropTypes.any,
  contactEmails: PropTypes.any,
  pageId: PropTypes.any,
  pageName: PropTypes.any,
  questions: PropTypes.any
}
