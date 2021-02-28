import PropTypes from 'prop-types'
import React from 'react'
import { x } from '@xstyled/styled-components'
import LazyLoad from 'react-lazyload'

function LazyImage ({ height, width = '100%', src, alt, ...rest }) {
  return (
    <LazyLoad height={height} width={width}>
      <x.img
        loading="lazy"
        src={src}
        alt={alt}
        h={height}
        w={width}
        {...rest}
      />
    </LazyLoad>
  )
}

LazyImage.propTypes = {
  alt: PropTypes.any,
  className: PropTypes.any,
  height: PropTypes.any,
  src: PropTypes.any,
  width: PropTypes.string
}
export default LazyImage
