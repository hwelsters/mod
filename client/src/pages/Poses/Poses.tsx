import Footer from 'layouts/Footer'
import Navbar from 'layouts/Navbar/Navbar'
import PageContainer from 'layouts/PageContainer/PageContainer'
import ThreeColumn from 'layouts/ThreeColumn/ThreeColumn'
import React from 'react'

export default function Poses() {
  return (
    <PageContainer>
        <Navbar/>
        <ThreeColumn/>
        <Footer/>
    </PageContainer>
  )
}
