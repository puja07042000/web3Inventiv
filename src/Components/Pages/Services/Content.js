import React from 'react'
import './Content.scss'
import { faGears, faRobot, faBriefcase, faFileShield, faCloudMeatball, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import defi from "../../../images/defi.jpg";
import stakingYield from "../../../images/Staking and Yield Farming-jpg.jpg";
import shaking from "../../../images/shaking.jpg"
import ido from "../../../images/IDO.png"
import smartContract from "../../../images/Smartcontract-jpg.jpg"
import staking from "../../../images/staking.jpg"
import dce from "../../../images/DECENTRALIZED CRYPTO EXCHANGE.png"
import nft from "../../../images/meet.jpg"
import cryptoCurrency from "../../../images/currency-g0d0bad874_1280.jpg"
import mobile from "../../../images/blog-1.jpg"
import web from "../../../images/code-gbdcbc6c6b_1920.jpg"
import digitalMarketing from "../../../images/digital-marketing-g75ccb5741_1920.jpg"

function Content() {
  return (
    <>
      <section className='services-section p-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='section-title mb-5'>
                <h2>Our Core Services</h2>
                <h6 className='mb-2'>Technologies we work with</h6>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='services-category-box row justify-content-around'>
                <div className='col-lg-3 col-md-3 technology-box'>
                  <div className='img-parent'>
                    <img src={defi} />
                  </div>
                  <h5>Defi Development</h5>
                  <div className='content'>The traditional finance systems are increasingly replaced by the emerging decentralized finance applications as they provide users with more authority over their funds.</div>
                  <Link to="/defi-blockchain"><span>Learn more...</span></Link>
                </div>
                <div className='col-lg-3 col-md-3 technology-box'>
                  <div className='img-parent'>
                    <img src={stakingYield} />
                  </div>
                  <h5>Staking and Yield Farming</h5>
                  <div className='content'>Staking is the act of putting up collateral as proof of a party’s stake in the game in the crypto world. The staker’s actions are in good faith if they have exhibited a financial interest in the protocol’s future success.</div>
                  <Link to="/staking"><span>Learn more...</span></Link>
                </div>
                <div className='col-lg-3 col-md-3 technology-box'>
                  <div className='img-parent'>
                    <img src={shaking} />
                  </div>
                  <h5>Decentralized Autonomous Organization</h5>
                  <div className='content'>A DAO is an organization where controls are spread out across the participants, instead of being built on a top-down hierarchy. The purest form of the DAO is groups that form for a common purpose, like investing in start-ups, managing a Stablecoin, or buying a bunch of NFTs.</div>
                  <Link to="/dao"><span>Learn more...</span></Link>
                </div>
                {/* <div className='col-lg-3 col-md-3 technology-box'>
                <div className='img-parent'>
                  <img src={defi}/>
                </div>
                  <h5>Staking and Yield Farming</h5>
                  <div className='content'>Staking is the act of putting up collateral as proof of a party’s stake in the game in the crypto world. The staker’s actions are in good faith if they have exhibited a financial interest in the protocol’s future success.</div>
                  <Link to="/staking"><span>Learn more...</span></Link>
                </div>
                <Link to="/defi-blockchain">Defi Development</Link>
                <Link to="/staking">Staking and Yield Farming</Link>
                <Link to="/ido">Initial dex Offering</Link>
                <Link to="/decentralized-crypto-exchange">Decentralized Crypto Exchange</Link>
                <Link to="/smart-contract">Smart Contract</Link>
                <Link to="/dapp">Decentralized App</Link>
                <Link to="/crypto-currency-token">CryptoCurrency Token</Link>
                <Link to="/initial-coin-offering">Initial Coin Offering</Link>
                <Link to="/web-development">Web Development</Link>
                <Link to="/app-development">App Development</Link>
                <Link to="lending-borrowing">DeFi Lending/Borrowing Platform Development</Link> */}
              </div>
              <div className="services-category-box row justify-content-around mt-5">
              <div className='col-lg-3 col-md-3 technology-box'>
                  <div className='img-parent'>
                    <img src={ido} />
                  </div>
                  <h5>Initial Dex Offering</h5>
                  <div className='content'>IDO development is creating tokens for crowdfunding that allow startups to raise funds in the most credible way. It gains the attention of promising investors in the space as the method has become reliable due to its usage of decentralized crypto exchanges.</div>
                  <Link to="/ido"><span>Learn more...</span></Link>
                </div>
                <div className='col-lg-3 col-md-3 technology-box'>
                  <div className='img-parent'>
                    <img src={smartContract} />
                  </div>
                  <h5>Smart Contract</h5>
                  <div className='content'>Smart contracts are the backbone of business automation. Being the best blockchain development company, we specialize to offer custom smart contract development services, irrespective of your industry.</div>
                  <Link to="/smart-contract"><span>Learn more...</span></Link>
                </div>
                <div className='col-lg-3 col-md-3 technology-box'>
                  <div className='img-parent'>
                    <img src={staking} />
                  </div>
                  <h5>Decentralized Applications</h5>
                  <div className='content'>Building Dapp is not as easy as compared to developing any centralized software or application. D-Apps is an application running on a decentralized blockchain network to eliminates the need for intermediaries to validate transactions in the network.</div>
                  <Link to="/dapp"><span>Learn more...</span></Link>
                </div>
              </div>
              <div className="services-category-box row justify-content-around mt-5">
              <div className='col-lg-3 col-md-3 technology-box'>
                  <div className='img-parent'>
                    <img src={dce} />
                  </div>
                  <h5>Decentralized Crypto Exchange</h5>
                  <div className='content'>A decentralized exchange is where the exchange does not rely on any third party for the control/ holding of customer’s funds. DeFi DEXs automatically match buyers and sellers and provide fast and safe transactions for the users.</div>
                  <Link to="/decentralized-crypto-exchange"><span>Learn more...</span></Link>
                </div>
                <div className='col-lg-3 col-md-3 technology-box'>
                  <div className='img-parent'>
                    <img src={nft} />
                  </div>
                  <h5>NFT Marketplace</h5>
                  <div className='content'>An NFT marketplace is a digital platform for buying and selling NFTs. These platforms allow people to store and display their NFTs plus sell them to others for cryptocurrency or money. Some NFT marketplaces also allow users to mint their NFTs on the platform itself.</div>
                  <Link to="#"><span>Learn more...</span></Link>
                </div>
                <div className='col-lg-3 col-md-3 technology-box'>
                  <div className='img-parent'>
                    <img src={cryptoCurrency} />
                  </div>
                  <h5>CryptoCurrency Token</h5>
                  <div className='content'>Considered as the money of the future, cryptocurrency is a digital asset developed to work as a reliable medium of exchange. Coins and tokens are preparing to become the future of the financial world.</div>
                  <Link to="/crypto-currency-token"><span>Learn more...</span></Link>
                </div>
              </div>
              <div className="services-category-box row justify-content-around mt-5">
              <div className='col-lg-3 col-md-3 technology-box'>
                  <div className='img-parent'>
                    <img src={web} />
                  </div>
                  <h5>Web Development</h5>
                  <div className='content'>We are an agile software company providing both back-end and front-end development. Our teams build web applications powered by bulletproof code, with stunning interfaces.</div>
                  <Link to="/decentralized-crypto-exchange"><span>Learn more...</span></Link>
                </div>
                <div className='col-lg-3 col-md-3 technology-box'>
                  <div className='img-parent'>
                    <img src={mobile} />
                  </div>
                  <h5>App Development</h5>
                  <div className='content'>Smartphones, tablets, wearables - follow your users where they are with carefully crafted mobile apps. Reach customers via Android, iOS, or cross-platform solutions.</div>
                  <Link to="#"><span>Learn more...</span></Link>
                </div>
                <div className='col-lg-3 col-md-3 technology-box'>
                  <div className='img-parent'>
                    <img src={digitalMarketing} />
                  </div>
                  <h5>Digital Marketing</h5>
                  <div className='content'>We are a result-oriented and customer-centric digital marketing agency in Delhi. We help our customers to find ideal clients by enhancing their visibility online. Everyone is racing to rank on top of the search engine result pages to effectively promote their offered products and services.</div>
                  <Link to="/crypto-currency-token"><span>Learn more...</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content
