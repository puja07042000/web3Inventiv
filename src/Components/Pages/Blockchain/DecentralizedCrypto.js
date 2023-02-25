import React from 'react'
import './decentralized-crypto.scss'
import Footer from '../../Home/Footer/Footer'
import Header from '../../Home/Header/Header'
import DCEBanner from '../../../images/DECENTRALIZED-CRYPTO-EXCHANGE PL .png'
import shaking from "../../../images/shaking.jpg"
import uniSwap from "../../../images/web3swap.jpeg"
import binance from "../../../images/web3Binance.jpg"
import balancer from "../../../images/web3balance.png"
import sushiSwap from "../../../images/web3sushi.png"
import dydx from "../../../images/web3dy.png"
import yeild from "../../../images/meet.jpg"
import why from "../../../images/why.png"

function DecentralizedCrypto() {
    return (
        <>
            <Header />
            <section>
                <div className="banner">
                    <img src={DCEBanner} alt="" />
                </div>
                <div className="container">
                    <h2 className="text-center">DECENTRALIZED CRYPTO EXCHANGE PLATFORM DEVELOPMENT</h2>
                    <div className="description">
                        A decentralized exchange is where the exchange does not rely on any third party for the control/ holding
                        of customer’s funds. DeFi DEXs automatically match buyers and sellers and provide fast and safe
                        transactions for the users. This accessible and straightforward approach to managing funds was well
                        accepted among users and is drawing more crypto enthusiasts to such platforms.
                    </div>
                    <div className="row justify-content-between mt-5 work-box">
                        <div className="col-md-6">
                            <h5>How does a DeFi Exchange Platform work?</h5>
                            <ol>
                                <li>Users can log in to a DEX platform using their wallet address.</li>
                                <li>After logging in, they can submit a buy or sell order on the exchange.</li>
                                <li>Users who are selling on the exchange for another set of tokens or coins first have to
                                    specify the number of units they are willing to exchange, the cost, and the time until which
                                    the asset is available for exchange. </li>
                                <li>All this information is integrated into smart contracts.</li>
                                <li>Interested parties can turn in their bids by signing a buy order.</li>
                                <li>Once the time expires, all the bids are reviewed and executed by both parties.</li>
                                <li>This execution is carried out by Smart Contracts, and the transfer of assets is initiated.
                                </li>
                                <li>Once the user has received the assets they exchanged, they can disconnect from the platform.
                                </li>
                            </ol>
                        </div>
                        <div className="col-md-5">
                            <img src={shaking} alt="" />
                        </div>
                    </div>
                    <div className="row justify-content-between mt-5 benifits-box">
                        <div className="col-md-5">
                            <img src={yeild} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h5>Benefits of Exchanging Cryptocurrencies</h5>
                            <ol>
                                <li>No Fake Volumes, no central authority that would be interested in making trading volumes.
                                </li>
                                <li>Confidential information stays protected in DEXs since centralized ones usually require
                                    personal information for identification and authentication.</li>
                                <li>Decentralized exchanges are an open market, making it possible to trade existing crypto
                                    currencies.</li>
                                <li>New liquidity can be availed of in DeFi exchanges.</li>
                                <li>Since DEXs store data on thousands of servers all over the world, hacks and breaches are
                                    impossible, providing security over sensitive data.</li>
                                <li>As a peer-to-peer service, there is no need for an identity card (KYC), and any local
                                    authorities do not bind you to a manual transaction.</li>
                            </ol>
                        </div>
                        {/* <h3 className="mt-5">Web3inventiv Develop DEX Clone Like</h3>
                        <div className="row justify-content-between mb-5">
                            <div className="col-md-3 clone-box">UniSwap Clone</div>
                            <div className="col-md-3 clone-box">PancakeSwap</div>
                            <div className="col-md-3 clone-box">BakerySwap</div>
                        </div> */}
                    </div>
                </div>
                <div className="bg-gray mt-5">
                    <div className="container">
                        <h5 className="text-center">Mainstream DeFi Exchange Platforms</h5>
                        <div className="description mt-5 mb-5">Have a look at the popular DEXs that are currently functioning in the
                            DeFi space. With our robust developmental services that fit your DEX platform with all the latest
                            features and technical advancements, you can compete with the top DEXs in the market.</div>
                        <div className="row justify-content-between mt-4">
                            <div className="col-md-3 mainstream-box">
                                <div className='uniswap-img-parent'>
                                    <img src={uniSwap} className="uniswap" />
                                </div>
                                <h6 className="text-center">Uniswap</h6>
                                <div className="content">Uniswap is an open-source automated liquidity protocol built on Ethereum
                                    that allows trading and listing of ERC20 tokens. Uniswap has become Ethereum’s most popular
                                    automated market maker (AMM).</div>
                            </div>
                            <div className="col-md-3 mainstream-box">
                                <div className='img-parent'>
                                    <img src={binance} />
                                </div>
                                <h6>Binance DEX</h6>
                                <div className="content">Binance DEX solves the issues encountered by its centralized exchange. It
                                    supports decentralized hardware and secure wallets.</div>
                            </div>
                            <div className="col-md-3 mainstream-box">
                                <div className='img-parent'>
                                    <img src={balancer} />
                                </div>
                                <h6>Balancer</h6>
                                <div className="content">Balancer Exchange allows users to swap ERC20 tokens across all the
                                    liquidity pools of Balancer. Tokens are exchanged without deposits, bids, or asks.</div>
                            </div>
                        </div>
                        <div className="row justify-content-between mt-4">
                            <div className="col-md-3 mainstream-box">
                                <div className='img-parent'>
                                    <img src={sushiSwap} />
                                </div>
                                <h6>Sushi Swap</h6>
                                <div className="content">The SushiSwap exchange allows traders to swap any ERC20 token into any
                                    other ERC20 token through automated liquidity pools.</div>
                            </div>
                            <div className="col-md-3 mainstream-box">
                                <div className='img-parent'>
                                    <img src={dydx} />
                                </div>
                                <h6>dYdX</h6>
                                <div className="content">dYdX is a crypto-trading platform for digital assets, built with
                                    open-source protocols, enabling decentralized margin trading.</div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="open-dex mt-5">
                        <h4 className="text-center">What is Open-DEX?</h4>
                        <div className="open-dex-desc mt-5 mb-5 text-center">Open-Source Decentralized Crypto Exchange (Open DEX) is a solution
                            for developing inexpensive Uniswap-based cloud-as-a-service (SaaS) software at the time of
                            recording.</div>
                    </div>
                    <div className="why-us mb-5">
                        <h4 className="text-center">Why choose web3inventiv for Decentralized Exchange Development?</h4>
                        <div className='row justify-content-between mt-5'>
                            <div className='col-md-6'>
                                <div className="answer mt-5">Having developed and launched several DeFi protocols to clientele all over the world, we consider ourselves the expert in the field. We possess a stark understanding of all things crypto, and with our team of tech-savvy developers and blockchain experts, your DEX platform stands no chance of loss.</div>
                            </div>
                            <div className='col-md-4 img-parent'><img src={why} /></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default DecentralizedCrypto