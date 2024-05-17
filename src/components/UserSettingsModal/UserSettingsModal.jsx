import { Modal } from '../Modal/Modal';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import { useState } from 'react';

const UserSettingsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <Modal
        isSettingModal="_"
        active={isModalOpen}
        setActive={setIsModalOpen}
        title="Setting"
      >
        <UserSettingsForm />
      </Modal>
    </>
  );
};
export default UserSettingsModal;
