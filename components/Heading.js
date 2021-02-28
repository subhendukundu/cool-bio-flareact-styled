import React from 'react'
import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'

function Heading (props) {
  const {
    as = 'h3',
    fontSize = '3rem',
    fontWeight = 'normal',
    lineHeight = 1,
    children,
    color = '#030047',
    ...rest
  } = props
  return (
    <x.h3
      as={as}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </x.h3>
  )
}

Heading.propTypes = {
  as: PropTypes.string,
  children: PropTypes.any,
  color: PropTypes.string,
  fontSize: PropTypes.any,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.number
}

export default Heading
