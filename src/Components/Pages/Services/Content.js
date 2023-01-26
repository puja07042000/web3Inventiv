import React from 'react'
import './Content.scss'
import { faGears, faRobot, faBriefcase, faFileShield, faCloudMeatball, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Content() {
  return (
    <>
      <section className='services-section p-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='section-title'>
                <h2>Our Core Services</h2>
                <h6>TECHNOLOGIES WE WORK WITH</h6>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='services-category-box'>
                <a href='#'>BlockChain</a>
                <a href='#'>Android</a>
                <a href='#'>iOS</a>
                <a href='#'>React JS</a>
                <a href='#'>Node JS</a>
                <a href='#'>React Native</a>
                <a href='#'>Angular JS</a>
                <a href='#'>Vue JS</a>
                <a href='#'>TypeScript</a>
                <a href='#'>Firebase</a>
                <a href='#'>Oracle</a>
                <a href='#'>PHP</a>
                <a href='#'>Java</a>

              </div>
              <div className='services-category-info'>
                <h6>Which are based on years of experience in multiple industries and deep understanding of business needs.</h6>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-services-box-2">
                <div class="services-icon-2">
                  <FontAwesomeIcon icon={faGears} />
                </div>
                <h3>Managed Services</h3>
                <div className='service-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</div>
                <div class="services-btn">
                  <a href="single-services.html" class="services-btn-one">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-services-box-2">
                <div class="services-icon-2">
                  <FontAwesomeIcon icon={faRobot} />
                </div>
                <h3>Cyber Security</h3>
                <div className='service-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</div>
                <div class="services-btn">
                  <a href="single-services.html" class="services-btn-one">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-services-box-2">
                <div class="services-icon-2">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <h3>Business Improvement</h3>
                <div className='service-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</div>
                <div class="services-btn">
                  <a href="single-services.html" class="services-btn-one">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-services-box-2">
                <div class="services-icon-2">
                  <FontAwesomeIcon icon={faFileShield} />
                </div>
                <h3>Professional Services</h3>
                <div className='service-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</div>
                <div class="services-btn">
                  <a href="single-services.html" class="services-btn-one">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-services-box-2">
                <div class="services-icon-2">
                  <FontAwesomeIcon icon={faCloudMeatball} />
                </div>
                <h3>Cloud Services</h3>
                <div className='service-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</div>
                <div class="services-btn">
                  <a href="single-services.html" class="services-btn-one">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-services-box-2">
                <div class="services-icon-2">
                  <FontAwesomeIcon icon={faCalendarDay} />
                </div>
                <h3>Data Backup & Recovery</h3>
                <div className='service-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</div>
                <div class="services-btn">
                  <a href="single-services.html" class="services-btn-one">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content
