import PropTypes from 'prop-types'
import React from 'react'
import { x } from '@xstyled/styled-components'
import {
  LazyImage,
  Heading,
  Text,
  Button,
  Seo,
  Link,
  SocialIcons
} from '../components'
import seoData from '../flareact-seo.config'

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
  // const post = await getSomeRemotePost({ slug });
  const data = await cool_bio_profiles.get(bio, 'json')
  console.log('data called', data)
  console.log('server', bio)
  // return event.respondWith(handleRequest());
  if (!data) {
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
    }
  }
}

export default function Post ({ bio, data, event }) {
  console.log('slug slug', bio, data, event)
  const {
    name,
    userName,
    socialLinks = [],
    image: imageSrc = '',
    appointmentsEnabled = true,
    links = []
  } = data
  return (
    <x.div display="flex" minHeight="100vh" flexDirection="column">
      <Seo
        description={`See cool.bio links from ${name} (@${userName})`}
        title={`${name} (@${userName}) | cool.bio`}
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
        {name && (
          <Heading
            as="h1"
            color="rgb(3, 0, 71)"
            fontSize={{ xs: '3xl', md: '5xl' }}
            my={{
              xs: 2,
              md: 4
            }}
          >
            {name}
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
                <Link key={url} href={url} mr={4}>
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
            aria-label={`${name} (@${userName}) book appointment`}
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
    image: PropTypes.string,
    links: PropTypes.array,
    name: PropTypes.any,
    socialLinks: PropTypes.array,
    userName: PropTypes.any
  }),
  event: PropTypes.any
}
