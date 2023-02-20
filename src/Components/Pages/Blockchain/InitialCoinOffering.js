import React from 'react'
import Header from '../../Home/Header/Header'
import Footer from '../../Home/Footer/Footer'
import shaking from '../../../images/shaking.jpg'
import './crypto-currency.scss'
import whitepaper from '../../../images/whitepaper.png'
import tokenDevelopment from '../../../images/token-development.png'
import ico from '../../../images/ico-marketing.png'
import communityBuilding from '../../../images/community-building.png'
import whyIMG from '../../../images/why.png'
import './initialcoin-offer.scss'

function InitialCoinOffering() {
return (
<>
  <Header />
  <div class="initialcoin-section">
    <div className='banner'>
      <img src={shaking} />
    </div>
    <div className="container">
      <h2 className="text-center">Initial Coin Offering Development</h2>
      <div className="description mb-3">Initial Coin Offerings (ICO) is the fund raising mechanism for startup business or new project developers to sell their crypto token in exchange with fiat currency or other cryptocurrencies. It is similar to an IPO where a part of company shares are sold to get funding.</div>
      <div class="description">Web3inventiv consists of a team of developers with solid experience and encyclopedic knowledge in the field. Our optimized ICO development solutions will set you up for success and help stay ahead of the competition in the market.Raise your Initial Coin offering with minimal steps and get guidance from our in-house Blockchain experts.</div>
      <h4 className="text-center">Our ICO Development Services</h4>
      <div class="row justify-content-between mt-5">
        <div class="col-md-3">
          <div class="ico-service-box">
            <img src={whitepaper} />
            <div>
              <h5>Whitepaper</h5>
              <div className='description mb-2'>Our intelligent technical writers will create a clear-cut and comprehensive whitepapers that explains your ICO process in a well detailed manner. </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="ico-service-box">
            <img src={tokenDevelopment} />
            <div>
              <h5>Token Development</h5>
              <div className='description mb-2'>We design and build models for cryptocurrency tokens and prepare it for the ICO launch to make it stand out from the rest.</div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="ico-service-box">
            <img src={ico} />
            <div>
              <h5>ICO Marketing</h5>
              <div className='description mb-2'>Our unique and creative marketing strategy will give you success and yield notorious result in the ICO world.</div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="ico-service-box">
            <img src={communityBuilding} />
            <div>
              <h5>Community Building</h5>
              <div className='description mb-2'>Our expert team build independent communities across categories powered by blockchain solutions for a strong foundation.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-gray'>
      <div className='container'>
        <h4 className='text-center mb-3'>How to initiate your ICO funding?</h4>
        <h6 className='text-center mb-5'>This is our tried and trusted model for successfully Launch your ICO</h6>
        <div className="timeline-center">
          <div className="timeline-row">
            <div className="tm-icon">
              <span>1</span>
            </div>
            <div className="tm-details">
              <h4>Ideation & Whitepaper Creation</h4>
              <p> Brainstorming with our blockchain experts to determine the best achievable vision to present in the whitepaper.</p>
            </div>
          </div>
          <div className="timeline-row">
            <div className="tm-icon">
              <span>2</span>
            </div>
            <div className="tm-details">
              <h4>Pre-ICO Marketing & Dashboard Setup</h4>
              <p>Gaining community support through Telegram, Reddit, Steemit, Twitter and Facebook. Investor dashboard setup.</p>
            </div>
          </div>
          <div className="timeline-row">
            <div className="tm-icon">
              <span>3</span>
            </div>
            <div className="tm-details">
              <h4>Initial Coin Offering Open To All</h4>
              <p>Open up the Pre-ICO and ICO in timed countdown intervals so that they commit investment amounts that you determine and are allowed to buy your coin/token as you determine the price.</p>
            </div>
          </div>
          <div className="timeline-row">
            <div className="tm-icon">
              <span>4</span>
            </div>
            <div className="tm-details">
              <h4>Wallet Setup & Coin Drop</h4>
              <p>Drop the allotted, bought amount of coins/tokens to your investors’ white labeled web and mobile wallets.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container mt-5 mb-5'>
      <div className='row justify-content-between align-items-center'>
        <div className='col-md-6'>
          <h4>Why choose us?</h4>
          <div className='description'>We have full stacked ICO consultants to render exclusive service in giving you insight knowledge about ICO. We have the best blockchain developers with pro-level experience in creating new cryptocurrencies and ICO development</div>
        </div>
        <div className='col-md-5'>
          <img src={whyIMG} className="w-100 h-100"
          />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</>
)
}

export default InitialCoinOffering