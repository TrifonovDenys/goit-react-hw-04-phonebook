import React from "react";
import { nanoid } from 'nanoid'
import css from './ContactList.module.css'
import PropTypes from "prop-types";


const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map((el) => {
        const liId = nanoid();
        return (
          <li className={css.item} key={liId} id={liId}>
            <p className={css.text}>
              {el.name}: <span>{el.number}</span>
            </p>
            <button onClick={() => deleteContact(el.id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;


ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
}