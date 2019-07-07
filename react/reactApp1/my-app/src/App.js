import React from 'react';
import Test from './testComponent';
import './style.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      counter2: 0
    }
    
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //One way to create event listener on element
  //This is ES5 code (in case it's seen in legacy code)
  handleButtonClick(e){
    e.preventDefault();
    console.log('Button Clicked');
    this.setState({
      counter: this.state.counter + 1,
      counter2: this.state.counter2 - 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={(e)=>{this.handleButtonClick(e)}}>{this.state.counter}</button>
        <button onClick={(e)=>{this.handleButtonClick(e)}}>{this.state.counter2}</button>
        <button>{this.state.counter}</button>
      </div>
    );
  }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//OR you can put onClick={this stuff} inside the App constructor
// this.handleButtonClick = this.handleButtonClick.bind(this)
//then call this.handleButtonClick inline (in the button in onClick={here})

//OR
//if you need to pass information like an event, you don't want the function called before click, so put it in callback function

/* <button onClick={(e)=>{this.handleButtonClick(e)}}>Click Me</button> */


App.propTypes = {
  
};

export default App
