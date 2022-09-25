import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'contactsStorage/contactsAPI';
import { ContactsListItem } from './ContactsListItem';
import { ContactsFilter } from '../ContactsFilter/ContactsFilter';

import s from './ContactsList.module.css';

export const ContactsList = () => {
  const { data: contacts, isSuccess } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  const getContacts = () => {
    if (filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const items = getContacts();

  return (

<div className={s.container}>
  <h2 className={s.header_contact}>☏ Contacts</h2>
  <ContactsFilter />
<ul className={s.list}>
{isSuccess &&
items.map(({ id, name, phone }) => (
  <ContactsListItem key={id} id={id} name={name} number={phone} />
))}

{items && items.length === 0 && (
<p className={s.no_contacts}> No contacts </p>
)} 
</ul>
</div>
    
  );
};

