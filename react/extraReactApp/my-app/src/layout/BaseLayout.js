import React from 'react';
import Header from './Header';

export default (props) => {
  return (
    <>

        <Header /> <br /><br />
        {/* children of BaseLayout is props.children */}
        {props.children} 

    </>
  )
}
