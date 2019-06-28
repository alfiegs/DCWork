import React from 'react';

class nav extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                nav

                {/* navItem was passed here from App.js */}
                {this.props.navItem}
            </div>
        );
    }
}


nav.propTypes = {
    
};

export default nav
