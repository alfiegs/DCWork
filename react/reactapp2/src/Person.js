//cc tab shortcut to create template
//component files always capitalized (Person.js)

import React from 'react';

class Person extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
            {this.props.fName} {this.props.lName} {this.props.location}
            </div>
        );
    }
}


Person.propTypes = {
    
};

export default Person
