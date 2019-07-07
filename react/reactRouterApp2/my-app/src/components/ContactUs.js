import React from 'react';
import PropTypes from 'prop-types';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.history = props.history;
    this.state = {
      value: '',
      selectValue: '',
      isGoing: false,
      radio: false,

    }
  }

  //send user to a different page (in this case home)
  // componentWillMount(){
  //   this.history.push('/')
  // }
  //one event handler for all form change events
handleChange = (e) => {
  // let targetType = e.target.type == 'checkbox' ? e.target.checked : e.target.value
  let targetType = "";
  if (e.target.type == 'checkbox'){
    targetType = 'checkbox'
  }
  else if (e.target.type == 'radio'){
    targetType = 'radio'
  }
  else{
    targetType = 'value'
  }
  let name = e.target.name
  this.setState({
    [name]: targetType,
  }, () => {
    console.log(this.state.isGoing)
  }
  )
}

  render() {
    return (
      <>
            <h1>{this.state.value}</h1>
      <h1>{this.state.selectValue}</h1>
      <h1>{this.state.isGoing ? "I Sure Do!" : "Ew No Gross"}</h1>
      <h1>{this.state.radio}</h1>
              <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input name="value" type="text" value={this.state.value} onChange={(e)=>{this.handleChange(e)}} />
          <br />
          <label>Do you like to check boxes??</label>
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleChange}
            
            />
            <br />
          <label>What is your favorite color?</label>
          <select name="selectValue" name="selectValue" onChange={this.handleChange} >
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option selected value="red">Red</option>
            <option value="yellow">Yellow</option>
          </select>
          <br />
          <label>Do you like to do radio boxes??</label>
          <input
            name="isGoing"
            type="radio"
            checked={this.state.isGoing}
            onChange={this.handleChange}
            />
          <label>hello</label>
          <input
            name="isGoing"
            type="radio"
            checked={this.state.isGoing}
            onChange={this.handleChange}
            />
          <br />
          <button >Submit</button>
        </form>
      </>
    );
  }
}


ContactUs.propTypes = {
  
};

export default ContactUs

