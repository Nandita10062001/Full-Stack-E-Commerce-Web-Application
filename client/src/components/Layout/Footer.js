import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-dark text-light p-4 m-0 footer'>
        <h4 className='text-center'>All Rights Reserved &copy; Nandita Nandakumar</h4>
        <p className='text-center mt-3'>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/policy'>Privacy Policy</Link>

        </p>
    </div>
  )
}

export default Footer;