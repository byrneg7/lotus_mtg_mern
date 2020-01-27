import React, { useState } from 'react';
import AddCardModal from "./AddCardModal";

const AddCardButton = ({card}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => setModalOpen(!modalOpen);

  return (
    <>
      <span onClick={() => toggle()}>Add to collection</span>
      <AddCardModal open={modalOpen} toggle={toggle} card={card}/>
    </>
  )
};

export default AddCardButton;