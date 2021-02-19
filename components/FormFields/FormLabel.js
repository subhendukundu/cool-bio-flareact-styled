import PropTypes from 'prop-types'
import React from 'react'
import { x } from '@xstyled/styled-components'

export default function FormLabel ({ children, ...rest }) {
  return (
    <x.label
      {...rest}
      display="flex"
      __css={{
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px',
        color: '#AEAFB3'
      }}
    >
      {children}
    </x.label>
  )
}

FormLabel.propTypes = {
  children: PropTypes.any
}
