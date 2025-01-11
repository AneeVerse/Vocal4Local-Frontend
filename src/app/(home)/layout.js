import Layout from '@/components/layout/Layout'
import React from 'react'

const layout = ({children}) => {
  return (
   <Layout>
    <div className='mt-[90px]'></div>
        {children}
   </Layout>
  )
}

export default layout