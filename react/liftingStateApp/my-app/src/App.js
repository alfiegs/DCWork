import React from 'react';
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      clicks: 0
    }
  }

  reset = () => {
    this.setState({
      clicks: 0
    })
  }

  updateClickCount = () => {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }
  
  

  render() {
    return (
      <>
        <H1 clicks={this.state.clicks}/>

        <H2 onReset={this.reset}/>

        <H3 onClickProp={this.updateClickCount}/>
      </>
    );
  }
}


App.propTypes = {
  
};

export default App
