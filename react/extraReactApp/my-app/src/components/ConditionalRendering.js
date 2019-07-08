import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes2 from './PropTypes2'
import PropTypes1 from './PropTypes1'

class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        }
        
    }

    //if user is logged in (isLoggedIn: true), show <PropTypes1>, if not, display "Logged Out"
    //change isLoggedIn to false to see change 
    render() {
        return (
            <>
                {/* {this.state.isLoggedIn ? <PropTypes1 count={0} title="hello" /> : null} */}
                {this.state.isLoggedIn ? <PropTypes2 count={56} title="Logged In" /> : "Logged Out"}
                {/* "logged out" message could also be another component */}
            </>
        );
    }
}




// ConditionalRendering.propTypes = {
    
// };

export default ConditionalRendering
