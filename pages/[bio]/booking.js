import PropTypes from 'prop-types'
import React from 'react'
import { x } from '@xstyled/styled-components'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import { LazyImage, Heading, Seo, Link, BookTimeForm } from '../../components'

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

export default function Post ({ bio, data }) {
  const {
    name,
    userName,
    image: imageSrc = '',
    appointmentsEnabled = true,
    questions = [],
    pageName,
    id,
    contactEmails = []
  } = data

  console.log('slugslug', bio)
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.FLAREACT_PUBLIC_RECAPTCHA_SITE_KEY}>
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
              mb={{
                xs: 2,
                md: 4
              }}
            >
              @{userName}
            </Heading>
          )}
          <BookTimeForm
            questions={questions}
            appointmentsEnabled={appointmentsEnabled}
            pageName={pageName}
            pageId={id}
            contactEmails={contactEmails}
          />
        </x.div>
        <x.div display="flex" justifyContent="center" w="100%" mb={6}>
          <Link href="/" aria-label="cool.bio logo">
            <LazyImage w="130px" src="assets/logo.svg" alt="cool.bio's logo" />
          </Link>
        </x.div>
      </x.div>
    </GoogleReCaptchaProvider>
  )
}

Post.propTypes = {
  bio: PropTypes.any,
  data: PropTypes.shape({
    appointmentsEnabled: PropTypes.bool,
    contactEmails: PropTypes.array,
    id: PropTypes.any,
    image: PropTypes.string,
    name: PropTypes.any,
    pageName: PropTypes.any,
    questions: PropTypes.array,
    userName: PropTypes.any
  })
}
