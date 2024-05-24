import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';

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

UserSettingsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default UserSettingsModal;
