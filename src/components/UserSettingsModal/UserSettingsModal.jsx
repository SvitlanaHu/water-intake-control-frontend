import { Modal } from '../Modal/Modal';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import { useState } from 'react';

const UserSettingsModal = ({ open, setActive }) => {
  return (
    <>
      <Modal
        isSettingModal="_"
        active={open}
        setActive={setActive}
        title="Setting"
      >
        <UserSettingsForm />
      </Modal>
    </>
  );
};
export default UserSettingsModal;
