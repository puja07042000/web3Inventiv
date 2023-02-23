import React from 'react'
import Header from './Header/Header'
import './Home.scss'
import Icofont from 'react-icofont';
import { faGears, faRobot, faBriefcase, faFileShield, faCloudMeatball, faCalendarDay, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import teamImg from '../../images/team-1.jpg';
import testimonialImg from '../../images/testimonial-1.jpg'
import blogImg from '../../images/blog-1.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from './Footer/Footer';
import Content from '../Pages/Services/Content';

export default function Home() {
  return (
    <>
      <Header />
      <section className='banner'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='banner-text'>
              <h1>Your Trusted Business Development Partner</h1>
              <div>We are passionate about bringing enterprise-level productivity, scalability, and security to small and medium business.</div>
              <div className='d-flex mt-4 justify-content-center'>
                <button className='btn theme-btn mr-20'>Find Out More</button>
                <button className='btn theme-btn'>IT Solution</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mini-features-area'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
              <div className='single-mini-feature d-flex align-items-center justify-content-center'>
                <div className='mini-feature-icon'>
                  <Icofont icon='code' />
                </div>
                <div className='mini-feature-text'>
                  <h3>Blockchain Consulting</h3>
                  <div>Blockchain is the future of Businesses, We help you grow as you go! We offer you long-term support in decision-making (We can help you which vendor to choose for development) and financial advisory. Also, we are willing to go the extra mile and can represent you while visiting your development partner face to face.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <Content/>
      {/* <section className='team-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='section-title'>
                <h6>Our Leadership</h6>
                <h2>Team Members</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-team-box'>
                <div className='team-image'>
                  <img src={teamImg} />
                </div>
                <div className='team-info'>
                  <h3>Howard Berry</h3>
                  <span>Executive Officer</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-team-box'>
                <div className='team-image'>
                  <img src={teamImg} />
                </div>
                <div className='team-info'>
                  <h3>Howard Berry</h3>
                  <span>Executive Officer</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-team-box'>
                <div className='team-image'>
                  <img src={teamImg} />
                </div>
                <div className='team-info'>
                  <h3>Howard Berry</h3>
                  <span>Executive Officer</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-team-box'>
                <div className='team-image'>
                  <img src={teamImg} />
                </div>
                <div className='team-info'>
                  <h3>Howard Berry</h3>
                  <span>Executive Officer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className='testimonial-area p-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='section-title'>
                <h6>What Our Client Say</h6>
                <h2>Recent Feedback</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <OwlCarousel items={3}
                className="owl-theme d-block"
                loop
                margin={8} >
                <div className='owl-stage-outer'>
                  <div className='owl-stage'>
                    <div className='owl-item'>
                      <div className='single-testimonial'>
                        <div className='testi-content-inner'>
                          <div className='rating-box'>
                            <ul>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                            </ul>
                          </div>
                          <div className='testimonial-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <div className='testimonial-bio'>
                            <div className='avtar'>
                              <img src={testimonialImg} />
                            </div>
                            <div className='bio-info'>
                              <h3 className='name'>Ellis Austin</h3>
                              <span>Founder of Apple</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='owl-item'>
                      <div className='single-testimonial'>
                        <div className='testi-content-inner'>
                          <div className='rating-box'>
                            <ul>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                            </ul>
                          </div>
                          <div className='testimonial-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <div className='testimonial-bio'>
                            <div className='avtar'>
                              <img src={testimonialImg} />
                            </div>
                            <div className='bio-info'>
                              <h3 className='name'>Ellis Austin</h3>
                              <span>Founder of Apple</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='owl-item'>
                      <div className='single-testimonial'>
                        <div className='testi-content-inner'>
                          <div className='rating-box'>
                            <ul>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                            </ul>
                          </div>
                          <div className='testimonial-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <div className='testimonial-bio'>
                            <div className='avtar'>
                              <img src={testimonialImg} />
                            </div>
                            <div className='bio-info'>
                              <h3 className='name'>Ellis Austin</h3>
                              <span>Founder of Apple</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='owl-item'>
                      <div className='single-testimonial'>
                        <div className='testi-content-inner'>
                          <div className='rating-box'>
                            <ul>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                            </ul>
                          </div>
                          <div className='testimonial-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <div className='testimonial-bio'>
                            <div className='avtar'>
                              <img src={testimonialImg} />
                            </div>
                            <div className='bio-info'>
                              <h3 className='name'>Ellis Austin</h3>
                              <span>Founder of Apple</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='owl-item'>
                      <div className='single-testimonial'>
                        <div className='testi-content-inner'>
                          <div className='rating-box'>
                            <ul>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                            </ul>
                          </div>
                          <div className='testimonial-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <div className='testimonial-bio'>
                            <div className='avtar'>
                              <img src={testimonialImg} />
                            </div>
                            <div className='bio-info'>
                              <h3 className='name'>Ellis Austin</h3>
                              <span>Founder of Apple</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='owl-item'>
                      <div className='single-testimonial'>
                        <div className='testi-content-inner'>
                          <div className='rating-box'>
                            <ul>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                            </ul>
                          </div>
                          <div className='testimonial-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <div className='testimonial-bio'>
                            <div className='avtar'>
                              <img src={testimonialImg} />
                            </div>
                            <div className='bio-info'>
                              <h3 className='name'>Ellis Austin</h3>
                              <span>Founder of Apple</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='owl-item'>
                      <div className='single-testimonial'>
                        <div className='testi-content-inner'>
                          <div className='rating-box'>
                            <ul>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                              <li><FontAwesomeIcon icon={faStar} /></li>
                            </ul>
                          </div>
                          <div className='testimonial-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <div className='testimonial-bio'>
                            <div className='avtar'>
                              <img src={testimonialImg} />
                            </div>
                            <div className='bio-info'>
                              <h3 className='name'>Ellis Austin</h3>
                              <span>Founder of Apple</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section className='hire-area p-100'>
        <div className='container'>
          <div className='hire-wrapper'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='hire-content position-relative text-center'>
                  <h2>Discuss An Upcoming IT Project</h2>
                  <h5>For A Free Consultation Call Today +91-8287043028</h5>
                  <button className='btn btn-primary theme-btn mt-5'>Contact Us Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='blog-area pb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='section-title'>
                <h6>Our Latest Blog</h6>
                <h2>News & Updates</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog'>
                <div className='post-img'>
                  <img src={blogImg} className="w-100 h-100"/>
                </div>
                <div className='blog-content'>
                  <div className='blog-date mb-2'>
                    <ul className='blog-list d-flex p-0'>
                      <li><h6>20 January-2022</h6></li>
                      <li><span>|</span></li>
                      <li><a href='#'>Technology</a></li>
                    </ul>
                  </div>
                  <div className='blog-body-title'>
                    <h3><a href='#'>What could 5g change about the way we use Technology?</a></h3>
                  </div>
                  <div className='blog-body-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
                  </div>
                  <div className='read-more-btn mt-2'>
                    <a href='#'>+ Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog'>
                <div className='post-img'>
                  <img src={blogImg} className="w-100 h-100"/>
                </div>
                <div className='blog-content'>
                  <div className='blog-date mb-2'>
                    <ul className='blog-list d-flex p-0'>
                      <li><h6>20 January-2022</h6></li>
                      <li><span>|</span></li>
                      <li><a href='#'>Technology</a></li>
                    </ul>
                  </div>
                  <div className='blog-body-title'>
                    <h3><a href='#'>What could 5g change about the way we use Technology?</a></h3>
                  </div>
                  <div className='blog-body-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
                  </div>
                  <div className='read-more-btn mt-2'>
                    <a href='#'>+ Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog'>
                <div className='post-img'>
                  <img src={blogImg} className="w-100 h-100"/>
                </div>
                <div className='blog-content'>
                  <div className='blog-date mb-2'>
                    <ul className='blog-list d-flex p-0'>
                      <li><h6>20 January-2022</h6></li>
                      <li><span>|</span></li>
                      <li><a href='#'>Technology</a></li>
                    </ul>
                  </div>
                  <div className='blog-body-title'>
                    <h3><a href='#'>What could 5g change about the way we use Technology?</a></h3>
                  </div>
                  <div className='blog-body-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
                  </div>
                  <div className='read-more-btn mt-2'>
                    <a href='#'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='blog-more mt-5 text-center'>
              <button className='btn btn-primary theme-btn mr-20'>Get Free Quote</button>
              <button className='btn btn-primary theme-btn'>View All Blog</button>
            </div>
          </div>
        </div>
      </section> */}
      <Footer/>
    </>

  )
}

