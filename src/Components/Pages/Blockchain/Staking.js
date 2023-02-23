import React from 'react'
import Header from '../../Home/Header/Header'
import staking from '../../../images/staking.jpg'
import smartContract from '../../../images/smart-contract.jpg'
import income from "../../../images/currency-g0d0bad874_1280.jpg"
import governModal from "../../../images/blog-1.jpg"
import defi from "../../../images/defi.jpg"
import './staking.scss'
import Footer from '../../Home/Footer/Footer'
import shaking from "../../../images/shaking.jpg"
import yeild from "../../../images/meet.jpg"
import bitcoin from "../../../images/bitcoin (1).png"
import binance from "../../../images/web3Binance.jpg"
import coinDCX from "../../../images/web3Coin.jpg"
import bifinex from "../../../images/web3Bifine.jpg"
import polonix from "../../../images/web3Polo.jpg"
import why from "../../../images/why.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer, faPeopleRoof, faCalculator, faChartColumn } from "@fortawesome/free-solid-svg-icons";


function Staking() {
  return (
    <>
      <Header />
      <section className='staking mb-5'>
        <div className='banner'>
          <img src={staking} alt="not found" />
        </div>
        <h2 className='text-center'>STAKING & YIELD FARMING PLATFORM DEVELOPMENT</h2>
        <div className='container mt-5'>
          <div className='row justify-content-between align-items-center section-margin'>
            <div className='col-md-5'>
              <div className='question'>What is Staking?</div>
              <div className='mt-3 content'>Staking is the act of putting up collateral as proof of a party’s stake in the game in the crypto world. The staker’s actions are in good faith if they have exhibited a financial interest in the protocol’s future success. It is a mechanism derived from the Proof of Stake (PoS) consensus model —an alternative to Proof of Work (PoW).</div>
            </div>
            <div class="col-md-5 image-parent">
              <img src={shaking} alt="not found" />
            </div>
          </div>
          <div className='row justify-content-between align-items-center mt-5 mb-5'>
            <div class="col-md-5 image-parent">
              <img src={yeild} alt="not found" />
            </div>
            <div className='col-md-5'>
              <h6 className='mt-5'>What is Yield Farming?</h6>
              <div className='mt-3 content'>Users can earn a passive income by storing their crypto in a liquidity pool, which are like centralized finance or the CeFi counterpart of your bank account. You deposit your funds that the bank utilizes to credit loans to others, paying you a fixed proportion of the interest gained.</div>
            </div>
          </div>
          <div className="benifits-box mt-5 mb-5">
            <h2 className="text-center">Benefits of DeFi Staking</h2>
            <div className="row mt-5">
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract} alt="not found" />
                </div>
                <div className="content">Smart contracts make it simple to control and secure data.</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={income} alt="not found" />
                </div>
                <div className="content">One of the simplest methods for generating passive income.</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={governModal} alt="not found" />
                </div>
                <div className="content">A fantastic opportunity to engage in the protocol governance model.</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={defi} alt="not found" />
                </div>
                <div className="content">In DeFi Staking, there are no security issues to contend with.</div>
              </div>
            </div>
            {/* <div className="row mt-3">
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract} alt="not found" />
                </div>
                <div className="content">Smart contracts make it simple to control and secure data.</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract} alt="not found" />
                </div>
                <div className="content">One of the simplest methods for generating passive income.</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract} alt="not found" />
                </div>
                <div className="content">A fantastic opportunity to engage in the protocol governance model.</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract} alt="not found" />
                </div>
                <div className="content">In DeFi Staking, there are no security issues to contend with.</div>
              </div>
            </div> */}
          </div>
        </div>
        <div className='bg-gray mt-5'>
          <div className='container'>
            <div className="platforms mt-5">
              <h2 className="text-center">Crypto Exchange Platforms that Support DeFi Staking</h2>
              <div className="row mt-5">
                <div className="col-md-3">
                  <div className="images">
                    <img src={binance} alt="not found" />
                  </div>
                  <div className="title">Binance</div>
                </div>
                <div className="col-md-3">
                  <div className="images">
                    <img src={coinDCX} alt="not found" />
                  </div>
                  <div className="title">Coin DCX</div>
                </div>
                <div className="col-md-3">
                  <div className="images">
                    <img src={bifinex} alt="not found" />
                  </div>
                  <div className="title">Bifinex</div>
                </div>
                <div className="col-md-3">
                  <div className="images">
                    <img src={polonix} alt="not found" />
                  </div>
                  <div className="title">Poloniex</div>
                </div>
              </div>
            </div>
            <div className='features'>
              <h4 className='text-center'>Features of a DeFi Staking Platform</h4>
              <div className="row justify-content-between mt-5">
                <div className="col-md-2 feature-box">
                  <img src={bitcoin} alt="not found" />
                  <div className="mt-1">Crypto On-Ramping</div>
                </div>
                <div className="col-md-2 feature-box">
                  <FontAwesomeIcon icon={faMoneyBillTransfer} />
                  <div className="mt-1">Easy Deposit/Withdrawal</div>
                </div>
                <div className="col-md-2 feature-box">
                  <FontAwesomeIcon icon={faPeopleRoof} />
                  <div className="mt-1">Portfolio Management</div>
                </div>
                <div className="col-md-2 feature-box">
                  <FontAwesomeIcon icon={faCalculator} />
                  <div className="mt-1">Gains Calculator</div>
                </div>
                <div className="col-md-2 feature-box">
                  <FontAwesomeIcon icon={faChartColumn} />
                  <div className="mt-1">Charts and Reports</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-between choose-us'>
          <div className='col-md-5'>
            <h4>Why Choose Web3inventiv for Staking and Yield Farming?</h4>
            <div className='text-justify content mt-4'>Web3inventiv offers development services for defi staking pools to expand the reach of DeFi staking platforms. Many crypto enthusiasts consider them exciting features of the decentralised world. Furthermore, our pool of blockchain architects and DeFi developers are guaranteed to deliver quality DeFi staking development services to launch your DeFi staking platform. </div>
          </div>
          <div className='col-md-5 image-parent'>
            <img src={why} alt="not found" />
          </div>
        </div>

      </section>
      <Footer />
    </>
  )
}

export default Staking
