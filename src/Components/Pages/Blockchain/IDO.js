import React from 'react'
import Footer from '../../Home/Footer/Footer'
import Header from '../../Home/Header/Header'
import lendingBanner from '../../../images/bitcoin-g802f4850f_1920.jpg'
import './ido.scss'

function IDO() {
    return (
        <>
            <Header />
            <div className='section-ido mb-5'>
                <div className='banner'>
                    <img src={lendingBanner} />
                </div>
                <div className='container'>
                    <h2>INITIAL DEX OFFERING (IDO) DEVLOPMENT</h2>
                    <div className='description'>IDO development is creating tokens for crowdfunding that allow startups to raise funds in the most credible way. It gains the attention of promising investors in the space as the method has become reliable due to its usage of decentralized crypto exchanges. IDOs can be created for anything from cryptocurrency to a music album, to aether-powered warships. Developing IDO tokens can benefit both projects and investors due to their credible nature.</div>
                </div>
                <div className='bg-gray'>
                    <div className='container'>
                        <h4 className='text-center'>Benefits of (IDO) Initial DEX Offering</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default IDO
