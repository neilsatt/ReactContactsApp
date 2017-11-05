import React, { Component } from 'react';
import ListContacts from './ListContacts'



// Move contacts data into the component so that App will manage the state
// Whenever state changes, React will know about it and update UI
class App extends Component {
    state = {
        contacts: [
          {
            "id": "ryan",
            "name": "Ryan Florence",
            "email": "ryan@reacttraining.com",
            "avatarURL": "http://localhost:5001/ryan.jpg"
          },
          {
            "id": "michael",
            "name": "Michael Jackson",
            "email": "michael@reacttraining.com",
            "avatarURL": "http://localhost:5001/michael.jpg"
          },
          {
            "id": "tyler",
            "name": "Tyler McGinnis",
            "email": "tyler@reacttraining.com",
            "avatarURL": "http://localhost:5001/tyler.jpg"
          }
        ]
    }
  // take in the specific contact that was clicked 
  // then update state and remove contact
  removeContact = (contact) => {
      this.setState((state) => ({
          contacts: state.contacts.filter((c) => c.id !== contact.id)
      }))
  }
  render() {
    return (
      <div>
        <ListContacts 
         onDeleteContact={this.removeContact}
         contacts={this.state.contacts} 
        />
      </div>
    )
  }
}

export default App;