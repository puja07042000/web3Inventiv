import React from 'react'
import Header from '../../Home/Header/Header'
import Footer from '../../Home/Footer/Footer'
import './About.scss'

function About() {
  return (
    <>
      <Header />
      <div className='about-us-page common-page'>
        <div className='container'>
          <div className='title'>
            <h2>About Us</h2>
          </div>
        </div>
      </div>
      <div className='container about-desc'>
        <div className='py-5'>
          <h3>About Web3Inventive</h3>
          <div className='mt-4 description'>Web3inventiv is not the earliest to arrive in the market for blockchain and cryptocurrency development but the most advanced and latest. Why is that? - we are a group of experts with over 5 years of blockchain industry experience. We are leading, Full-Service Software Development Company for Blockchain, Metaverse, IoT, Artificial Intelligence, Mobile, and Web Development with a special focus on Timeliness, Security, Scale, and Performance.</div>
          <h3 className='best'>What We Do Best</h3>
          <div className='mt-4'>
          We start by listening to the issues, requirements, challenges and objectives. Then we put effort into understanding the business, market sector and competitors to develop information which is combined with our technical knowledge, expertise and research in order to provide the best solution at the lowest cost.
          </div>
          <div className='row'>
            <div className='col-md-2 key-feature'>
              <div className='title'>Our Vision</div>
              <div className='content'>Our vision is to provide complete business solutions with "Leading Edge Technology" and become the best IT service provider in India.</div>
            </div>
            <div className='col-md-2 key-feature'>
              <div className='title'>Our Mission</div>
              <div className='content'>Our mission is to develop "State of the Art" websites/apps that help businesses thrive into today's competitive marketplace.</div>
            </div>
            <div className='col-md-2 key-feature'>
              <div className='title'>Our Values</div>
              <div className='content'>We concern for the customers satisfaction.</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
