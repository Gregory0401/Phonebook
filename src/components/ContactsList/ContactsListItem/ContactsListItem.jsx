import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'contactsStorage/contactsAPI';

import s from './ContactsListItem.module.css';

export const ContactsListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li id={id} className={s.contact}>
      <p className={s.name}>{name} : {number}</p>
      <button
        className={s.button}
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        ❌
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
