import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import css from './App.module.css'
import { useEffect, useState } from 'react';


export const App = () => {

  const [contacts, setContacts] = useState(() => {
    const contactsParsed = localStorage.getItem('contacts');
    return contactsParsed ? JSON.parse(contactsParsed) : [];
  });
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const changeFilter = (e) => {
    setFilter((prevFilter) => prevFilter = e.target.value)
  }

  const getVisibleContacts = (e) => {

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
  }

  const handleAddContact = (name, number) => {
    const contact = {
      name,
      id: nanoid(),
      number,
    };


    const alreadyAdded = contacts.some((el) => el.name === contact.name);
      if (alreadyAdded) {
        alert(`${contact.name} already exists in contacts.`);
        return;
      }

      setContacts((prevState) => [contact, ...prevState]);
    };



    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          padding: '20px',
        }}
      >
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />

        <h2 className={css.title}>Contacts</h2>
        <Filter filterValue={filter} onChange={changeFilter} />
        <ContactList
          contacts={getVisibleContacts()}
          deleteContact={deleteContact}
        />
      </div>
    )
  }