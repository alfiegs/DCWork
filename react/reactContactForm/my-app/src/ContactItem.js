import React from 'react';

class ContactItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <>
                <div>
                    <li>
                        <strong>{this.props.contact.name}</strong>
                        {this.props.contact.phone}
                        <a href="#" onClick={()=>{this.props.onDelete(this.props.contact.id)}}>X</a>
                    </li>
                </div>
            </>
        );
    }
}


ContactItem.propTypes = {
    
};

export default ContactItem
