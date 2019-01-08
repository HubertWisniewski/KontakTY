import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import ContactAdditionForm from "./ContactAdditionForm/ContactAdditionForm";
import ContactList from "./ContactList/ContactList";

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    firebase
      .database()
      .ref("/contacts")
      .on("value", snapshot => {
        const value = snapshot.val();
        const contacts = Object.entries(value || {}).map(([key, val]) => ({
          id: key,
          ...val
        }));
        this.setState({ contacts });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>
        <ContactAdditionForm />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
