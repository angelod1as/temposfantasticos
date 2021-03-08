import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import GlobalStyle from '@styles/GlobalStyle'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FirstHead />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

function FirstHead() {
  return (
    <Head>
      {/* FONTS */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap"
        rel="stylesheet"
      />
      {/* FAVICON */}
      <link rel="icon" href="/favicon.ico" />
      {/* <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" /> */}
      {/* <link rel="apple-touch-icon" href="/apple.png" /> */}
      {/* <link rel="manifest" href="/manifest.webmanifest"></link> */}
      {/* META */}
      {/* Primary Meta Tags */}
      <title key="title">Tempos Fantásticos</title>
      <meta name="title" key="meta-title" content="Tempos Fantásticos" />
      <meta
        name="description"
        key="meta-description"
        content="Jornal satírico de ficção científica e fantástica"
      />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.temposfantasticos.com" />
      <meta property="og:title" key="og:title" content="Tempos Fantásticos" />
      <meta
        property="og:description"
        key="og:description"
        content="Jornal satírico de ficção científica e fantástica"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/angelodias/image/upload/v1615163136/portfolio/projects/tempos-fantasticos/social_bfu48f.jpg"
      />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.temposfantasticos.com"
      />
      <meta
        property="twitter:title"
        key="tw:title"
        content="Tempos Fantásticos"
      />
      <meta
        property="twitter:description"
        key="tw:description"
        content="Jornal satírico de ficção científica e fantástica"
      />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/angelodias/image/upload/v1615163136/portfolio/projects/tempos-fantasticos/social_bfu48f.jpg"
      />
      <meta
        name="keywords"
        content="portfolio, coding, writing, design, programming, angelo, dias, react, node, javascript, typescript"
      />
      <meta name="author" content="Angelo Dias <oiangelodias@gmail.com>" />
      <meta name="url" content="https://www.temposfantasticos.com" />
    </Head>
  )
}

export default App
