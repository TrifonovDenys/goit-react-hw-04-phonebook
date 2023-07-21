
import css from './ContactForm.module.css'
import React, { Component } from "react";
import { nanoid } from "nanoid";
// import PropTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    this.props.onAddContact(name, number);

    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.lable} htmlFor={this.nameInputId}>Name</label>
        <input 
          className={css.input}
          type="text"
          name="name"
          required
          value={this.state.name}
          onChange={this.handleChange}
          id={this.nameInputId}
        />

        <label className={css.lable} htmlFor={this.numberInputId}>Number</label>
        <input
          className={css.input}
          type="tel"
          name="number"
          required
          value={this.state.number}
          onChange={this.handleChange}
          id={this.numberInputId}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

// ContactForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// }