import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <>
      <section className='footer-area p-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 footer-box-item'>
              <div className='footer-about footer-list'>
                <div className='footer-logo'>LOGO</div>
                <div className='footer-about '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur</div>
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
                      <span>Address:</span> 56 C-BLOCK Noida, Uttar-Pradesh
                    </li>
                    <li>
                      <span>Phone:</span> +645-877779990
                    </li>
                    <li>
                      <span>Email:</span> info@example.com
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
              <div className='copyright-text'>© 2021 - All Rights Reserved - Designed by <span className='author'>Web3 Inventive</span></div>
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
