import React from 'react';
import {Link} from 'react-router-dom'

export default () => {
  return (
    <>
      <Link to="/">Home Page</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/contactus">Contact Us</Link>
      
    </>
  )
}
