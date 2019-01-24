import React, { Component } from "react";
import firebase from "firebase";
import { connect } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { getContactsAsArray } from "../selectors";

class ContactList extends Component {
  render() {
    const { contacts } = this.props
    return (
      <div className="App">
        <ul style={{ listStyleType: "none" }}>
          {contacts.length === 0 ? (
            <p>Siemandero eloelo</p>
          ) : (
            contacts.map(contact => (
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

export default connect(state => ({
  contacts: getContactsAsArray(state)
})) (ContactList);
