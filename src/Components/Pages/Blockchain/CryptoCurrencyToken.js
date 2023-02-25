import React from 'react'
import Footer from '../../Home/Footer/Footer'
import Header from '../../Home/Header/Header'
import currencyToken from '../../../images/cryptoToken.jpg'
import bitcoin from "../../../images/currency-g0d0bad874_1280.jpg"
import litecoin from "../../../images/web3litecoin.jpg"
import ripple from "../../../images/web3-ripple.jpg"
import tether from "../../../images/web3-tether.jpg"
import cardano from "../../../images/web3_cardano.jpg"
import bitcoinCash from "../../../images/web3-bitcoin-cash.jpg"
import chainLink from "../../../images/web3_chainlink.jpg"
import Stellar from "../../../images/web3_stellar.png"
import USDCoin from "../../../images/web3USD.jpg"
import bitcoinSV from "../../../images/web3bitcoinsv.jpg"
import './crypto-currency.scss'

function CryptoCurrencyToken() {
  return (
    <>
      <Header />
      <div className='crypto-currency-section'>
        <div className='banner'>
          <img src={currencyToken} />
        </div>
        <div className="container">
          <h2 className="text-center">Cryptocurrency Token Development</h2>
          <div className="description">Considered as the money of the future, cryptocurrency is a digital asset developed to
            work as a reliable medium of exchange.</div>
          <h4>Our Cryptocurrency Development Services</h4>
          <ul className="services mt-4">
            <li><span>Wallet Development:</span>Custom cryptocurrency wallet development with bank-grade security for easier
              and faster payment solutions.</li>
            <li><span>Coin Development:</span>Coins are a crucial part of this technology, and they will be leading the
              finance market in upcoming years.</li>
            <li><span>Cryptocurrency Exchange:</span>Secure, flexible, and customisable cryptocurrency exchange software
              solutions for easier and faster transactions.</li>
            <li><span>ICO Development Services:</span>Elaborate ICO development solutions, from conceptual token design to
              launch and infrastructure maintenance.</li>
            <li><span>Cryptocurrency Mining:</span>It is essential to verify and add cryptocurrency transactions into the
              public ledger. We offer mining services to do this.</li>
            <li><span>Bitcoin Software:</span>We convert your phone into a dedicated mobile wallet enabling you to carry out
              transactions over communication channels. From here, miners will evaluate and authenticate your transactions.
            </li>
          </ul>
        </div>
        <div className="bg-gray mb-5">
          <div className="container">
            <h4 className="text-center">How to Create your Own Cryptocurrency?</h4>
            <div className="col-md-12 mt-5">
              <div className="timeline-center">
                <div className="timeline-row">
                  <div className="tm-icon">
                    <span>1</span>
                  </div>
                  <div className="tm-details">
                    <h4>Ideation & Whitepaper Creation</h4>
                    <p>We work to determine the best achievable vision to present in the whitepaper.</p>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="tm-icon">
                    <span>2</span>
                  </div>
                  <div className="tm-details">
                    <h4>ICO Marketing & Dashboard Setup</h4>
                    <p>Ramping up community support through Telegram, Reddit, Steemit, Twitter and Facebook.</p>
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
                    <p>Drop the allotted, bought amount of coins/tokens to your investors’ white-labeled web and mobile wallets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h4>Our Cryptocurrency Development Platforms</h4>
          <div className="description">We ergonomically develop crypto replicas of the following cryptocurrency</div>
          <div className="row justify-content-between">
            <div className="col-md-2 platforms">
              <div className='img-parent mb-3'>
                <img src={bitcoin} />
              </div>
              <h4>Bitcoin</h4>
            </div>
            <div className="col-md-2 platforms">
              <div className='img-parent mb-3'>
                <img src={litecoin} />
              </div>
              <h4>Litecoin</h4>
            </div>
            <div className="col-md-2 platforms">
              <div className='img-parent mb-3'>
                <img src={ripple} />
              </div>
              <h4>Ripple</h4>
            </div>
            <div className="col-md-2 platforms">
              <div className='img-parent mb-3'>
                <img src={tether} />
              </div>
              <h4>Tether</h4>
            </div>
            <div className="col-md-2 platforms">
              <div className='img-parent mb-3'>
                <img src={cardano} />
              </div>
              <h4>Cardano</h4>
            </div>
          </div>
          <div className="row justify-content-between mt-3">
            <div className="col-md-2 platforms">
              <div className='img-parent mb-3'>
                <img src={bitcoinCash} />
              </div>
              <h4>Bitcoin Cash</h4>
            </div>
            <div className="col-md-2 platforms">
              <div className='img-parent mb-3'>
                <img src={chainLink} />
              </div>
              <h4>Chain Link</h4>
            </div>
            <div className="col-md-2 platforms">
              <div className='img-parent mb-3'>
                <img src={Stellar} />
              </div>
              <h4>Stellar</h4>
            </div>
            <div className="col-md-2 platforms">
              <div className='img-parent mb-3'>
                <img src={USDCoin} />
              </div>
              <h4>USD Coin</h4>
            </div>
            <div className="col-md-2 platforms">
              <div className='img-parent mb-3'>
                <img src={bitcoinSV} />
              </div>
              <h4>Bitcoin SV</h4>
            </div>
          </div>
        </div>
        <div className="bg-gray">
          <div className="container">
            <h4 className="text-center">Why web3inventiv</h4>
            <div className="description mt-5 mb-3">We makes it easy for you to empower your enterprise with crypto and its benefits. We deliver the most appropriate crypto-based services and products that you can easily implement in your company. We let you choose the most skilled developers with a step-by-step hiring process and give you the right to tweak the process if you want. Our team equips your business with cutting-edge solutions that have the capacity to make you a front-runner in your domain.</div>
            <div className="description">When you hire cryptocurrency developers from us, you get befitting candidates who are ready to work as per your terms. With our solutions, your company can outflank all your competitors and remain one step ahead in the domain. Besides being focused on the quality of the product, we also ensure that the project gets completed within the deadline and you don’t have to wait for long. We also let you hire Bitcoin developers, Ethereum developers, MLM software developers, and cryptocurrency coin/token developers with a full-fledged recruitment process. This ensures that the candidate chosen for a particular project meets all the criteria put forth by the clients.</div>
            <div className="timeline-center">
              <div className="timeline-row">
                <div className="tm-icon">
                  <span>1</span>
                </div>
                <div className="tm-details">
                  <h4>Focus on security features</h4>
                  <p>The best security feature sets are utilized.</p>
                </div>
              </div>
              <div className="timeline-row">
                <div className="tm-icon">
                  <span>2</span>
                </div>
                <div className="tm-details">
                  <h4>Team with technical expertise</h4>
                  <p>Our team consists of qualified engineers with real-world experience.</p>
                </div>
              </div>
              <div className="timeline-row">
                <div className="tm-icon">
                  <span>3</span>
                </div>
                <div className="tm-details">
                  <h4>24x7 availability and customer support</h4>
                  <p>Our team is always available for you to discuss your ideas with them.</p>
                </div>
              </div>
              <div className="timeline-row">
                <div className="tm-icon">
                  <span>4</span>
                </div>
                <div className="tm-details">
                  <h4>Customized services for each client</h4>
                  <p>Our services are tailor-made to meet the necessities of each client.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CryptoCurrencyToken