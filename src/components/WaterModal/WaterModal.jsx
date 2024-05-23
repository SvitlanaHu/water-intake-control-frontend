import PropTypes from 'prop-types';
// import styles from './WaterModal.module.css';
import WaterForm from '../WaterForm/WaterForm.jsx';
import { Modal } from '../Modal/Modal.jsx';

const WaterModal = ({
  operationType,
  isModalOpen,
  setIsModalOpen,
  id,
  waterData,
}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const formState = {
    add: {
      title: 'Add Water',
      formComponent: (
        <WaterForm
          operationType="add"
          closeModal={() => setIsModalOpen(false)}
        />
      ),
    },
    edit: {
      title: 'Edit Water',
      formComponent: (
        <WaterForm
          operationType="edit"
          closeModal={() => setIsModalOpen(false)}
          id={id}
          waterData={waterData}
        />
      ),
    },
  };

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleFormSubmit = formData => {
  //   console.log('Form Data Submitted:', formData);
  //   setIsModalOpen(false);
  // };

  return (
    <>
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
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func,
  id: PropTypes.string,
  waterData: PropTypes.object,
};

export default WaterModal;
