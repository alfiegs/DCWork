import React from 'react';
import Header from './Header';
import Footer from './Footer'

export default (props) => {
  return (
    <>
      <Header /> 
      <br />
      {props.children}

      <br />
      <Footer />
    </>
  )
}
