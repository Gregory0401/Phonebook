import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import s from '../components/Filter/Filter.module.css'
import { nanoid } from 'nanoid'
import {useState, useEffect} from 'react';

 export default function App() {
    const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
    const [filter, setFilter] = useState('');
   
    useEffect(() => {
      const ourContacts = localStorage.getItem('contacts');
      if(ourContacts) {
        setContacts(JSON.parse(ourContacts))
      };
     
    }, []);
      
    useEffect(() => {    
        localStorage.setItem('contacts', JSON.stringify(contacts))        
    }, [contacts]);


    const onSubmit = (name, number) => {
      if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        return alert(`${name} is already in contacts.`);
    }
    setContacts(prevState => [...prevState, {id: nanoid(), name, number}])
  // setContacts(prevState => prevState.slice(0).concat({id: nanoid(), name, number}))
};
 

const handleRemoveContact = id => 
setContacts(prevState => prevState.filter(contact => contact.id !== id))



const handleFilterChange = e => {
  setFilter(e.currentTarget.value);
};

// const getVisibleContacts = (contacts, filter) => {
//   return contacts.filter(({name}) =>
//     name.toLowerCase().includes(filter.toLowerCase()))
// }

const getVisibleContacts = () => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()))
}



// const visibleContacts = getVisibleContacts();

      return(
        <>
        
        <ContactForm 
        onSubmit={onSubmit}
        />
        <div className={s.container}>
       
        <h2 className={s.header_contact}>Contacts</h2>
        <Filter  onChange={handleFilterChange}/>
        <ContactList onRemove={handleRemoveContact}  contacts={getVisibleContacts()}/>
        </div>          
        </>
      )
      }




