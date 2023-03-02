import React from 'react'
import './defi.scss'
import defi from '../../../images/defi.jpg'
import lending from '../../../images/lending.png'
import staking from "../../../images/Staking and Yield Farming-jpg.jpg"
import dao from "../../../images/DA)-jpg.jpg"
import crypto from "../../../images/DECENTRALIZED CRYPTO EXCHANGE.png"
import Footer from '../../Home/Footer/Footer'
import Header from '../../Home/Header/Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faHandHoldingMedical, faDisplay, faGamepad, faGears, faLayerGroup, faBuildingUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'


function Defi() {
  return (
    <>
      <Header />
      <section className='defi'>
        <img src={defi} className='banner' />
        <div className='container mt-5'>
          <h2 className='text-center'>DEFI (Decentralized Finance)</h2>
          <div className='text-justify description'>The traditional finance systems are increasingly replaced by the emerging decentralized finance applications as they provide users with more authority over their funds. It improves access for everyone to major functions such as borrowing, investment, lending, trading, and risk management. The entire platform is run on smart contracts, no intermediary, and hence makes it more transparent and highly secure. We are backed by 30+ blockchain experts and delivered 20+ blockchain projects across the globe.</div>
          <h5>Benefits of Decentralized Finance (DeFi) Development</h5>
          <ol className='mt-3 mb-5'>
            <li>Smart Contracts - Non-editable smart contracts that specializes in the prompt implementation of functions based on conditions. It enables rapid transactions and zero mistakes</li>
            <li>Pseudonymous Transactions - Decentralized finance applications offer the highest level of privacy. However, personal identity linked to transactions is not displayed.</li>
            <li>Universal Access - Access multiple platforms and channels with your platform</li>
            <li>Interoperability - Anyone can build a DeFi ecosystem by integrating multiple decentralized applications together</li>
            <li>Transparency - Decentralized finance services guarantee adequate trust to its users due to the absence of intermediary</li>
            <li>High Security - Decentralized platforms are renowned for their complex, unhackable security structures.</li>
          </ol>
          <h3>Decentralized Finance (DeFi) Development Services</h3>

          <div className='d-flex justify-content-between row mt-5 service-parent'>
            <div className='services col-md-6'>
              <h4>Lending & Borrowing Platforms</h4>
              <div className='content mt-3'>DeFi lending and borrowing takes place with the use of a smart contract that eliminates the need for a middleman, making it a seamless process. This peer-to-peer platform provides users with the ability to borrow and lend money directly to each other. The decentralized nature of DeFi protocols offers transparency in every process involved and helps us gain ownership over our funds. In simple words, unlike the banking sector, there's no third-party involved. <Link to="/lending-and-borrowing"><span>Read More...</span></Link></div>
            </div>
            <div className='col-md-4 image-parent'>
              <img src={lending} className="lending" />
            </div>
          </div>
          <div className='d-flex justify-content-between row mt-5 service-parent'>
            <div className='col-md-4 image-parent'>
              <img src={staking} className="lending" />
            </div>
            <div className='services right col-md-6'>
              <h4>Staking & Yield Farming Platforms</h4>
              <div className='content mt-4'>Maximizes users crypto returns by availing yield farming app development services to build robust and futuristic DeFi solutions with augmented yield. Users can earn a passive income by storing their crypto in a liquidity pool, which are like centralized finance or the CeFi counterpart of your bank account. Staking is the act of putting up collateral as proof of a party’s stake in the game in the crypto world.  <Link to="/staking"><span>Read More...</span></Link></div>
            </div>
          </div>
          <div className='d-flex justify-content-between row mt-5 service-parent'>
            <div className='services col-md-6'>
              <h4>DAO</h4>
              <div className='content'>Set up a decentralized organizational structure, eliminating the role of a third-party regulatory operation and engaging in a community-oriented administration with our DAO solutions. It is a community-led, transparent, and autonomous entity that operates independently of any central authority. The rules of a DAO are encoded in its smart contracts. These rules determine how the DAO interacts with the outside world and how its internal affairs are managed. <Link to="/dao"><span>Read More...</span></Link></div>
            </div>
            <div className='col-md-4 image-parent'>
              <img src={dao} className="lending" />
            </div>
          </div>
          <div className='d-flex justify-content-between row mt-5 service-parent'>
            <div className='col-md-4 image-parent'>
              <img src={crypto} className="lending" />
            </div>
            <div className='services right col-md-6'>
              <h4>DECENTRALIZED CRYPTO EXCHANGE PLATFORM DEVELOPMENT</h4>
              <div className='content'>Blockchain-based apps that coordinate large-scale trading of crypto assets between many users. They do that entirely through automated algorithms, instead of the conventional approach of acting as financial intermediary between buyers and sellers. DeFi DEXs automatically match buyers and sellers and provide fast and safe transactions for the users. <Link to="/decentralized-crypto-exchange"><span>Read More...</span></Link></div>
            </div>
          </div>
        </div>

        <div className='bg-gray'>
          <div className='container'>
            <div className="major-services">
              <h3>DeFi Development Services For Major Industries</h3>
              <div className='description'>
                As a leading DeFi development company, we have the technology and the resources to provide DeFi platform development services to a wide range of industries.
              </div>
              <div className='row mt-4 justify-content-between'>
                <div className='col-md-2 service-box'>
                  <FontAwesomeIcon icon={faBuildingColumns} />
                  <div>Banking</div>
                </div>
                <div className='col-md-2 service-box'>
                  <FontAwesomeIcon icon={faHandHoldingMedical} />
                  <div>Health Care</div>
                </div>
                <div className='col-md-2 service-box'>
                  <FontAwesomeIcon icon={faHandHoldingMedical} />
                  <div>Supply Chain</div>
                </div>
                <div className='col-md-2 service-box'>
                  <FontAwesomeIcon icon={faDisplay} />
                  <div>E-Commerece</div>
                </div>
                <div className='col-md-2 service-box'>
                  <FontAwesomeIcon icon={faGamepad} />
                  <div>Gaming</div>
                </div>
              </div>
              <div className='row mt-4 mb-5 justify-content-between'>
                <div className='col-md-2 service-box'>
                  <FontAwesomeIcon icon={faGears} />
                  <div>Logistics</div>
                </div>
                <div className='col-md-2 service-box'>
                  <FontAwesomeIcon icon={faBuildingColumns} />
                  <div>Government</div>
                </div>
                <div className='col-md-2 service-box'>
                  <FontAwesomeIcon icon={faLayerGroup} />
                  <div>Education</div>
                </div>
                <div className='col-md-2 service-box'>
                  <FontAwesomeIcon icon={faBuildingUser} />
                  <div>Real State</div>
                </div>
                <div className='col-md-2 service-box'>
                  <FontAwesomeIcon icon={faDisplay} />
                  <div>IT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Defi
