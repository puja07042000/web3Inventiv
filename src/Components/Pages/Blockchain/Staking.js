import React from 'react'
import Header from '../../Home/Header/Header'
import staking from '../../../images/staking.jpg'
import smartContract from '../../../images/smart-contract.jpg'
import './staking.scss'
import Footer from '../../Home/Footer/Footer'

function Staking() {
  return (
    <>
      <Header />
      <section className='staking mb-5'>
        <div className='banner'>
          <img src={staking} />
        </div>
        <div className='container mt-5'>
          <h2 className='text-center'>STAKING & YIELD FARMING PLATFORM DEVELOPMENT</h2>
          <div className='row justify-content-between align-items-center mt-5'>
            <div className='col-md-5'>
              <h6 className='mt-5'>What is Staking?</h6>
              <div className='mt-3 content'>Staking is the act of putting up collateral as proof of a party’s stake in the game in the crypto world. The staker’s actions are in good faith if they have exhibited a financial interest in the protocol’s future success. It is a mechanism derived from the Proof of Stake (PoS) consensus model —an alternative to Proof of Work (PoW).</div>
            </div>
            <div class="col-md-5">images</div>
          </div>
          <div className='row justify-content-between align-items-center mt-5 mb-5'>
            <div class="col-md-5">images</div>
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
                  <img src={smartContract} />
                </div>
                <div className="content">Smart contracts make it simple to control and secure data.</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract} />
                </div>
                <div className="content">One of the simplest methods for generating passive income.</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract} />
                </div>
                <div className="content">A fantastic opportunity to engage in the protocol governance model.</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract} />
                </div>
                <div className="content">In DeFi Staking, there are no security issues to contend with.</div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract} />
                </div>
                <div className="content">Smart contracts make it simple to control and secure data.</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract} />
                </div>
                <div className="content">One of the simplest methods for generating passive income.</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract} />
                </div>
                <div className="content">A fantastic opportunity to engage in the protocol governance model.</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract} />
                </div>
                <div className="content">In DeFi Staking, there are no security issues to contend with.</div>
              </div>
            </div>
          </div>
          <div className="platforms mt-5">
            <h2 className="text-center">Crypto Exchange Platforms that Support DeFi Staking</h2>
            <div className="row mt-5">
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract}/>
                </div>
                <div className="title">Binance</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract}/>
                </div>
                <div className="title">Coin DCX</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract}/>
                </div>
                <div className="title">Bifinex</div>
              </div>
              <div className="col-md-3">
                <div className="images">
                  <img src={smartContract}/>
                </div>
                <div className="title">Poloniex</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Staking
