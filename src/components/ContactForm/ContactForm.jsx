import  React from 'react';
import s from '../ContactForm/ContactForm.module.css';
import {useState} from 'react';



export default function ContactForm ({onSubmit}){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = event => {
    const{ name, value} = event.currentTarget;
  switch(name) {
    case 'name':
      setName(value);
      break;

    case 'number':
      setNumber(value);
      break;
    
    default: 
      return;
    }
  }
  
 const  resetForm = () => {setName(''); setNumber('')}
  const onHandleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);

    resetForm()
  };



    
        return (

            <form className={s.form} onSubmit={onHandleSubmit}>
            <h1 className={s.header}>📞 Phonebook</h1>
            <div  className={s.container}>
           <label htmlFor="name" className={s.label_name}>
            Name 
            <input 
            type="text"
            name="name"
            id="name"
            className={s.input_name}
            placeholder="Enter name ← "
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
            </label> 
            <label className={s.label_number}>
              Number
              <input
              type="tel"
              name="number"
              id="number"
              className={s.input_number}
              value={number}
              onChange={handleChange}
              placeholder="Enter phone number ← "
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              />
            </label>
            <button className={s.button} type="submit" onClick={() => { }}>Add contact</button>
            </div>
            </form>
        )
        
    }
  
  
  
  
  










