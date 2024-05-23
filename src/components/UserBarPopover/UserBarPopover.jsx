import css from './UserBarPopover.module.css';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import Popover from '@mui/material/Popover';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal';
import LogOutModal from '../LogOutModal/LogOutModal';
import { useState } from 'react';
import { selectIsSettingModalOpen } from '../../redux/SettingModal/Selectors';
import { openSettingModal } from '../../redux/SettingModal/SettingModalSlice';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const UserBarPopover = ({ anchorEl, handleClose, id, open }) => {
  const dispatch = useDispatch();
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const isSettingModalOpen = useSelector(selectIsSettingModalOpen);
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

  const handleLogOutClick = () => {
    setIsLogOutModalOpen(true);
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
          <span className={css.settingsCont}>
            <button
              type="button"
              onClick={() => {
                handleClose();
                dispatch(openSettingModal());
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
          </span>
        </Typography>
        <Typography className={css.typographyLog}>
          <span className={css.settingsCont}>
            <button
              onClick={() => {
                console.log('Logging out...');
                handleLogOutClick();
                handleClose();
              }}
              type="button"
              className={css.logBtn}
            >
              <svg className={css.svg}>
                <use
                  className={css.LogIcon}
                  href="../../../symbol.svg#icon-log-out"
                ></use>
              </svg>
              <a className={css.popOverText2}>LogOut</a>
            </button>
          </span>
        </Typography>
      </Popover>

      {isSettingModalOpen && <UserSettingsModal open={isSettingModalOpen} />}
      {isLogOutModalOpen && (
        <LogOutModal
          isModalOpen={isLogOutModalOpen}
          setIsModalOpen={setIsLogOutModalOpen}
        />
      )}
    </>
  );
};

export default UserBarPopover;
