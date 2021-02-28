import PropTypes from 'prop-types'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { x } from '@xstyled/styled-components'

import FormLabel from 'components/FormFields/FormLabel'
export default function FormInput ({
  label,
  type: enumType,
  padding,
  margin,
  required,
  pattern,
  ...rest
}) {
  const { register, errors } = useFormContext()
  const { name } = rest
  const type = enumType.toLowerCase()
  console.log(errors)

  return (
    <x.div
      display="flex"
      flexDirection="column"
      padding={padding}
      margin={margin}
    >
      {label && (
        <FormLabel htmlFor={name} marginBottom="10px">
          {label}
        </FormLabel>
      )}
      <x.input
        id={name}
        name={name}
        type={type}
        ref={register({
          required: required ? 'This is required' : false,
          pattern
        })}
        bg="#FFFFFF"
        border="1px solid"
        borderColor="rgba(226, 226, 226, 0.5)"
        boxShadow="0px 10px 15px rgba(222, 222, 222, 0.25)"
        borderRadius="10px"
        h="46px"
        paddingLeft="10px"
        paddingRight="10px"
        fontSize="16px"
        {...rest}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <x.div color="#ff3d71" as="p" fontSize={{ xs: '.6rem', md: '.9rem' }}>
            {message}
          </x.div>
        )}
      />
    </x.div>
  )
}

FormInput.propTypes = {
  label: PropTypes.any,
  margin: PropTypes.any,
  padding: PropTypes.any,
  pattern: PropTypes.any,
  required: PropTypes.bool,
  type: PropTypes.string
}
