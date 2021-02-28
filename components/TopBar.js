import React, { useState } from 'react'
import { x } from '@xstyled/styled-components'

function TopBar () {
  const [display, setDisplay] = useState(true)
  const onClickDisplay = () => {
    setDisplay(false)
  }
  return (
    <>
      {display
        ? (
        <x.div
          display="flex"
          background="rgba(248, 126, 15, 0.5)"
          w="100%"
          padding="5px"
          h="40px"
          justifyContent="center"
          alignItems="center"
        >
          <x.p fontWeight="500" fontSize="sm">
            We are still in Beta
          </x.p>
          <x.img
            position="absolute"
            right="16px"
            src="/assets/cross.svg"
            alt="cross"
            w="15px"
            h="15px"
            __css={{
              cursor: 'pointer'
            }}
            onClick={onClickDisplay}
          />
        </x.div>
          )
        : null}
    </>
  )
}

TopBar.propTypes = {}

export default TopBar
