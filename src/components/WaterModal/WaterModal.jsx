// import styles from "./WaterModal.module.css";
import WaterForm from "../WaterForm/WaterForm.jsx";
import { useState } from "react";
import { Modal } from "../Modal/Modal.jsx";
import PropTypes from "prop-types";

const WaterModal = ({ operationType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleFormSubmit = (formData) => {
    console.log("Form Data Submitted:", formData);
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={toggleModal}>
        {operationType === "add" ? "Add Water" : "Edit Water"}
      </button>
      {isModalOpen && (
        <Modal active={isModalOpen} setActive={setIsModalOpen}>
          <h2>{operationType === "add" ? "Add Water" : "Edit Water"}</h2>
          <WaterForm onSubmit={handleFormSubmit} />
        </Modal>
      )}
    </>
  );
};
WaterModal.propTypes = {
  operationType: PropTypes.oneOf(["add", "edit"]).isRequired,
};

export default WaterModal;
