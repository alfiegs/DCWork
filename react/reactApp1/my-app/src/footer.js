import React from 'react';

class footer extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                {this.props.icons}
                {this.props.item}
            </div>
            
        );
    }
}


footer.propTypes = {
    
};

export default footer
