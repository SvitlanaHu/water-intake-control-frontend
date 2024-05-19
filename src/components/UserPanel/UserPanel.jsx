import css from './UserPanel.module.css';
import UserBar from '../UserBar/UserBar';
import { selectUser } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const UserPanel = () => {
  const user = useSelector(selectUser);
  const userEmail = user.email || 'Guest';
  const userName = userEmail.split('@')[0];
  const avatar = user.avatarURL;

  return (
    <div className={css.panelCont}>
      <div className={css.text}>
        <strong className={css.greet}>
          {' '}
          Hello<span className={css.userName}>, {userName}!</span>
        </strong>
      </div>
      <UserBar userName={userName} avatar={avatar} />
    </div>
  );
};
export default UserPanel;
