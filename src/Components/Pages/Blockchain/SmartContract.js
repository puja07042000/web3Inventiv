import React from 'react'
import Header from '../../Home/Header/Header'
import Footer from '../../Home/Footer/Footer'
import shaking from '../../../images/shaking.jpg'
import balance from '../../../images/balance.png'
import fintech from '../../../images/fintech.png'
import realEstate from '../../../images/real-estate.png'
import bank from '../../../images/bank-2.png'
import supplyChain from '../../../images/supply-chain.png'
import trade from '../../../images/trade.png'
import cryptoCurrency from '../../../images/currency-exchange.png'
import './smart-contract.scss'

function SmartContract() {
  return (
    <>
      <Header />
      <div className='smart-contract-section'>
        <div className='banner'>
          <img src={shaking} />
        </div>
        <div className='container'>
          <h2 className='text-center'>SMART CONTRACT AUDIT AND DEVELOPMENT</h2>
          <div className='description'>Smart contracts are the backbone of business automation. Being the best blockchain development company, we specialize to offer custom smart contract development services, irrespective of your industry. Smart contracts facilitate complete automation, decentralization and enhance transparency by removing the need for a middleman. Similar to traditional contracts, digital smart contracts also include a set of rules on the parties involved.</div>
          <div class="benifits-box">
            <h4 class="text-center">Benefits of Smart Contracts that Contribute to DeFi Protocols</h4>
            <div class="row justify-content-between mt-5">
              <div class="col-md-2 benifits">
                <h6>High end security</h6>
                <div class="content">Smart contracts use the highest level of data encryption currently available, similar to that used for cryptocurrencies.</div>
              </div>
              <div class="col-md-2 benifits">
                <h6>Transparency</h6>
                <div class="content">Smart Contracts are built on blockchain networks so anyone can access and view the transaction data.</div>
              </div>
              <div class="col-md-2 benifits">
                <h6>Speed</h6>
                <div class="content">Long processes that are the norm of traditional financial transactions are eliminated since Smart Contracts are wholly automated, accelerating performance.</div>
              </div>
              <div class="col-md-2 benifits">
                <h6>Efficiency</h6>
                <div class="content">The high efficiency results in a cost-effective purchase that is processed per unit of time.</div>
              </div>
            </div>
            <div class="row justify-content-between mt-5">
              <div class="col-md-2 benifits">
                <h6>Storage and Backup</h6>
                <div class="content">Wherever personal information is used in a contract, it is retained permanently for future reference. So, in the case of a data loss then these attributes can be easily recovered.</div>
              </div>
              <div class="col-md-2 benifits">
                <h6>Third party free</h6>
                <div class="content">There is no need for a middleman for verification, the blockchain does that for you.</div>
              </div>
              <div class="col-md-2 benifits">
                <h6>Cost efficient</h6>
                <div class="content">In the absence of third parties in DeFi Smart Contracts, the cost that is customarily incurred is avoided.</div>
              </div>
              <div class="col-md-2">
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray mb-5">
          <div class="container">
            <h4 class="text-center">Smart Contract Development Process</h4>
            <p>Decentralized finance protocols are now seeing exponential growth in both user engagement and assets stored in contracts. It has made a huge splash in the finance ecosystem, and the high security, permissionless, and non-custodial nature make these protocols and Dapps a wise business venture.</p>
            <p>You can now develop DeFi smart contacts for your DeFi protocols and Dapps by trusting us with your innovative ideas. We follow a streamlined development process that goes like this </p>
            <div class="col-md-12 mt-5">
              <div class="timeline-center">
                <div class="timeline-row">
                  <div class="tm-icon">
                    <span>1</span>
                  </div>
                  <div class="tm-details">
                    <h4>Analyze</h4>
                    <p>We will begin with research and analyze the market space you wish to enter, keeping up with the latest trends in the crypto space to make your DeFi Smart Contracts.</p>
                  </div>
                </div>
                <div class="timeline-row">
                  <div class="tm-icon">
                    <span>2</span>
                  </div>
                  <div class="tm-details">
                    <h4>Design and develop</h4>
                    <p>Once our team understands your prerequisites for the development of your DeFi Smart Contracts, we will begin building your smart contracts on the Solidity programming platform.</p>
                  </div>
                </div>
                <div class="timeline-row">
                  <div class="tm-icon">
                    <span>3</span>
                  </div>
                  <div class="tm-details">
                    <h4>Testing and Auditing</h4>
                    <p>The DeFi Smart Contracts that we develop will be strenuously tested and audited to clear out all bugs and vulnerabilities.</p>
                  </div>
                </div>
                <div class="timeline-row">
                  <div class="tm-icon">
                    <span>4</span>
                  </div>
                  <div class="tm-details">
                    <h4>Launch </h4>
                    <p>Once cleared of all susceptibilities, your DeFi Smart Contracts will be ready to be deployed to your DeFi protocol or Dapps to give you and the users of your platform a secure and immutable experience of executing financial transactions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <h3>Industries for Smart Contract Development Services</h3>
          <div class="row industry-box">
            <ul class="col-md-6">
              <li class="d-flex align-items-center mt-4">
                <img src={balance} />
                <div class="name">Legal Industry</div>
              </li>
              <li class="d-flex align-items-center mt-4">
                <img src={fintech} />
                <div class="name">Fintech</div>
              </li>
              <li class="d-flex align-items-center mt-4">
                <img src={realEstate} />
                <div class="name">Real Estate</div>
              </li>
              <li class="d-flex align-items-center mt-4">
                <img src={bank} />
                <div class="name">Banking & Securities</div>
              </li>
              <li class="d-flex align-items-center mt-4">
                <img src={supplyChain} />
                <div class="name">Supply Chain Management</div>
              </li>
              <li class="d-flex align-items-center mt-4">
                <img src={trade} />
                <div class="name">Commodity Trading</div>
              </li>
              <li class="d-flex align-items-center mt-4">
                <img src={cryptoCurrency} />
                <div class="name">Cryptocurrency Exchange</div>
              </li>
            </ul>
            <ul class="col-md-6">
              <li class="d-flex align-items-center mt-4">
                <img src={balance} />
                <div class="name">Legal Industry</div>
              </li>
              <li class="d-flex align-items-center mt-4">
                <img src={fintech} />
                <div class="name">Fintech</div>
              </li>
              <li class="d-flex align-items-center mt-4">
                <img src={realEstate} />
                <div class="name">Real Estate</div>
              </li>
              <li class="d-flex align-items-center mt-4">
                <img src={bank} />
                <div class="name">Banking & Securities</div>
              </li>
              <li class="d-flex align-items-center mt-4">
                <img src={supplyChain} />
                <div class="name">Supply Chain Management</div>
              </li>
              <li class="d-flex align-items-center mt-4">
                <img src={trade} />
                <div class="name">Commodity Trading</div>
              </li>
              <li class="d-flex align-items-center mt-4">
                <img src={cryptoCurrency} />
                <div class="name">Cryptocurrency Exchange</div>
              </li>
            </ul>
          </div>
          <h3 class="need-title">Who Needs The Smart Contracts Audit ?</h3>
          <ul class="mt-4">
            <li>Industries with Smart Contract</li>
            <li>Owners and managers of ICO startups</li>
            <li>Product owners of Decentralized Applications</li>
            <li>Anybody who needs trust of stakeholders and investors</li>
          </ul>
          <h3 class="why-title">Why Web3inventiv for Smart Contract Audit and Development?</h3>
          <div class="content mt-4 mb-5">Web3inventiv’s solutions are completely scalable and customizable to support and adapt to your growing business. Our skilled and seasoned team of developers, business analysts, and marketers will ensure your DeFi Smart Contracts will give your DeFi business complete security, transparency, and immutability.</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SmartContract
