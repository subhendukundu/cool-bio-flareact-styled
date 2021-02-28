import React from 'react'
import styled, { x } from '@xstyled/styled-components'

import Heading from 'components/Heading'
import Link from 'components/Link'

import { footerData } from '../configs/landing'

const SocialLinks = [
  {
    icon: 'assets/fb.svg',
    link: 'https://www.facebook.com/thecoolbio',
    key: 'fb'
  },
  {
    icon: 'assets/instagram.svg',
    link: 'https://www.instagram.com/thecoolbio',
    key: 'Insta'
  },
  {
    icon: 'assets/linkedin.svg',
    link: 'https://www.linkedin.com/company/thecoolbio',
    key: 'Linkedin'
  },
  {
    icon: 'assets/twitter.svg',
    link: 'https://twitter.com/thecoolbio',
    key: 'Twitter'
  }
]

const Wrapper = styled.footer`
  font-style: normal;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 7 24;
  padding-bottom: 0;
  ul {
    list-style: none;
    padding: 0;
    color: #aeafb3;
    font-weight: normal;
  }
  div {
    font-size: 18px;
    font-weight: bold;
  }
  @media (max-width: 767px) {
    padding: 50px 20px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto auto;
  }
`

const Footer = () => {
  return (
    <x.div backgroundColor="#fcfcfc">
      <Wrapper>
        <x.div
          display="flex"
          h="150px"
          flexDirection="column"
          justifyContent="space-between"
          fontStyle="normal"
          fontWeight="normal"
          fontSize="14px"
          lineHeight="21px"
          color="#030047"
        >
          <Link href="/" aria-label="cool.bio">
            <x.img w="130px" src="assets/logo.svg" alt="cool.bio's logo" />
          </Link>
          <x.div
            display="flex"
            fontStyle="normal"
            fontWeight="normal"
            fontSize="14px"
            lineHeight="21px"
            color="#030047"
          >
            The new way of making <br /> money
          </x.div>
        </x.div>
        {footerData.map((item) => (
          <x.div display="flex" flexDirection="column" key={item.key}>
            <Heading
              as="h3"
              fontSize={{ xs: 'xl', md: '2xl' }}
              fontWeight="500"
              marginBottom="1.2rem"
            >
              {item.label}
            </Heading>
            <ul>
              {item.categories.map((category, index) => (
                <x.li pt={index !== 0 ? 2 : 0} key={category.key}>
                  <Link
                    aria-label={category.label}
                    href={category.href}
                    color="rgb(174, 175, 179)"
                    fontSize={{ xs: 'sm', md: 'base' }}
                  >
                    {category.label}
                  </Link>
                </x.li>
              ))}
            </ul>
          </x.div>
        ))}
      </Wrapper>
      <x.div
        display="flex"
        pl={{ xs: 4, md: 24 }}
        pt={{ xs: 4, md: 7 }}
        paddingBottom="50px"
      >
        {SocialLinks.map(({ link, icon, key }) => {
          return (
            <x.div
              key={key}
              p={{ xs: 2, md: 3 }}
              as="a"
              href={link}
              aria-label={key}
            >
              <x.img
                w="30px"
                h="30px"
                src={icon}
                objectFit="contain"
                alt={`cool.bio's ${key} profile`}
              />
            </x.div>
          )
        })}
      </x.div>
      <hr
        style={{
          margin: '0',
          height: '15px'
        }}
        color={'#F87E0F'}
      />
    </x.div>
  )
}

export default Footer
