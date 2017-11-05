import React from 'react'
import PropTypes from 'prop-types'

/*
   An expression - maps over the contacts in App.js 
   and displays a specific contact to the view
   - Pass map a function (arrow function)
   - The function will be invoked individually with each item in the array
   - Whatever we type in the function, is going to be the specific UI
     for each item in the array
   - Add a key to each li item (gets rid of console error)
*/


function ListContacts (props) {
  return (
    <ol className='contact-list'>
      {props.contacts.map((contact) => (
        <li key={contact.id} className='contact-list-item'>
          <div className='contact-avatar' style={{
            backgroundImage: `url(${contact.avatarURL})`
          }}/>
          <div className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
          <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
            Remove
          </button>
        </li>
      ))}
    </ol>
  )
}

ListContacts.PropTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired

}
export default ListContacts