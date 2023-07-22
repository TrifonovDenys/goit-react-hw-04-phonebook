import css from './ContactForm.module.css'
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  let nameInputId = nanoid();
  let numberInputId = nanoid();

  const handleChangeName = ({target}) => {
    setName((prevName) => prevName = target.value)
  };

  const handleChangeNumber = ({ target }) => {
    setNumber((prevNumber) => prevNumber = target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddContact(name, number);

    setName((prevName) => prevName = "")
    setNumber((prevNumber) => prevNumber = "")

  };


  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.lable} htmlFor={nameInputId}>Name</label>
      <input 
        className={css.input}
        type="text"
        name="name"
        required
        value={name}
        onChange={handleChangeName}
        id={nameInputId}
      />

      <label className={css.lable} htmlFor={numberInputId}>Number</label>
      <input
        className={css.input}
        type="tel"
        name="number"
        required
        value={number}
        onChange={handleChangeNumber}
        id={numberInputId}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}