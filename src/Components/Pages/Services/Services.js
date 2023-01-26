import React from 'react'
import './Services.scss'
import Header from '../../Home/Header/Header'
import Footer from '../../Home/Footer/Footer'
import Content from './Content'

function Services() {
  return (
    <>
    <Header />
    <div className='services-page common-page'>
      <div className='container'>
        <div className='title'>
          <h2>Our Services</h2>
        </div>
      </div>
    </div>
    <Content/>
    <Footer/>
    </>
  )
}

export default Services
