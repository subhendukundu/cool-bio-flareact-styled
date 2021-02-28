import React from 'react'
import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'

import LazyImage from 'components/LazyImage'
import Heading from 'components/Heading'
import Text from 'components/Text'
import Button from 'components/Button'
import Link from 'components/Link'
import Seo from 'components/Seo'
import SocialIcons from 'components/SocialIcons'

function dateCheck (from, to) {
  if (!from && !to) {
    return true
  }
  const fromDate = new Date(from)
  const toDate = new Date(to)
  const checkDate = new Date()

  if (checkDate <= toDate && checkDate >= fromDate) {
    return true
  }
  return false
}

export async function getEdgeProps ({ params, event }) {
  const { bio } = params
  const data = await cool_bio_profiles.get(bio, 'json')
  console.log('data called', data)
  console.log('server', bio)
  const { forwardLink = {} } = data
  const { url } = forwardLink
  if (url) {
    console.log('----->', url)
    return {
      redirect: {
        destination: 'https://cool.bio',
        permanent: false
      }
    }
  }
  return {
    props: {
      bio,
      data,
      event
    },
    revalidate: 0
  }
}

export default function Post ({ bio, data, event }) {
  console.log('slug slug', bio, data, event)
  const {
    displayName,
    userName,
    socialLinks = [],
    image: imageSrc = '',
    appointmentsEnabled = true,
    links = []
  } = data
  return (
    <x.div display="flex" minHeight="100vh" flexDirection="column">
      <Seo
        description={`See cool.bio links from ${displayName} (@${userName})`}
        title={`${displayName} (@${userName}) | cool.bio`}
        image={imageSrc}
      />
      <x.div
        display="flex"
        alignItems="center"
        w="100%"
        flexDirection="column"
        mt={12}
        flex={1}
      >
        <LazyImage
          src={imageSrc}
          height={{
            md: 40,
            xs: 28
          }}
          width={{
            md: 40,
            xs: 28
          }}
          borderRadius="full"
          objectFit="contain"
        />
        {displayName && (
          <Heading
            as="h1"
            color="rgb(3, 0, 71)"
            fontSize={{ xs: '3xl', md: '5xl' }}
            my={{
              xs: 2,
              md: 4
            }}
          >
            {displayName}
          </Heading>
        )}
        {userName && (
          <Heading
            as="h3"
            color="rgb(51, 39, 42)"
            fontSize={{ xs: '2xl', md: '4xl' }}
          >
            @{userName}
          </Heading>
        )}
        <x.div display="flex" my={{ xs: 2, md: 4 }}>
          {socialLinks.map((item) => {
            const { id, icon, url, color = '#F87E0F' } = item
            if (url) {
              return (
                <Link key={id} href={url} mr={4}>
                  <SocialIcons icon={icon} color={color} fontSize="40px" />
                </Link>
              )
            }
            return null
          })}
        </x.div>
        {appointmentsEnabled && (
          <Button
            href={`/${userName}/booking`}
            as="a"
            mt={6}
            variant="outline"
            color="#fff"
            fontSize={{ _: 'l', xs: 'sm', md: 'l' }}
            fontWeight="500"
            aria-label={`${displayName} (@${userName}) book appointment`}
            rel="noopener"
            borderColor="#F87E0F"
            backgroundColor="#F87E0F"
          >
            Book an Appointment
          </Button>
        )}
        <x.div
          display="flex"
          flexDirection="column"
          alignItems="center"
          w="100%"
          mt={12}
        >
          {links.map((item, index) => {
            const {
              id,
              buttonType = 'outline',
              url,
              title,
              buttonText = 'Click',
              image,
              startDate,
              endDate
            } = item
            return (
              dateCheck(startDate, endDate) && (
                <x.div
                  display="flex"
                  key={id}
                  p="1rem"
                  mb="2rem"
                  background="rgba(248, 126, 15, 0.1)"
                  borderRadius="10px"
                  alignItems="center"
                  justifyContent="space-between"
                  maxWidth="800px"
                  w="90%"
                >
                  <x.div display="flex" alignItems="center">
                    {image
                      ? (
                      <LazyImage
                        src={image}
                        height={{
                          md: 20,
                          xs: 14
                        }}
                        width={{
                          md: 20,
                          xs: 14
                        }}
                        mr={3}
                      />
                        )
                      : (
                      <x.div />
                        )}
                    <Heading fontSize={{ xs: 'xl', md: '3xl' }}>
                      {title}
                    </Heading>
                  </x.div>
                  <Button
                    as="a"
                    href={url}
                    fontSize={{ xs: 'tiny', md: 'l' }}
                    fontWeight="500"
                    rel="noopener"
                    aria-label={buttonText}
                    w={32}
                    h={12}
                    borderColor="#F87E0F"
                    color="#F87E0F"
                  >
                    <Text>{buttonText}</Text>
                  </Button>
                </x.div>
              )
            )
          })}
        </x.div>
      </x.div>
      <x.div display="flex" justifyContent="center" w="100%" mb={6}>
        <Link href="/" aria-label="cool.bio logo">
          <LazyImage w="130px" src="assets/logo.svg" alt="cool.bio's logo" />
        </Link>
      </x.div>
    </x.div>
  )
}

Post.propTypes = {
  bio: PropTypes.any,
  data: PropTypes.shape({
    appointmentsEnabled: PropTypes.bool,
    displayName: PropTypes.string,
    image: PropTypes.string,
    links: PropTypes.array,
    socialLinks: PropTypes.array,
    userName: PropTypes.any
  }),
  event: PropTypes.any
}
