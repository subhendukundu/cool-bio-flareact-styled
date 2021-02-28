import React from 'react'
import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'

function Text ({
  as = 'p',
  fontSize = '1rem',
  fontWeight = 'normal',
  lineHeight = 1,
  children,
  ...rest
}) {
  return (
    <x.p
      as={as}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </x.p>
  )
}

Text.propTypes = {
  as: PropTypes.string,
  children: PropTypes.any,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.number
}

export default Text
