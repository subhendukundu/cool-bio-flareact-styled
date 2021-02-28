import PropTypes from 'prop-types'
import React, { memo, useCallback, useState, useEffect } from 'react'
import { DateSingleInput } from '@datepicker-react/styled'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { x } from '@xstyled/styled-components'

import FormLabel from 'components/FormFields/FormLabel'

const today = new Date()
const tomorrow = new Date()
tomorrow.setDate(today.getDate() + 1)

function addDays (days) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000)
}

/* function isDateBeforeToday (date) {
  return new Date(date.toDateString()) < new Date(new Date().toDateString())
} */

function FormCalendar ({ required, id, label }) {
  const [isShowing, showDatepicker] = useState(false)
  const { register, setValue, watch, errors } = useFormContext()
  const date = watch(id)

  const update = useCallback((data) => {
    console.log(data)
    setValue(id, data.date)
    showDatepicker(false)
  }, [])

  useEffect(() => {
    register(
      {
        name: id
      },
      { required: required ? 'This is required' : false }
    )
  }, [register])

  const allowedDays = addDays(14)

  return (
    <x.div
      css={{
        'input[data-testid="DatepickerInput"], input': {
          borderRadius: '10px'
        }
      }}
    >
      <FormLabel htmlFor={id} marginBottom="10px">
        {label}
      </FormLabel>
      <DateSingleInput
        onDateChange={(data) => update(data)}
        onFocusChange={(focusedInput) => showDatepicker(focusedInput)}
        displayFormat="dd/MM/yy"
        // isDateBlocked={isDateBeforeToday}
        minBookingDate={tomorrow}
        maxBookingDate={allowedDays}
        showDatepicker={isShowing}
        date={date}
        inputId={id}
        className="appointmentDate"
      />
      <ErrorMessage
        errors={errors}
        name={id}
        render={({ message }) => (
          <x.div color="#ff3d71" as="p" fontSize={{ xs: '.6rem', md: '.9rem' }}>
            {message}
          </x.div>
        )}
      />
    </x.div>
  )
}

FormCalendar.propTypes = {
  id: PropTypes.any,
  label: PropTypes.any,
  required: PropTypes.any
}

export default memo(FormCalendar)
