import React from 'react'
import './Header.css'
import    BM from './images/boga menu.png'

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className="headerLeft">
        <nav>
        <img src="https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png" alt="" />
            <ul>
                <li>DISNEY+</li>
                <li>PARKS & TRAVELS</li>
                <li>MOVIES</li>
                <li>SHOP</li>
                <li>MORE</li>
            </ul>
        </nav>
      </div>

      <div className="headerRight">
        <span>SIGN IN</span>
        <div className="searchCon">
          <input type="text" placeholder='Search' />
          <div className="searchIcon">
            <img src="https://static-mh.content.disney.io/matterhorn/assets/goc/inc-search-input-icon-blue-331475a2cf98.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="menu">
        <img src={BM} alt="" />
      </div>
    </div>
  )
}

export default Header
