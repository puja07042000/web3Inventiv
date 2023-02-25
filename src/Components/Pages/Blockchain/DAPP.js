import React from 'react'
import Header from '../../Home/Header/Header'
import Footer from '../../Home/Footer/Footer'
import dapp from '../../../images/dapp.png'
import why from "../../../images/why.png"
import './dapp.scss'

function DAPP() {
  return (
    <>
      <Header />
      <div className="section-dapp">
        <div className='banner'>
          <img src={dapp} />
        </div>
        <div className='container'>
          <h2 className="text-center">dApp (Decentralized Applications) Development Company</h2>
          <div className="description">Building Dapp is not as easy as compared to developing any centralized software or application. D-Apps is an application running on a decentralized blockchain network to eliminates the need for intermediaries to validate transactions in the network. Imagine if the spare capacity of computers around the world can be utilized to serve business and people. The definition of Store of Value (SoV) has been redefined by Bitcoin and other cryptocurrencies, contributing to the future of applications in the form of Decentralized Applications (DApps).</div>
          <h3 className="mt-5">DApps Development service</h3>
          <div className="description mb-3">With Web3inventiv, you can have best Decentralized Applications with following features :</div>
          <ul className="service-list">
            <li>Secured collaborations</li>
            <li>Reduction in operational costs</li>
            <li>Seamless management of vendors and claims management.</li>
            <li>Tracking of documents in a variety of content addressable storage mechanisms.</li>
            <li>Easy linkage of rights & responsibilities to respective contract suites.</li>
          </ul>

        </div>
        <div className="bg-gray mt-5 mb-5">
          <div className="container">
            <h4 className="text-center">dApp Development Platform</h4>
            <div className="row justify-content-between mt-5">
              <div className="col-lg-3 col-md-2 col-12 feature-box">
                <h6 className="text-center">Decentralized</h6>
                <div className="content">Anybody can be part of the DAO, as long as it consents to the setup standards to take an interest, in which every part partakes in similar freedoms.</div>
              </div>
              <div className="col-lg-3 col-md-2 col-12 feature-box">
                <h6 className="text-center">DAO native token</h6>
                <div className="content">The native tokens of the DAO will have the necessary utilities according to the number of tokens staked on the platform or supplied to the liquidity pool by a user.</div>
              </div>
              <div className="col-lg-3 col-md-2 col-12 feature-box">
                <h6 className="text-center">Open Source Code</h6>
                <div className="content">DAO is an open-source platform, which implies that its code is publicly available, allowing users to collaborate and enhance the platform.</div>
              </div>
              <div className="row justify-content-between mt-5">
                <div className="col-lg-3 col-md-2 col-12 feature-box">
                  <h6 className="text-center">Blockchain Technology</h6>
                  <div className="content">The DAO platform is hosted on a blockchain, which ensures the security of the platform, manage the responsibilities of community, and NFTs can become part of the DAO platform transactions.</div>
                </div>
                <div className="col-lg-3 col-md-2 col-12 feature-box">
                  <h6 className="text-center">Transparency</h6>
                  <div className="content">Every network member has equal access to the data and can view the code, the transaction history, and other data.</div>
                </div>
                <div className="col-lg-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className='container mb-5'>
          <div className='row justify-content-between'>
            <div className='col-md-6'>
              <h3 className="mt-5">Why Web3inventiv for dApp Development?</h3>
              <ul className="mt-3 mb-5">
                <li>We have an experienced team of UI/UX designers</li>
                <li>Our Apps meet advance technological standards that help easily control critical workflows & track supply chains</li>
                <li>We design scalable dApps that ensures Quality control & Seamless integration</li>
                <li>We help you to choose the technology that fits to your business</li>
              </ul>
            </div>
            <div className='col-md-4 img-parent'>
              <img src={why} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DAPP