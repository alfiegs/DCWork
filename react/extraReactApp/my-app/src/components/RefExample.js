import React from 'react';
import PropTypes from 'prop-types';

class RefExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            firstName: '',
        }
        
    }


    onSubmitHandler = (e) => {
        e.preventDefault()
        window.alert('Form Submitted')
        this.setState({
            title: this.refs.title.value,
            firstName: this.refs.firstName.value,
        })
    }

    onChangeHandler = (e) => {
        // let name = e.target.name;
        // let v = e.target.type = 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            title: this.state.title.value
        })
    }



    render() {
        return (
            <>
            <form onSubmit={this.onSubmitHandler}>
                {this.state.title} <br />
                {this.state.firstName} <br />
                {this.state.value} <br />
                <label>Title</label>
                <input type="text" name="title" ref='title'></input>
                <br />
                <label>First Name</label>
                <input type="text" name="firstName" ref='firstName' ></input>
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
