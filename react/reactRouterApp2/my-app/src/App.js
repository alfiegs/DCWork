import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectValue: '',
      isGoing: false,
    }
    
  }


//one event handler for all form change events
handleChange = (e) => {
  let targetType = e.target.type == 'checkbox' ? e.target.checked : e.target.value
  console.log(targetType)
  let name = e.target.name
  console.log(e.target.name)
  this.setState({
    [name]: targetType,
  }, () => {
    console.log(this.state.isGoing)
  }
  )
}

handleSubmit = (e) => {
  e.preventDefault();
  alert(`form submitted: ${this.state.value}`)
}



  render() {
    return (
      <>
      <br />
      <h1>{this.state.value}</h1>
      <h1>{this.state.selectValue}</h1>
      <h1>{this.state.isGoing ? "true" : "false"}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input name="value" type="text" value={this.state.value} onChange={(e)=>{this.handleChange(e)}}/>
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleChange} />
          <select name="selectValue" onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <button >Submit</button>
        </form>
      </>
    );
  }
}


App.propTypes = {
  
};

export default App
