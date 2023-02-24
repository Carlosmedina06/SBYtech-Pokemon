import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Navbar/Nav'
import GlobalStyle from '../GlobalStyle'
import Theme from '../Themes/Themes'

import { LayoutStyle } from './LayoutStyle'

const Layout = ({ children }) => {
  const [tema, setTema] = useState('DarkTheme')

  return (
    <ThemeProvider theme={Theme[tema]}>
      <LayoutStyle>
        <GlobalStyle />
        <Nav setTema={setTema} tema={tema} />
        <main>{children}</main>
        <Footer />
      </LayoutStyle>
    </ThemeProvider>
  )
}

export default Layout
