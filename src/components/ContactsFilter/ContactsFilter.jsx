import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'contactsStorage/contactsSlice';

import s from './ContactsFilter.module.css';

 export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const onChange = element => {
    dispatch(changeFilter(element.currentTarget.value));
  };

  return (
   
      <input
        className={s.filter}
        onChange={onChange}
        value={filter}
        placeholder="Find contact by name ←"
      ></input>
   
  );
};


