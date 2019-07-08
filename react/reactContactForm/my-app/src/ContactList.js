import React from 'react';
import ContactItem from './ContactItem';


class ContactList extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let contacter = this.props.contacts.map((contactObject)=>{
            return <ContactItem contact={contacter} onDelete={this.props.onDelete} key={contactObject.id} />
        })
        return (
            <>
            {contacter}
            </>
        );
    }
}


ContactList.propTypes = {
    
};

export default ContactList
