import React from 'react'
import PropTypes from 'prop-types'
import {
  defaultTheme,
  ThemeProvider,
  Preflight,
  createGlobalStyle
} from '@xstyled/styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const theme = {
  ...defaultTheme,
  colors: {
    primary: '#F87E0F'
  },
  reactDatepicker: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    colors: {
      accessibility: '#D80249',
      selectedDay: 'rgba(248,126,15,1)',
      selectedDayHover: 'rgba(248,126,15,.1)',
      primaryColor: 'rgba(248,126,15,1)'
    },
    datepickerZIndex: 1,
    inputLabelBorder: '1px solid rgba(226, 226, 226, 0.5)',
    inputLabelBorderRadius: '10px',
    datepickerBorderRadius: '10px',
    inputBorder: 'none',
    datepickerBoxShadow: '0px 10px 15px rgba(222, 222, 222, 0.25)',
    inputCalendarIconColor: 'rgba(248,126,15,1)',
    inputFontSize: '14px',
    inputFontWeight: 'normal'
  }
}

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Preflight />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
