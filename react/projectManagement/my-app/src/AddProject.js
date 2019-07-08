import React from 'react';
import uuid from 'uuid'

class AddProject extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleSubmit = (e) => {
    // console.log(this.refs.title.value);
    // console.log(this.refs.category.value);
    //this adds an object to state
    this.props.addProject({
        id: uuid.v4(),  //uuid.v4() creates a unique ID for the new project we are lifting up to state
        title: this.refs.title.value,
        category: this.refs.category.value,
    })
    }


    render() {
        return (
            <>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type='text' ref="title"/>
                    </div>

                    <div>
                        <label>Category</label>
                        <select ref="category">
                            <option value="Front-End">Front-End</option>
                            <option value="Back-End">Back-End</option>
                        </select>
                    </div>
                    <input type="submit" value="Submit"/>

                </form>
            </>
        );
    }
}


AddProject.propTypes = {
    
};

export default AddProject
