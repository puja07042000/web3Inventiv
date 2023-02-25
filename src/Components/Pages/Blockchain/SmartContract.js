import React from 'react'
import Header from '../../Home/Header/Header'
import Footer from '../../Home/Footer/Footer'
import smartContract from "../../../images/Smartcontract-jpg.jpg"
import shaking from '../../../images/shaking.jpg'
import balance from '../../../images/balance.png'
import fintech from '../../../images/fintech.png'
import realEstate from '../../../images/real-estate.png'
import bank from '../../../images/bank-2.png'
import supplyChain from '../../../images/supply-chain.png'
import trade from '../../../images/trade.png'
import cryptoCurrency from '../../../images/currency-exchange.png'
import why from "../../../images/why.png"
import './smart-contract.scss'

function SmartContract() {
  return (
    <>
      <Header />
      <div className='smart-contract-section'>
        <div className='banner'>
          <img src={smartContract} />
        </div>
        <div className='container'>
          <h2 className='text-center'>SMART CONTRACT AUDIT AND DEVELOPMENT</h2>
          <div className='description'>Smart contracts are the backbone of business automation. Being the best blockchain development company, we specialize to offer custom smart contract development services, irrespective of your industry. Smart contracts facilitate complete automation, decentralization and enhance transparency by removing the need for a middleman. Similar to traditional contracts, digital smart contracts also include a set of rules on the parties involved.</div>
          <div className="benifits-box">
            <h4 className="text-center">Benefits of Smart Contracts that Contribute to DeFi Protocols</h4>
            <div className="row justify-content-between mt-5">
              <div className="col-md-2 benifits">
                <h6>High end security</h6>
                <div className="content">Smart contracts use the highest level of data encryption currently available, similar to that used for cryptocurrencies.</div>
              </div>
              <div className="col-md-2 benifits">
                <h6>Transparency</h6>
                <div className="content">Smart Contracts are built on blockchain networks so anyone can access and view the transaction data.</div>
              </div>
              <div className="col-md-2 benifits">
                <h6>Speed</h6>
                <div className="content">Long processes that are the norm of traditional financial transactions are eliminated since Smart Contracts are wholly automated, accelerating performance.</div>
              </div>
              <div className="col-md-2 benifits">
                <h6>Efficiency</h6>
                <div className="content">The high efficiency results in a cost-effective purchase that is processed per unit of time.</div>
              </div>
            </div>
            <div className="row justify-content-between mt-5">
              <div className="col-md-2 benifits">
                <h6>Storage and Backup</h6>
                <div className="content">Wherever personal information is used in a contract, it is retained permanently for future reference. So, in the case of a data loss then these attributes can be easily recovered.</div>
              </div>
              <div className="col-md-2 benifits">
                <h6>Third party free</h6>
                <div className="content">There is no need for a middleman for verification, the blockchain does that for you.</div>
              </div>
              <div className="col-md-2 benifits">
                <h6>Cost efficient</h6>
                <div className="content">In the absence of third parties in DeFi Smart Contracts, the cost that is customarily incurred is avoided.</div>
              </div>
              <div className="col-md-2">
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray mb-5">
          <div className="container">
            <h4 className="text-center">Smart Contract Development Process</h4>
            <p>Decentralized finance protocols are now seeing exponential growth in both user engagement and assets stored in contracts. It has made a huge splash in the finance ecosystem, and the high security, permissionless, and non-custodial nature make these protocols and Dapps a wise business venture.</p>
            <p>You can now develop DeFi smart contacts for your DeFi protocols and Dapps by trusting us with your innovative ideas. We follow a streamlined development process that goes like this </p>
            <div className="col-md-12 mt-5">
              <div className="timeline-center">
                <div className="timeline-row">
                  <div className="tm-icon">
                    <span>1</span>
                  </div>
                  <div className="tm-details">
                    <h4>Analyze</h4>
                    <p>We will begin with research and analyze the market space you wish to enter, keeping up with the latest trends in the crypto space to make your DeFi Smart Contracts.</p>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="tm-icon">
                    <span>2</span>
                  </div>
                  <div className="tm-details">
                    <h4>Design and develop</h4>
                    <p>Once our team understands your prerequisites for the development of your DeFi Smart Contracts, we will begin building your smart contracts on the Solidity programming platform.</p>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="tm-icon">
                    <span>3</span>
                  </div>
                  <div className="tm-details">
                    <h4>Testing and Auditing</h4>
                    <p>The DeFi Smart Contracts that we develop will be strenuously tested and audited to clear out all bugs and vulnerabilities.</p>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="tm-icon">
                    <span>4</span>
                  </div>
                  <div className="tm-details">
                    <h4>Launch </h4>
                    <p>Once cleared of all susceptibilities, your DeFi Smart Contracts will be ready to be deployed to your DeFi protocol or Dapps to give you and the users of your platform a secure and immutable experience of executing financial transactions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <h3>Industries for Smart Contract Development Services</h3>
          <div className="row industry-box">
            <ul className="col-md-6">
              <li className="d-flex align-items-center mt-4">
                <img src={balance} />
                <div className="name">Legal Industry</div>
              </li>
              <li className="d-flex align-items-center mt-4">
                <img src={fintech} />
                <div className="name">Fintech</div>
              </li>
              <li className="d-flex align-items-center mt-4">
                <img src={realEstate} />
                <div className="name">Real Estate</div>
              </li>
              <li className="d-flex align-items-center mt-4">
                <img src={bank} />
                <div className="name">Banking & Securities</div>
              </li>
              <li className="d-flex align-items-center mt-4">
                <img src={supplyChain} />
                <div className="name">Supply Chain Management</div>
              </li>
              <li className="d-flex align-items-center mt-4">
                <img src={trade} />
                <div className="name">Commodity Trading</div>
              </li>
              <li className="d-flex align-items-center mt-4">
                <img src={cryptoCurrency} />
                <div className="name">Cryptocurrency Exchange</div>
              </li>
            </ul>
            <ul className="col-md-6">
              <li className="d-flex align-items-center mt-4">
                <img src={balance} />
                <div className="name">Legal Industry</div>
              </li>
              <li className="d-flex align-items-center mt-4">
                <img src={fintech} />
                <div className="name">Fintech</div>
              </li>
              <li className="d-flex align-items-center mt-4">
                <img src={realEstate} />
                <div className="name">Real Estate</div>
              </li>
              <li className="d-flex align-items-center mt-4">
                <img src={bank} />
                <div className="name">Banking & Securities</div>
              </li>
              <li className="d-flex align-items-center mt-4">
                <img src={supplyChain} />
                <div className="name">Supply Chain Management</div>
              </li>
              <li className="d-flex align-items-center mt-4">
                <img src={trade} />
                <div className="name">Commodity Trading</div>
              </li>
              <li className="d-flex align-items-center mt-4">
                <img src={cryptoCurrency} />
                <div className="name">Cryptocurrency Exchange</div>
              </li>
            </ul>
          </div>
          <div className='need-box'>
            <h3 className="need-title">Who Needs The Smart Contracts Audit ?</h3>
            <ul className="mt-4">
              <li>Industries with Smart Contract</li>
              <li>Owners and managers of ICO startups</li>
              <li>Product owners of Decentralized Applications</li>
              <li>Anybody who needs trust of stakeholders and investors</li>
            </ul>
          </div>
          <div className='why-section mb-5'>
            <h3 className="why-title">Why Web3inventiv for Smart Contract Audit and Development?</h3>
            <div className='row mt-5 justify-content-between'>
              <div className='col-md-6'>
                <div className="content mt-4 mb-5">Web3inventiv’s solutions are completely scalable and customizable to support and adapt to your growing business. Our skilled and seasoned team of developers, business analysts, and marketers will ensure your DeFi Smart Contracts will give your DeFi business complete security, transparency, and immutability.</div>
              </div>
              <div className='col-md-4 img-parent'>
                <img src={why} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SmartContract
