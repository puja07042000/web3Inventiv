import React from 'react'
import Footer from '../../Home/Footer/Footer'
import Header from '../../Home/Header/Header'
import banner from "../../../images/stable_coin_banner.jpg"
import caseImg from "../../../images/staking banner.jpg"
import why from "../../../images/why.png"
import './stable-coin.scss'

function StableCoin() {
    return (
        <>
            <Header />
            <div className='stable-coin-section'>
                <div className='banner'>
                    <img src={banner} />
                </div>
                <div className='container'>
                    <h2 className='text-center'>Stablecoin Development</h2>
                    <div className='description'>Stablecoins are another class of cryptocurrency that was made to give stability in terms of cost and are supported by a pool asset. Stablecoins are intended to handle the intrinsic unpredictability seen in cryptocurrency costs. The topic of stablecoins entered the fray in late 2017 and early 2018. Described as the “Holy Grail of Cryptocurrency”, a scalable and stable digital currency would push for adoption in daily use. The stablecoin represents three units of monetary value; unit of account, store of value, and medium of exchange. This differentiates stablecoin from the rest, this can have a real-utility value in a way volatile cryptocurrencies cannot.</div>
                </div>
                <div className='feature'>
                    <div className='container'>
                        <h4>Features of Stablecoin</h4>
                        <div className='row justify-content-between'>
                            <div className='col-md-3 feature-box'>
                                <h6>No Volatility</h6>
                                <div className='content'>Stablecoin will transform the financial industry with a currency that is stable and secure for businesses to sustain in the ever-changing monetary values.</div>
                            </div>
                            <div className='col-md-3 feature-box'>
                                <h6>Financial Inclusion</h6>
                                <div className='content'>Financial services are no longer elitist. Blockchain Technology ensures that everyone has equal access to financial institutions.</div>
                            </div>
                            <div className='col-md-3 feature-box'>
                                <h6>Resilient Stablecoin</h6>
                                <div className='content'>The asset-backed cryptocurrency for the 21st century which is designed to maintain a stable value across jurisdictions without a change in value.</div>
                            </div>
                        </div>
                        <div className='row justify-content-between mt-5'>
                            <div className='col-md-3 feature-box'>
                                <h6>Liquidity</h6>
                                <div className='content'>Assets with liquidity will help you to raise funds for your project in a secure and stable form of money. When the price increases additional tokens are minted to maintain the stability.</div>
                            </div>
                            <div className='col-md-3 feature-box'>
                                <h6>Increased Exposure</h6>
                                <div className='content'>The trading happens on margins due to the opening of collateralized debt obligation thereby increasing the exposure to the underlying asset.</div>
                            </div>
                            <div className='col-md-3 feature-box'>
                                <h6>Governance Token</h6>
                                <div className='content'>The responsibility lies with the token holder to make risk-based decisions influencing the health of the ecosystem of the stablecoin.</div>
                            </div>
                        </div>
                        <div className='row justify-content-start mt-5'>
                            <div className='col-md-3 feature-box'>
                                <h6>User-friendly Mining</h6>
                                <div className='content'>Cloud-based mining ensures that miners don't require sophisticated equipment to mine the gold backed or currency backed cryptos.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <h4 className='text-center'>Our Stablecoin Development Services</h4>
                    <div className="col-md-12 mt-5">
                        <div className="timeline-center">
                            <div className="timeline-row">
                                <div className="tm-icon">
                                    <span>1</span>
                                </div>
                                <div className="tm-details">
                                    <h4>Consulting</h4>
                                    <p>Our consultation session helps you better understand the scope of your blockchain project. Our experts will build a roadmap for your project, explaining market statistics, business, technology strategy, development process and delivery.</p>
                                </div>
                            </div>
                            <div className="timeline-row">
                                <div className="tm-icon">
                                    <span>2</span>
                                </div>
                                <div className="tm-details">
                                    <h4>White Paper Writing</h4>
                                    <p>To help you better position your stablecoin offering in the market, we will create a comprehensive white paper conducted by your target audience research.</p>
                                </div>
                            </div>
                            <div className="timeline-row">
                                <div className="tm-icon">
                                    <span>3</span>
                                </div>
                                <div className="tm-details">
                                    <h4>Stablecoin Creation</h4>
                                    <p>We build fiat-backed stablecoins, crypto-currency backed, commodity-backed and supported gemstones. Our team also created stablecoins with multiple securities with a state-divided administration.</p>
                                </div>
                            </div>
                            <div className="timeline-row">
                                <div className="tm-icon">
                                    <span>4</span>
                                </div>
                                <div className="tm-details">
                                    <h4>Interaction with Multiple Ecosystems</h4>
                                    <p>There are a couple of standards like ECR1155 and 721 which help these digital collectors in generating these non-fungible tokens.</p>
                                </div>
                            </div>
                            <div className="timeline-row">
                                <div className="tm-icon">
                                    <span>5</span>
                                </div>
                                <div className="tm-details">
                                    <h4>Fiat-backed Stablecoin</h4>
                                    <p>Peg your cash-reserves such as USD, Euro or Japanese Yen and create a stable currency backed with assets. Each coin or token issue represents 1 USD or 1 Euro or 1 Yen.</p>
                                </div>
                            </div>
                            <div className="timeline-row">
                                <div className="tm-icon">
                                    <span>6</span>
                                </div>
                                <div className="tm-details">
                                    <h4>Commodity-backed Assets</h4>
                                    <p>We help you create stable coins on stable assets such as Diamonds, Gold, Silver and other gemstones. These stable currencies are stable, reliable and subject to audit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='case-stable-coin row justify-content-between'>
                    <div className='col-md-6 img-parent'>
                        <img src={caseImg}/>
                    </div>
                    <div className='col-md-5'>
                        <h4>Use Cases of Stablecoin</h4>
                        <ol>
                            <li>Effective Repetition and P2P Payments</li>
                            <li>Smart Escrow</li>
                            <li>Daily Payments</li>
                            <li>Quick and Affordable Shipping</li>
                            <li>Permissioned Blockchain networks(without additional price fluctuations)</li>
                            <li>Enables dApps</li>
                        </ol>
                    </div>
                    </div>
                    <div className='why-section row justify-content-between'>
                        <div className='col-md-6'>
                            <h4>Why Choose us for your Stable Coin Development?</h4>
                            <div className='content'>Hire us and deploy your stablecoin in the crypto industry. We guaranteed to provide reliable support throughout the entire process. We help all types of industry, from start-ups to large enterprises, in upgrading their business by letting them hire our resources.</div>
                        </div>
                        <div className='col-md-5 img-parent'>
                            <img src={why} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default StableCoin
