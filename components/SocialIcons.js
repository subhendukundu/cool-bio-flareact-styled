import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from '@xstyled/styled-components'
import * as brands from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BaseIcon = styled(FontAwesomeIcon)`
  ${(p) => css(p)}
`

function SocialIcons (props) {
  const { children, icon, ...rest } = props
  const brandIcon = brands[icon]
  console.log('icon', brandIcon, brands, icon)
  return (
    <BaseIcon icon={brandIcon} {...rest}>
      {children}
    </BaseIcon>
  )
}

SocialIcons.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.string
}

export default SocialIcons
