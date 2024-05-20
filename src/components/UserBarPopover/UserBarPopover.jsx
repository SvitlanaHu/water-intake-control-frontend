import css from './UserBarPopover.module.css';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';

// eslint-disable-next-line react/prop-types
const UserBarPopover = ({ anchorEl, handleClose, id, open, buttonWidth }) => {
  return (
    <Popover
      className={css.popOver}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      PaperProps={{
        style: {
          width: buttonWidth,
          borderRadius: '15px',
        },
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <div style={{ width: '100%' }}>
        <Typography className={css.typography} style={{ width: '100%' }}>
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
        <Typography className={css.typographyLog} style={{ width: '100%' }}>
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
      </div>
    </Popover>
  );
};

export default UserBarPopover;
