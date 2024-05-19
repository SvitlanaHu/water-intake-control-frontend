import css from './UserBarPopover.module.css';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import LogOutModal from '../LogOutModal/LogOutModal';

// import UserSettingsModal from "../UserSettingsModal/UserSettingsModal";
// import LogOutModal from "../LogOutModal/LogOutModal";

// eslint-disable-next-line react/prop-types
const UserBarPopover = ({ anchorEl, handleClose, id, open }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(376));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up(768));

  const [isLogOut, setIsLogOut] = useState(false);

  const openLogOutModal = () => {
    setIsLogOut(true);
  };

  const closeLogOutModal = () => {
    setIsLogOut(false);
  };

  const getWidth = () => {
    if (isSmallScreen) {
      return 137;
    } else if (isMediumScreen) {
      return 157;
    }
    return 120; // default width
  };
  return (
    <Popover
      // eslint-disable-next-line no-undef
      className={css.popOver}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      PaperProps={{
        style: {
          width: getWidth(),
          borderRadius: '15px',
        },
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Typography className={css.typography}>
        <div className={css.settingsCont}>
          <button type="button" className={css.settingBtn}>
            <svg className={css.svg}>
              <use
                className={css.settingsIcon}
                href="../../../symbol.svg#icon-settings"
              ></use>
            </svg>
            <a className={css.popOverText1}>Setting</a>
          </button>
        </div>
      </Typography>
      <Typography className={css.typographyLog}>
        <div className={css.settingsCont}>
          <button
            type="button"
            className={css.logBtn}
            onClick={openLogOutModal}
          >
            <svg className={css.svg}>
              <use
                className={css.LogIcon}
                href="../../../symbol.svg#icon-log-out"
              ></use>
            </svg>
            <a className={css.popOverText2}>LogOut</a>
          </button>
        </div>
        <LogOutModal
          isModalOpen={isLogOut}
          setIsModalOpen={setIsLogOut}
          closeModal={closeLogOutModal}
        />
      </Typography>
    </Popover>
  );
};
export default UserBarPopover;
