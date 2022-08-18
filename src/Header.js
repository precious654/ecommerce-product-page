import React from 'react';
import hamburger from './images/icon-menu.svg';
import cart from './images/icon-cart.svg';
import person from './images/image-avatar.png';

function Header(props) {
  return (
    <header>
      <span className="header-flex">
        <div>
          <img src={hamburger} alt="icon" className="nav-menu" />
          <span className="name">sneakers</span>
          <ul className="nav-links">
            <a href="#"><li>Collection</li></a>
            <a href="#"><li>men</li></a>
            <a href="#"><li>women</li></a>
            <a href="#"><li>about</li></a>
            <a href="#"><li>contact</li></a>
          </ul>
        </div>

        <div>
          <span className="cart">
            <img src={cart} alt="icon" />
            <span>
              {props.inCart && <p className="number">{props.noOfProducts}</p>}
            </span>
          </span>
          <img src={person} alt="image" width="32" className="avatar" />
        </div>
      </span>
    </header>
  )
}

export default Header;
