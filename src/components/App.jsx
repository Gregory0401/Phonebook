import { React, useState } from 'react';
import { Layout } from './Layout';
import {Modal} from '../components/Modal/Modal'

export default function App() {
  const [showModal, setShowModal] = useState(false);
 const [qwe, setQwe] = useState(true);

  const onCloseModal = () => {
    setShowModal(true);
  
  };

const onOpen = () => {
setQwe(false);
}

  window.addEventListener('keydown', e => {
    e.code === 'Space' && onCloseModal();
  });

  window.addEventListener('keydown', e => {
    e.code === 'Space' &&  onOpen();
  });

  return(
  <>
  {showModal && <Layout />}
  {qwe && <Modal />}

  </>) 
}
