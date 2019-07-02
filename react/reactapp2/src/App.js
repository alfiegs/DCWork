//cc tab shortcut creates template

import React from 'react';
import Person from './Person'; //import from file Person.js
import Products from './Products'; //import from file Products.js
import Calculator from './Calculator';
import Button from './Button'
import './styles.css';
import {Container, Row, Col} from 'react-bootstrap' //importing only elements we need, aka destructuring
import BookService from './bookService';
import BookComponent from './BookComponent';

const style = {
  textStyle: {
    color: 'purple'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    books: BookService.getAllBooks()
    }
    
  }

  render() {
    // return (
    //   <div>
    //     {/* instantiating object from Person.js */}
    //     <Person fname='Alfie' lName="Santos" location="Houston" />
    //     <Person fname='Joe' lName="Blough" location="London" />
    //   </div>
    // );

    // return React.createElement('div', null, '<h1>Digital Crafts</h1>')

    //

    // return React.createElement('div', null, React.createElement('h1', null, 'Digital Crafts'))

    // let products = ['milk', 'cheese', 'eggs', 'bread']
    // let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',]
    // return(
    //   // //style import
    //   // <div className="text">
    //   // //inline style
    //   // <div style={{color:'green'}}>
    //   // // other way to do style
    //   // <div style={style.textStyle}>
    //   <div className="button">
    //     Hello World
    //     <Products products={products} />
    //     <Calculator numbers={numbers} />
    //     <Button name="Alfie"/>
    //   </div>
    // )
    let products = ['milk', 'cheese', 'eggs', 'bread']
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',]
    return(
      // <Container fluid={true}>
      //   <Row className="bg-warning">
      //     <Col><Button name="Digital Crafts"/></Col>
      //     <Col>second column</Col>
      //     <Col>third column</Col>
      //   </Row>


      //   <div className="button">
      //     Hello World
      //   <Products products={products} />
      //     <Calculator numbers={numbers} />
      //     <Button name="Alfie" />
      //   </div>
      // </Container>
      <body id="body">
      <BookComponent books={this.state.books}/>
      </body>

    )
  }
}


App.propTypes = {
  
};

export default App
