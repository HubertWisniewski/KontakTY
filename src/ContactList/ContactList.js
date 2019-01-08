import React, { Component } from "react";
import firebase from "firebase";
class ContactList extends Component {
  render() {
    return (
      <div className="App">
        <ul style={{ listStyleType: "none" }}>
          {this.props.contacts.length === 0 ? (
            <p>There are no contacts</p>
          ) : (
            this.props.contacts.map(contact => (
              <li key={contact.id}>
                {contact.name} {contact.number}
                <button
                  onClick={() =>
                    firebase
                      .database()
                      .ref(`/contacts/${contact.id}`)
                      .remove()
                  }
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}

export default ContactList;
