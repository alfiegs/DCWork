import React from 'react';

class myState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: 'this is a text value',
            name: "Alfie",
        }
        
    }

    //state is the only way to refresh your page
    //this.state cannot be changed
    //this.state has a memory of all the changes you want to make
    //in order to modify a state, you have to create a new state via this.setState
    handleClick(e){
        let d = new Date();
        this.setState({
            txt: d.toTimeString()
        })
        console.log(e);
    }

    render() {
        return (
            <div>
                {this.state.txt}
                <button onClick={()=>this.handleClick()}>Submit</button>
            </div>

        );
    }
}


myState.propTypes = {
    
};

export default myState
