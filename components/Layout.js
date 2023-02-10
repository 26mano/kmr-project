import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export const Layout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
