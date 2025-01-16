import Layout from '@/components/layout/Layout'
import Navbar from '@/components/ui/Navbar'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
     <NextTopLoader
         color="#d3e0a3"
         initialPosition={0.08}
         height={3}
         showSpinner={false}
         easing="ease"
         speed={500}
         shadow="0 0 10px #2299DD,0 0 5px #2299DD"
         />
         <Navbar color={"secondary"}/>
   <Layout>
    <div className='mt-[90px]'></div>
        {children}
   </Layout></>
  )
}

export default layout