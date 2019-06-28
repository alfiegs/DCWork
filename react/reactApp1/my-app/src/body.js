import React from 'react';
import Content from './content';

class body extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <img src={this.props.image} />
                {this.props.content}
                <Content />
            </div>
        );
    }
}


body.propTypes = {
    
};

export default body
