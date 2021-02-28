import React from 'react'
import { x } from '@xstyled/styled-components'

import Text from 'components/Text'
import Button from 'components/Button'
import Link from 'components/Link'

const Nav = () => {
  return (
    <x.header
      display="flex"
      px={{ _: '12', md: '6' }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Link href="/" aria-label="cool.bio">
        <x.img w="130px" src="assets/logo.svg" alt="cool.bio's logo" />
      </Link>
      <x.div display="flex" alignItems="center">
        <Link
          href="https://app.cool.bio/login"
          target="_newtab"
          color="#000"
          marginRight={{ _: 6, md: 6, xs: 3 }}
          aria-label="cool.bio login"
        >
          <Text
            as="span"
            fontSize={{ _: 'l', xs: 'sm', md: 'l' }}
            fontWeight="500"
          >
            Login
          </Text>
        </Link>
        <Button
          variant="solid"
          display={{ md: 'flex', xs: 'none' }}
          href="https://app.cool.bio/login"
          as="a"
          target="_newtab"
          aria-label="cool.bio signup"
          rel="noopener"
          loading
          bloop
        >
          <Text
            as="span"
            fontSize={{ _: 'l', xs: 'sm', md: 'l' }}
            fontWeight="500"
          >
            Signup
          </Text>
        </Button>
      </x.div>
    </x.header>
  )
}

Nav.propTypes = {}

export default Nav
