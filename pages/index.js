import React from 'react'
import styled, { x } from '@xstyled/styled-components'

import TopBar from 'components/TopBar'
import Nav from 'components/Nav'
import LazyImage from 'components/LazyImage'
import Heading from 'components/Heading'
import Text from 'components/Text'
import Button from 'components/Button'
import Footer from 'components/Footer'
import Seo from 'components/Seo'

import { landingData } from '../configs/landing'
import seoData from '../flareact-seo.config'

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  :nth-child(even) {
    flex-direction: row-reverse;
    @media (max-width: 767px) {
      align-items: center;
      flex-direction: column-reverse;
    }
  }

  margin: 100px 0;
  @media (max-width: 767px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`

export default function Home () {
  return (
    <>
      <Seo
        description={seoData.description}
        title={seoData.title}
        image={seoData.openGraph.image.url}
      />
      <TopBar />
      <x.div maxWidth="1200px" m="0 auto" mt={8}>
        <Nav />
        <Heading
          as="h1"
          fontWeight="700"
          color="#F87E0F"
          fontSize={{ xs: '3xl', md: '5xl' }}
          lineHeight={1}
          mt={{ xs: 14, md: 32 }}
          textAlign="center"
        >
          Be Cool! Earn With cool.bio
        </Heading>
        <x.div m="0 auto" mt={{ md: -4, xs: -3 }} w={{ md: '80%', xs: 'auto' }}>
          <LazyImage
            height={{ md: '550px', xs: '400px' }}
            src="assets/hero.svg"
            alt="cool.bio hero"
          />
        </x.div>
        <x.div px={{ md: 12, xs: 6 }} m="0 auto">
          {landingData.map((item) => {
            return (
              <Section
                key={item.title}
                justifyContent="space-between"
                alignItems="center"
                my={24}
              >
                <x.div
                  w={{ xs: 'auto', md: '400px' }}
                  textAlign={{ xs: 'center', md: 'inherit' }}
                  mt={{ xs: 8, md: 16 }}
                >
                  <Heading
                    lineHeight={1}
                    fontSize={{ xs: '2xl', md: '4xl' }}
                    fontWeight="700"
                  >
                    {item.title}
                  </Heading>
                  <Text
                    marginTop="1.5rem"
                    color="#2f4858"
                    lineHeight={1.2}
                    fontSize={{ xs: 'tiny', md: 'base' }}
                  >
                    {item.des}
                  </Text>
                  <x.div
                    display="flex"
                    justifyContent={{ md: 'flex-start', xs: 'center' }}
                  >
                    <Button
                      href="https://app.cool.bio/login"
                      as="a"
                      target="_newtab"
                      marginTop="3rem"
                      variant="outline"
                      color="#F87E0F"
                      fontSize={{ _: 'l', xs: 'sm', md: 'l' }}
                      fontWeight="500"
                      aria-label={item.title}
                      rel="noopener"
                    >
                      Try now
                    </Button>
                  </x.div>
                </x.div>
                <LazyImage
                  src={item.img}
                  alt={item.alt}
                  marginBottom="2rem"
                  width={{ xs: '80%', md: '400px' }}
                  height="auto"
                />
              </Section>
            )
          })}
        </x.div>
        <Footer />
      </x.div>
    </>
  )
}
