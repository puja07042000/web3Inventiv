import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import logo from "../../../images/logo.png"


function Footer() {
  return (
    <>
      <section className='footer-area p-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 footer-box-item'>
              <div className='footer-about footer-list'>
                <div className='footer-logo'><img src={logo} /></div>
                <div className='footer-desc'>Web3inventiv is not the earliest to arrive in the market for blockchain and cryptocurrency development but the most advanced and latest. Why is that? - we are a group of experts with over 5 years of blockchain industry experience.</div>
                <ul className='footer-social-icon mt-5 p-0'>
                  <li><a href='#'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                  <li><a href='#'><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href='#'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href='#'><FontAwesomeIcon icon={faYoutube} /></a></li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 footer-box-item'>
              <div className='footer-list'>
                <h5 className='title'>Company</h5>
                <ul className='footer-nav-links p-0'>
                  <li><a>About Us</a></li>
                  <li><a>Latest Project</a></li>
                  <li><a>IT Solutions</a></li>
                  <li><a>Digital Solutions</a></li>
                  <li><a>Team Member</a></li>
                  <li><a>Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 footer-box-item'>
            <div className='footer-list'>
                <h5 className='title'>Services</h5>
                <ul className='footer-nav-links p-0'>
                  <li><a>IT Strategy</a></li>
                  <li><a>Network Services</a></li>
                  <li><a>Software Audits</a></li>
                  <li><a>Business Intelligence</a></li>
                  <li><a>Data Science</a></li>
                  <li><a>Virtual Workstation</a></li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 footer-box-item'>
              <div className='footer-list'>
                <div className='title'>Contact Info</div>
                <div className='footer-contact-info'>
                  <ul className='footer-contact-list p-0'>
                    <li>
                      <span>Address:</span> 2306, Ground Floor, Sector 20-C, Chandigarh
                    </li>
                    <li>
                      <span>Phone:</span> +91-8287043028
                    </li>
                    <li>
                      <span>Email:</span>  info@web3inventiv.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='copyright-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6'>
              <div className='copyright-text'>?? 2021 - All Rights Reserved - Designed by <span className='author'>Web3 Inventiv</span></div>
            </div>
            <div className='col-lg-6 col-md-6 text-center'>
              <div className='terms'>Terms & Conditions | Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
