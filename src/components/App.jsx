import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import s from '../components/Filter/Filter.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './redux/contactsSlice';
import { deleteContact } from './redux/contactsSlice';
import { changeFilter } from './redux/contactsSlice';

export default function App() {
  const {
    contacts: { items: contacts },
  } = useSelector(state => state);

  const filter = useSelector(state => state.contacts.filter);
  
  const dispatch = useDispatch();
  
  const OnSubmit = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(addContact({ id: nanoid(), name, number }));
    
  };

  const handleRemoveContact = id => dispatch(deleteContact({ id }));

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleFilterChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <>
      <ContactForm onSubmit={OnSubmit} />
      {contacts.length > 0 && (
        <div className={s.container}>
          <h2 className={s.header_contact}>Contacts</h2>
          <Filter onChange={handleFilterChange} />
          <ContactList
            onRemove={handleRemoveContact}
            contacts={getVisibleContacts()}
          />
        </div>
      )}
    </>
  );
}
