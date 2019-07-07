import React from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
      <li>
          <strong>{this.props.project.category}</strong>
          {this.props.project.title}
          <a href="#" onClick={this.props.onDelete}>X</a>
      </li>
    </div>
        );
    }
}


ProjectItem.propTypes = {
    
};

export default ProjectItem
