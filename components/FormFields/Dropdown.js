import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { x } from '@xstyled/styled-components'

import FormLabel from 'components/FormFields/FormLabel'

function Dropdown ({
  options,
  defaultValue,
  name,
  label,
  padding,
  margin,
  required,
  placeholder,
  id
}) {
  const { register, errors } = useFormContext()
  return (
    <x.div
      display="flex"
      flexDirection="column"
      padding={padding}
      margin={margin}
    >
      {label && (
        <FormLabel htmlFor={id} marginBottom="10px">
          {label}
        </FormLabel>
      )}
      <x.div mt={1} position="relative">
        <x.select
          name={name}
          display="block"
          appearance="none"
          w={1}
          h="46px"
          border
          borderColor="#BCBEC0"
          color="#001217"
          py={3}
          px={4}
          pr={8}
          borderRadius
          lineHeight="tight"
          focusOutline="none"
          focusBg="white"
          focusBorderColor="gray-500"
          fontSize="14px"
          defaultValue={defaultValue}
          placeholder={placeholder}
          ref={register({
            required: required ? 'This is required' : false
          })}
        >
          {options.map((item) => {
            return <option key={item.value}>{item.value}</option>
          })}
        </x.select>
        <x.div
          position="absolute"
          right={0}
          top={0}
          bottom={0}
          display="flex"
          alignItems="center"
          px={3}
          color="#001217"
          bg="primary"
          borderRadius="0 default default 0"
          pointerEvents="auto"
        >
          <x.svg fill="currentcolor" h={4} w={4} viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </x.svg>
        </x.div>
      </x.div>
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

Dropdown.propTypes = {
  defaultValue: PropTypes.any,
  id: PropTypes.any,
  isOptionDisabled: PropTypes.any,
  label: PropTypes.any,
  margin: PropTypes.any,
  name: PropTypes.any,
  options: PropTypes.any,
  padding: PropTypes.any,
  placeholder: PropTypes.any,
  required: PropTypes.any,
  size: PropTypes.string,
  value: PropTypes.any
}

export default Dropdown
