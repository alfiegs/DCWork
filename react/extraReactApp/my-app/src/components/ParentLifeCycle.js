import React from 'react';
import LifeCycle from './LifeCycle';

class ParentLifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 0
        }
        
    }

    handleButtonClick = () => {
        this.setState({
            val: this.state.val + 1
        })
    }

    componentWillUnmount(){
        console.log('unmounted')
    }

    render() {
        return (
            <>
                {this.state.val} <br />
                
                {this.state.val > 7 ? null : <LifeCycle val={this.state.val} />}
                <button onClick={this.handleButtonClick}>Increment</button>
            </>
        );
    }
}


ParentLifeCycle.propTypes = {
    
};

export default ParentLifeCycle
