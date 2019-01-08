import React, { Component } from "react";
import firebase from "firebase";

class ContactAdditionForm extends Component {
  state = {
    ContactName: "",
    ContactNumber: "",
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.ContactName === "") {
      this.setState({
        error: new Error("You need to come up with a name!")
      });
      return;
    }
    if (this.state.ContactNumber === "") {
      this.setState({
        error: new Error("You need to provide a number!")
      });
      return;
    }
    if (isNaN(this.state.ContactNumber)) {
      this.setState({
        error: new Error("You need to provide a number!")
      });
      return;
    }
    firebase
      .database()
      .ref("/contacts")
      .push({
        name: this.state.ContactName,
        number: this.state.ContactNumber
      })
      .catch(error => this.setState({ error }));
    this.setState({
      ContactName: "",
      ContactNumber: "",
      error: null
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          {this.state.error && <p>{this.state.error.message}</p>}
          <input
            type="text"
            value={this.state.ContactName}
            onChange={this.handleChange}
            placeholder="Name"
            name="ContactName"
          />
          <input
            type="text"
            value={this.state.ContactNumber}
            onChange={this.handleChange}
            placeholder="Number"
            name="ContactNumber"
          />
          <button type="submit">Done</button>
        </form>
      </div>
    );
  }
}

export default ContactAdditionForm;
