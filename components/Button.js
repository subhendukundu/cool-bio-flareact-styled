import React from 'react'
import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'

function Button (props) {
  const {
    as = 'button',
    backgroundColor = 'rgb(255, 255, 255)',
    color = 'rgb(107, 33, 168)',
    children,
    display = 'inline-flex',
    loading,
    bloop,
    ...rest
  } = props
  return (
    <x.button
      display={display}
      alignItems="center"
      justifyContent="center"
      position="relative"
      padding="0.5rem 1rem"
      border="1px solid rgb(192, 132, 252)"
      transition="background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, border-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, fill 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, stroke 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
      lineHeight="1.5rem"
      fontWeight="500"
      borderRadius="0.375rem"
      color={color}
      backgroundColor={backgroundColor}
      textDecoration="none"
      as={as}
      cursor={(!bloop && loading) ? 'wait' : 'pointer'}
      {...rest}
    >
      {loading && (
        <x.span
          display="flex"
          w={3}
          h={3}
          position="absolute"
          top={0}
          right={0}
          mt={-1}
          mr={-1}
        >
          <x.span
            animation="ping"
            position="absolute"
            display="inline-flex"
            w={1}
            h={1}
            borderRadius="full"
            bg="primary"
            opacity={0.75}
          />
          <x.span
            position="relative"
            display="inline-flex"
            borderRadius="full"
            h={3}
            w={3}
            bg="primary"
          />
        </x.span>
      )}
      {children}
    </x.button>
  )
}

Button.propTypes = {
  as: PropTypes.string,
  backgroundColor: PropTypes.string,
  bloop: PropTypes.bool,
  children: PropTypes.any,
  color: PropTypes.string,
  display: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string
}

export default Button
