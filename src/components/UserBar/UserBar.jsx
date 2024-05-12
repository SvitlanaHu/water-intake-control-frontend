import css from "./UserBar.module.css";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
// import UserBarPopover from "../UserBarPopover/UserBarPopover";

const UserBar = () => {
  const userName = "Nadia";

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={css.userBar}>
      <Button
        type="button"
        className={css.btn}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <a className={css.text}>{userName}</a>
        <svg className={css.svg}>
          <use
            className={css.icon}
            href="../../../public/symbol.svg#icon-Ellipse"
          ></use>
        </svg>

        <svg className={css.svgDrop}>
          <use
            className={css.iconDrop}
            href="../../../public/symbol.svg#icon-drop-down"
          ></use>
        </svg>
      </Button>
      <Popover
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
    </div>
  );
};
export default UserBar;
