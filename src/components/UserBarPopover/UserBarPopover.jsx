import css from "./UserBarPopover.module.css";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";

// import UserSettingsModal from "../UserSettingsModal/UserSettingsModal";
// import LogOutModal from "../LogOutModal/LogOutModal";

// eslint-disable-next-line react/prop-types
const UserBarPopover = ({ anchorEl, handleClose, id, open }) => {
  return (
    <Popover
      // eslint-disable-next-line no-undef
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
        borderRadius: "15px",
      }}
    >
      <Typography className={css.typography}>
        <div className={css.settingsCont}>
          <button type="button" className={css.settingBtn}>
            <svg className={css.svg}>
              <use
                className={css.settingsIcon}
                href="../../../public/symbol.svg#icon-settings"
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
                href="../../../public/symbol.svg#icon-log-out"
              ></use>
            </svg>
            <a className={css.popOverText2}>LogOut</a>
          </button>
        </div>
      </Typography>
    </Popover>
  );
};
export default UserBarPopover;
