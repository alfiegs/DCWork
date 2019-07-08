import React from 'react';
import uuid from 'uuid';
import  ContactList from './ContactList';
import AddContact from './AddContact'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }

  componentWillMount(){
    this.setState({
      contacts: [
        {
          id: uuid.v4(),
          name: "Mike",
          email: "mike@gmail.com",
          phone: "713-555-5555",
          address: "555 Main",
          city: "Houston",
          state: "TX",
          zip: "77025"
        },
        {
          id: uuid.v4(),
          name: "Joe",
          email: "joe@gmail.com",
          phone: "713-666-6666",
          address: "666 Main",
          city: "Houston",
          state: "TX",
          zip: "77025"
        },
        {
          id: uuid.v4(),
          name: "Mary",
          email: "mary@gmail.com",
          phone: "713-777-7777",
          address: "777 Main",
          city: "Houston",
          state: "TX",
          zip: "77025"
        }
      ]
    })
  }

  handleAddContact = (newContact) => {
    let oldContacts = this.state.contacts;
    oldContacts.push(newContact)

    this.setState({
      contacts: oldContacts
    })
  }

  handleDeleteContact = (id) => {
    let oldContacts = this.state.contacts;
    let index = oldContacts.findIndex(contactObject => contactObject.id === id)
    oldContacts.splice(index, 1)
    this.setState({
      contacts: oldContacts
    })
  }

  render() {
    return (
      <>
      <ContactList contacts={this.state.contacts} onDelete={(id)=>{this.handleDeleteContact(id)}}/>
      <AddContact addContact={(contact)=>{this.handleAddContact(contact)}}/>
      </>
    );
  }
}


App.propTypes = {
  
};

export default App
