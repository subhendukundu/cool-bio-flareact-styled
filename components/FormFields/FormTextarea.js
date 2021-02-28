import PropTypes from 'prop-types'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { x } from '@xstyled/styled-components'

import FormLabel from 'components/FormFields/FormLabel'
export default function FormTextarea ({ label, padding, margin, ...rest }) {
  const { register } = useFormContext()
  const { name } = rest

  return (
    <x.div
      display="flex"
      flexDirection="column"
      padding={padding}
      margin={margin}
    >
      <FormLabel htmlFor={name} marginBottom="10px">
        {label}
      </FormLabel>
      <x.textarea
        id={name}
        name={name}
        ref={register}
        bg="#FFFFFF"
        border="1px solid"
        borderColor="rgba(226, 226, 226, 0.5)"
        boxShadow="0px 10px 15px rgba(222, 222, 222, 0.25)"
        borderRadius="10px"
        h="150px"
        minHeight="150px"
        paddingLeft="10px"
        paddingRight="10px"
        fontSize="16px"
        resize="vertical"
        {...rest}
      />
    </x.div>
  )
}

FormTextarea.propTypes = {
  label: PropTypes.any,
  margin: PropTypes.any,
  padding: PropTypes.any
}
