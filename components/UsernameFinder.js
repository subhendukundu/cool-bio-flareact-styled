import React, { memo, useState, useCallback } from 'react'
import { useDebounce } from 'react-use'
import { x } from '@xstyled/styled-components'

import Input from 'components/Input'
import Text from 'components/Text'
import Button from 'components/Button'
/* import firebase from "../lib/firebase";

const firestore = firebase.firestore(); */

function UsernameFinder () {
  const [loading, setLoading] = useState(false)
  const [touched, setTouched] = useState(false)
  const [val, setVal] = useState('')
  const [available, setAvailable] = useState('')
  // const publishedPagesRef = firestore.collection("publishedPages");

  const [, cancel] = useDebounce(
    async () => {
      setLoading(true)
      if (val) {
        // const pageName = publishedPagesRef.doc(val);
        // const docSnapshot = await pageName.get();
        // const isExists = docSnapshot.exists;
        if (/* isExists */ true) {
          setLoading(false)
          setAvailable(false)
        } else {
          if (typeof onDebouncedValue === 'function') {
            onDebouncedValue(val)
          }
          setLoading(false)
          setAvailable(true)
        }
      }
      setLoading(false)
    },
    1000,
    [val]
  )

  const onChange = useCallback((e) => {
    const { name, value } = e.currentTarget
    setLoading(false)
    setVal(value)
    setTouched(true)
  }, [])

  function isUserName () {
    const regEmail = /^(?=.{3,30}$)([a-z0-9_][a-z0-9_]*([.][a-z0-9_]+)*)$/
    if (!regEmail.test(val)) {
      return false
    }
    return true
  }

  function checkError () {
    if (val) {
      if (!isUserName()) {
        return true
      } else {
        return !loading && !available && val
      }
    }
  }

  return (
    <x.div
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      marginTop="3.5rem"
      marginBottom="2rem"
      zIndex="1"
    >
      <Input
        placeholder="coolname"
        width={{ xs: '100%', md: '350px' }}
        fontSize="1.5rem"
        fontWeight="500"
        margin="1rem"
        onChange={onChange}
        id="userNameFinder"
        type="text"
        prefix={
          <Text
            as="label"
            fontSize="1.5rem"
            fontWeight="500"
            margin="0 0 0 1.2rem"
            color="rgba(248,126,15,1)"
            htmlFor="userNameFinder"
          >
            cool.bio/
          </Text>
        }
        padding={0}
        touched={touched}
        error={checkError()}
        loading={loading}
      />
      <Button
        variant="solid"
        ml={{ xs: 0, md: 3 }}
        mt={{ xs: 3, md: 0 }}
        as="a"
        href="https://app.cool.bio"
        aria-label="cool.bio signup"
        rel="noopener"
      >
        <Text as="span" fontSize="1.5rem" fontWeight="500">
          Start Now!
        </Text>
      </Button>
    </x.div>
  )
}

export default memo(UsernameFinder)
