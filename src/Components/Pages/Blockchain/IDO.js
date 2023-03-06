import React from 'react'
import Footer from '../../Home/Footer/Footer'
import Header from '../../Home/Header/Header'
import idoBanner from '../../../images/IDO banner.png'
import './ido.scss'
import ido from '../../../images/ido.jpg'
import why from "../../../images/why.png"

function IDO() {
return (
<>
  <Header />
  <div className='section-ido mb-5'>
    <div className='banner'>
      <img src={idoBanner} />
    </div>
    <div className='container'>
      <h2>INITIAL DEX OFFERING (IDO) DEVELOPMENT</h2>
      <div className='description'>IDO development is creating tokens for crowdfunding that allow startups to raise
        funds in the most credible way. It gains the attention of promising investors in the space as the method has
        become reliable due to its usage of decentralized crypto exchanges. IDOs can be created for anything from
        cryptocurrency to a music album, to aether-powered warships. Developing IDO tokens can benefit both projects and
        investors due to their credible nature.</div>
    </div>
    <div className='bg-gray'>
      <div className='container'>
        <h4 className='text-center'>Benefits of (IDO) Initial DEX Offering</h4>
        <div className="row justify-content-between mt-5">
          <div className="col-md-3 benefit-box">
            <h6>Immediate Liquidity</h6>
            <div className="content">An entrepreneur would benefit from the funds gathered through the IDO campaign, as
              they can access the funds immediately without anyone needing to give access.</div>
          </div>
          <div className="col-md-3 benefit-box">
            <h6>IDO Marketing Services</h6>
            <div className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
          </div>
          <div className="col-md-3 benefit-box">
            <h6>Low Cost</h6>
            <div className="content">If a project’s token uses a liquidity exchange, It only costs a few euros of gas
              fee for deploying a new smart contract. This smart contract takes control of the assets token and
              liquidity pool.</div>
          </div>
        </div>
        <div className="row justify-content-between mt-5">
          <div className="col-md-3 benefit-box">
            <h6>Fast Trading</h6>
            <div className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s</div>
          </div>
          <div className="col-md-3 benefit-box">
            <h6>--------------</h6>
            <div className="content">Initial Dex Offerings help in generating funds for new crypto projects.</div>
          </div>
          <div className="col-md-3 benefit-box">
            <h6>---------------</h6>
            <div className="content">Assist small businesses in establishing their presence in the huge crypto market by
              connecting them with the right investor communities.</div>
          </div>
        </div>
      </div>
    </div>
    <div className="container approach mt-5">
      <h4 className="text-center">Our Approach to Launch Your IDO</h4>
      <div className="row mt-5 justify-content-between">
        <div className="col-md-6 approach-box">
          <ul>
            <li><span>Create a Whitepaper- </span>We draft detailed and comprehensive whitepaper services to aid the launch of your new project to the crypto market.</li>
            <li><span>Create a Strategy & Roadmap- </span>We adopt strategic time-based roadmaps to visualize your product’s direction and assist in securing stakeholders.</li>
            <li><span>Create a Marketing Plan- </span>We devise well-thought-out marketing strategies that are methodically crafted and, thus, increase your market presence.</li>
            <li><span>Development of Coins- </span>We provide secure, customizable token development services. We are a trusted and established one-stop-shop.</li>
            <li><span>Integration of the Blockchain- </span>We develop and integrate platforms to standardize, automate, and secure an IDO across a variety of industries.</li>
            <li><span>Launch Support- </span>To guarantee a successful product launch, we give specialized support from our seasoned experts.</li>
          </ul>
        </div>
        <div className="col-md-5 ido-image">
          <img src={ido} />
        </div>
      </div>
    </div>
    <div className="bg-gray mt-5">
      <div className="container">
        <h4 className="text-center">Launchpad</h4>
        <div className="row justify-content-between mt-5 mb-5">
          <div className="col-md-5 launchpad-types">
            <h5 className="text-center">Centralised</h5>
            <div className="launchpad-box">
              <ul>
                <li className="text-center mt-4">Launchpad – Centralised (ETH)</li>
                <li className="text-center mt-3">Launchpad – Centralised (BSC)</li>
                <li className="text-center mt-3">Launchpad – Centralised (MATIC)</li>
                <li className="text-center mt-3">Launchpad – Centralised (AVALANCHE)</li>
                <li className="text-center mt-3">Launchpad – Centralised (THETA)</li>
                <li className="text-center mt-3">Launchpad – Centralised (SOLANA)</li>
                <li className="text-center mt-3">Launchpad – Centralised (CARDANO)</li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 launchpad-types">
            <h5 className="text-center">Decentralised</h5>
            <div className="launchpad-box">
              <ul>
                <li className="text-center mt-4">Launchpad – Decentralised (ETH)</li>
                <li className="text-center mt-3">Launchpad – Decentralised (BSC)</li>
                <li className="text-center mt-3">Launchpad – Decentralised (MATIC)</li>
                <li className="text-center mt-3">Launchpad – Decentralised (AVALANCHE)</li>
                <li className="text-center mt-3">Launchpad – Decentralised (THETA)</li>
                <li className="text-center mt-3">Launchpad – Decentralised (SOLANA)</li>
                <li className="text-center mt-3">Launchpad – Decentralised (CARDANO)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <div className="row justify-content-between why-section">
        <div className="col-md-5 why-us">
          <h5>Why web3inventiv for IDO Launchpad Development?</h5>
          <ul>
            <li>Experienced Blockchain Developers</li>
            <li>Expertise in Developing Major Blockchains</li>
            <li>Proven IDO Project Consultants</li>
            <li>Concise Whitepaper Development</li>
            <li>Targeted IDO Project Promotions</li>
          </ul>
        </div>
        <div className="col-md-5">
          <img src={why} alt=""/>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</>
)
}

export default IDO