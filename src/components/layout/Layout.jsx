import React from 'react'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'

const Layout = ({children}) => {
  return (
    <>
        {children}
        <Footer/>
    </>
  )
}

export default Layout