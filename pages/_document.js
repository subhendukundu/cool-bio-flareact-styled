import React from 'react'
import Document, { Html, Head, Main, FlareactScript } from 'flareact/document'
import { ServerStyleSheet } from '@xstyled/styled-components'

export default class MyDocument extends Document {
  static async getEdgeProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getEdgeProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <FlareactScript />
        </body>
      </Html>
    )
  }
}
