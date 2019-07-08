import React from 'react';
import PropTypes from 'prop-types';

class RefExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            firstName: '',
            value: ''
        }
        
    }

    onSubmitHandler = () => {
        window.alert('Form Submitted')
    }

    onChangeHandler = (e) => {
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        }, ()=>{
            // console.log(e.target.value)
        })
    }

    render() {
        return (
            <>
            <form onSubmit={this.onSubmitHandler}>
                {this.state.title} <br />
                {this.state.firstName} <br />
                <label>Title</label>
                <input type="text" name="title" onChange={this.onChangeHandler}></input>
                <br />
                <label>First Name</label>
                <input type="text" name="firstName" onChange={this.onChangeHandler}></input>
                <br />
                <select value={this.state.value} onChange={this.onChangeHandler}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <br />
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <button>Submit</button>
            </form>
            </>
        );
    }
}


RefExample.propTypes = {
    
};

export default RefExample
