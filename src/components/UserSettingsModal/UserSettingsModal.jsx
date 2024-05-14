import { Modal } from "../Modal/Modal";
import { SaveButton } from "../SaveButton/SaveButton";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm";
import { useState } from "react";

const UserSettingsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <Modal active={isModalOpen} setActive={setIsModalOpen} title="Setting">
        <h3></h3>
        <UserSettingsForm />
      </Modal>
    </>
  );
};
export default UserSettingsModal;
