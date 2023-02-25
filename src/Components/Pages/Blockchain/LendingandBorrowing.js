import React from 'react'
import Footer from '../../Home/Footer/Footer'
import Header from '../../Home/Header/Header'
import lendingBanner from '../../../images/Lending & Borrowing-jpg.jpg'
import why from "../../../images/why.png"
import './lending.scss'

function LendingandBorrowing() {
  return (
    <>
      <Header />
      <section className='lending'>
        <div className='banner'>
          <img src={lendingBanner} />
        </div>
        <div className='container'>
          <h2>DeFi Lending/Borrowing Platform Development</h2>
          <div className='description'>
            DeFi lending and borrowing takes place with the use of a smart contract that eliminates the need for a middleman, making it a seamless process. This peer-to-peer platform provides users with the ability to borrow and lend money directly to each other.
          </div>
          <h4>Role of DeFi in Lending/Borrowing</h4>
          <div className='description'>The decentralized nature of DeFi protocols offers transparency in every process involved and helps us gain ownership over our funds. In simple words, unlike the banking sector, there's no third-party involved.</div>
        </div>
        <div className='bg-gray'>
          <div className='container'>
            <h4>How does Web3inventiv’s DeFi Lending and Borrowing Platform work?</h4>
            <div className='description'>With years of experience in the industry, we know the intricacies of this fast-moving sector. Our experts will guide you through at every step of the process to ensure that you get the best available platform in the market.</div>
            <div className='row justify-content-between'>
              <div className='col-md-5 technical-box'>
                <h6 className='text-center'>The Lending Process</h6>
                <ul className='mt-4'>
                  <li>Our P2P lending platform enables lenders and borrowers to connect with ease and efficiency. Lenders can give out loans to any individual who requires it and fits the basic requirements of the platform.</li>
                  <li>When the process is initiated, the smart contract verifies and authorizes the borrower to request a loan.</li>
                  <li>Once the prerequisite conditions are met, the smart contract is self deployed to carry out the loan unless the lender and borrower stop the process.</li>
                  <li>The transaction is carried out and an immutable history of the transaction is stored in the blockchain for later access</li>
                </ul>
              </div>
              <div className='col-md-5 technical-box'>
                <h6 className='text-center'>The Borrowing Process</h6>
                <ul className='mt-4'>
                  <li>The loan request is filed by the borrower. The DeFi borrower can take a loan with their crypto asset as collateral for the repayment of the loan.</li>
                  <li>The loan is verified and vetted by the smart contract and only processed after meeting the set requirements.</li>
                  <li>The loan transaction is carried out with the express consent of both lender and borrower.</li>
                  <li>When the amount is repaid by the borrower with the interest rate, the collateral asset is given back to the borrower.</li>
                  <li>The platform also allows for different types of collateral including fiat currencies and other types of assets.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='container mt-5'>
          <h4>Benefits of DeFi Lending / Borrowing Platform</h4>
          <div className='description'>DeFi lending platforms provide a host of benefits to their users. Here are a few of the highlights of Blockchain App Factory’s DeFi Lending and Borrowing Platform.</div>
          <div className='row'>
            <div className='col-md-5'>
              <ul>
                <li>Highly decentralized in nature.</li>
                <li>The need for an intermediary is eliminated.</li>
                <li>Transactions are transparent.</li>
                <li>Highly robust security features.</li>
                <li>Increased loaning period.</li>
                <li>P2P transactions allow for direct transactions.</li>
                <li>Smart contract implementation for automated processes.</li>
                <li>Instant transactions allow loaners to get loans near instantly.</li>
                <li>No physical holdings. Everything is done electronically.</li>
                <li>The platform can be accessed from anywhere, at any time.</li>
                <li>Cutting-edge features that are periodically updated.</li>
                <li>Compatible with an extensive list of fiat and digital currencies.</li>
              </ul>
            </div>
            <div className='col-md-5'></div>
          </div>
          {/* </div> */}
        </div>
        <div className='container choose-us mb-5'>
          <div className='row justify-content-between'>
            <div className='col-md-6'>
              <h4 className='text-start'>Why Choose web3inventiv for Lending and Borrowing Platform?</h4>
              <div className='description'>Our pool of blockchain architects and DeFi developers are guaranteed to deliver quality DeFi development services to launch your DeFi lending/borrowing platform.Our work does not end with the product launch. We provide extensive post-delivery services so that you can focus on your growth.</div>
            </div>
            <div className='col-md-4 img-parent'>
              <img src={why} />
            </div>
          </div>
        </div>
        {/* <div className='bg-gray'> */}
      </section>
      <Footer />
    </>
  )
}

export default LendingandBorrowing
