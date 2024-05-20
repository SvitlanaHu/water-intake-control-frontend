import css from './UserBarPopover.module.css';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal';
import { useState } from 'react';

// import UserSettingsModal from "../UserSettingsModal/UserSettingsModal";
// import LogOutModal from "../LogOutModal/LogOutModal";

// eslint-disable-next-line react/prop-types
const UserBarPopover = ({ anchorEl, handleClose, id, open }) => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(376));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up(768));

  const getWidth = () => {
    if (isSmallScreen) {
      return 137;
    } else if (isMediumScreen) {
      return 157;
    }
    return 120; // default width
  };

  const handleSettingsClick = () => {
    setIsSettingsModalOpen(true);
  };

  return (
    <>
      <Popover
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
            <button
              type="button"
              onClick={() => {
                handleSettingsClick();
                handleClose();
              }}
              className={css.settingBtn}
            >
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
            <button type="button" className={css.logBtn}>
              <svg className={css.svg}>
                <use
                  className={css.LogIcon}
                  href="../../../symbol.svg#icon-log-out"
                ></use>
              </svg>
              <a className={css.popOverText2}>LogOut</a>
            </button>
          </div>
        </Typography>
      </Popover>

      {isSettingsModalOpen && (
        <UserSettingsModal
          open={isSettingsModalOpen}
          setActive={setIsSettingsModalOpen}
        />
      )}
    </>
  );
};

export default UserBarPopover;
