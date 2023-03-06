import React from 'react'
import Footer from '../../Home/Footer/Footer'
import Header from '../../Home/Header/Header'
import DaoBanner from '../../../images/daoBanner.jpg'
import decentralized from "../../../images/decentralized.jpg"
import technology from "../../../images/bitcoin (1).png"
import sourceCode from "../../../images/openSource-code.jpg"
import token from "../../../images/currency-exchange.png"
import transprancy from "../../../images/transparency.jpg"
import './dao.scss'


function DAO() {
    return (
        <>
            <Header />
            <div className='section-dao'>
                <div className='banner'>
                    <img src={DaoBanner} />
                </div>
                <div className='container'>
                    <h2>DAO(Decentralized Autonomous Organization)</h2>
                    <div className='description'>
                        A DAO is an organization where controls are spread out across the participants, instead of being built on a top-down hierarchy. The purest form of the DAO is groups that form for a common purpose, like investing in start-ups, managing a Stablecoin, or buying a bunch of NFTs. It is a community-led, transparent, and autonomous entity that operates independently of any central authority.
                    </div>
                    <h4>How does DAO Work?</h4>
                    <div className='description'>The foundation of the DAO is its smart contract. The contract lays out the rules of the organization and group treasury. Once the smart contract is moved to live on the Ethereum platform, then no one can change the rules guidance except by a vote. The rules of a DAO are encoded in its smart contracts. These rules determine how the DAO interacts with the outside world and how its internal affairs are managed.</div>
                </div>
                <div className='bg-gray'>
                    <div className="container">
                        <h4 className='mt-4'>Features of Decentralized Autonomous Organization</h4>
                        <div className="row justify-content-between mt-5">
                            <div className="col-lg-3 col-md-2 col-12 feature-box">
                            <img src={decentralized} />
                                <h6 className="text-center">Decentralized</h6>
                                <div className="content">Anybody can be part of the DAO, as long as it consents to the setup standards to take an interest, in which every part partakes in similar freedoms.</div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-12 feature-box">
                            <img src={token} />
                                <h6 className="text-center">DAO native token</h6>
                                <div className="content">The native tokens of the DAO will have the necessary utilities according to the number of tokens staked on the platform or supplied to the liquidity pool by a user.</div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-12 feature-box">
                            <img src={sourceCode} />
                                <h6 className="text-center">Open Source Code</h6>
                                <div className="content">DAO is an open-source platform, which implies that its code is publicly available, allowing users to collaborate and enhance the platform.</div>
                            </div>
                            <div className="row justify-content-between mt-5">
                                <div className="col-lg-3 col-md-2 col-12 feature-box">
                                <img src={technology} />
                                    <h6 className="text-center">Blockchain Technology</h6>
                                    <div className="content">The DAO platform is hosted on a blockchain, which ensures the security of the platform, manage the responsibilities of community, and NFTs can become part of the DAO platform transactions.</div>
                                </div>
                                <div className="col-lg-3 col-md-2 col-12 feature-box">
                                <img src={transprancy} />
                                    <h6 className="text-center">Transparency</h6>
                                    <div className="content">Every network member has equal access to the data and can view the code, the transaction history, and other data.</div>
                                </div>
                                <div className="col-lg-3"></div>
                            </div>
                        </div>
                        <div className="services">
                            <h4>Services by web3inventiv</h4>
                            <ul>
                                <li><span>Integration of DAO –</span> Our experts can assist you with integrating a DAO protocol into your business platform.</li>
                                <li><span>DAO platform development –</span> We can develop excellent business platforms with built-in DAO protocols. Will fulfill all the needs of a DAO by adapting according to the primary application of the business platform.</li>
                                <li><span>DAO Dapp development –</span> We can create Dapps with DAO functionality that can achieve hardcore decentralization. Such DAO Dapps will be primarily based on community consensus for changes in their business and the platform.</li>
                                <li><span>DAO blockchain development –</span> We can develop blockchains containing DAO protocols. Decentralization on a blockchain network can be achieved through DAOs, where the community plays an important role in defining all facets.</li>
                                <li><span>DAO enabled NFT platform development –</span> We can create DAO-enabled NFT platforms which abide by the definition of decentralization. Such DAOs offer help to the platforms by implementing changes after careful consideration of all factors.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DAO
