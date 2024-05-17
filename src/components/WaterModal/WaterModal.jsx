// import styles from './WaterModal.module.css';
import WaterForm from '../WaterForm/WaterForm.jsx';
// import { useState } from 'react';
import { Modal } from '../Modal/Modal.jsx';
import PropTypes from 'prop-types';

const WaterModal = ({
  operationType,
  isModalOpen,
  setIsModalOpen,
  handleOpenModal,
}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const formState = {
    add: {
      title: 'Add Water',
      formComponent: <WaterForm operationType="add" />,
    },
    edit: {
      title: 'Edit Water',
      formComponent: <WaterForm operationType="edit" />,
    },
  };

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleFormSubmit = formData => {
    console.log('Form Data Submitted:', formData);
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={handleOpenModal}>
        {formState[operationType].title}
      </button>
      {isModalOpen && (
        <Modal active={isModalOpen} setActive={setIsModalOpen}>
          {formState[operationType].formComponent}
        </Modal>
      )}
    </>
  );
};
WaterModal.propTypes = {
  operationType: PropTypes.oneOf(['add', 'edit']).isRequired,
};

export default WaterModal;
