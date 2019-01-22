import React, { Component } from "react";
import firebase from "firebase";
import { Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class ContactList extends Component {
  render() {
    return (
      <div className="App">
        <ul style={{ listStyleType: "none" }}>
          {this.props.contacts.length === 0 ? (
            <p>Siemandero eloelo</p>
          ) : (
            this.props.contacts.map(contact => (
              <li key={contact.id}>
                {contact.name} {contact.number}
                <Button
                  icon
                  onClick={() =>
                    firebase
                      .database()
                      .ref(`/contacts/${contact.id}`)
                      .remove()
                  }
                >
                  <Icon name='trash'/>
                </Button>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}

export default ContactList;
