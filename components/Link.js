import React from 'react'
import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'

function Link ({ color = '#F87E0F', children, href = '#', ...rest }) {
  return (
    <x.a
      color={color}
      {...rest}
      rel="noopener"
      href={href}
      textDecoration="none"
    >
      {children}
    </x.a>
  )
}

Link.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  href: PropTypes.string
}

export default Link
