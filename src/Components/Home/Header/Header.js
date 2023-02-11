import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../../images/logo.png'
import './Header.scss'


function Header() {
  const [active, setActive] = useState(false);
  const myFunction = () => {
    setActive(!active);
  }
  return (
    <>
      <div className='navbar-area'>
        <div className='inspire-nav'>
          <div className='container'>
            <div className='inspire-fixed-nav'>
              <div className='navbar navbar-expand-md navbar-light p-0'>
                <NavLink to='/' className='navbar-brand'>
                  <img src={logo} className="logo" />
                </NavLink>
                <div className='collapse navbar-collapse mean-menu'>
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <NavLink to="/services">Services</NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink to="/about-us">About Us</NavLink>
                    </li>
                    <li className='nav-item dropdown'>
                      <div className='dropdown-btn' onClick={myFunction}>Blockchain</div>
                      <div className={`dropdown-content ${active ? "active" : ""}`}>
                        <div className='row p-5'>
                          <div className='col-md-4 mega-menu'>
                            <div className='header text-center'>Decentralized Platform</div>
                            <div className='content mt-2'>
                              <ul>
                                <li>
                                  <Link to="/defi-blockchain">DeFi</Link>
                                </li>
                                <li><Link to="/dao">DAO</Link></li>
                                <li>
                                  <Link to="/staking">Staking and Yield Farming</Link>
                                </li>
                                <li><Link to="/ido">Initial Dex Offering(IDO)</Link></li>
                                <li><Link to="/decentralized-crypto-exchange">Decentralized Crypto Exchange</Link></li>
                                <li><Link to="/smart-contract">Smart Contract</Link></li>
                                <li><Link to="/lending-and-borrowing">Defi Borrowing and Lending</Link></li>
                                <li>DApp</li>
                              </ul>
                            </div>
                          </div>
                          <div className='col-md-4 mega-menu'>
                            <div className='header text-center'>Cryptocurrency</div>
                            <div className='content mt-2'>
                              <ul>
                                <li>CryptoCurrency Token</li>
                                <li>Initial Coin Offering</li>
                                <li>Stable Coin</li>
                                <li>Token</li>
                                <li>Tron Token</li>
                                <li>BOTS</li>
                              </ul>
                            </div>
                          </div>
                          <div className='col-md-4 mega-menu'>
                            <div className='header text-center'>NFT(Non-fungible token)</div>
                            <div className='content mt-2'>
                              <ul>
                                <li>NFT Minting</li>
                                <li>NFT Marketplace</li>
                                <li>NFT Launchpad</li>
                                <li>NFT Staking Platform</li>
                                <li>Solana NFT Marketplace</li>
                                <li>Fractional NFT Marketplace</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='nav-item'>
                      <NavLink to="portfolio">Portfolio</NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink to="contact">Contact</NavLink>
                    </li>
                  </ul>
                  <div className='other-option'>
                    <a className='btn theme-btn btn-primary' href="#">Get IT Support</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )



}

export default Header
