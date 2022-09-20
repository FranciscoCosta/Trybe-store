import React, { Component } from 'react'
import { FcSearch } from 'react-icons/fc';
import { FiShoppingCart } from 'react-icons/fi';
import logo from '../../images/logo.png'
import './Header.scss'



export default class Header extends Component {
  render() {
    return (
      <nav className='app__header app__yellowbg '>
        <div className='app__header-logo'>
            <img src={logo} alt="Trybe Store logo" />
        </div>
        <div className='app__header-search'>
            <div>
            <input type='text' ></input>
            <FcSearch size={35}/>
            </div>
        </div>
        <div className='app__header-cart'>
            <FiShoppingCart size={40}/>
        </div>
      </nav>
    )
  }
}
