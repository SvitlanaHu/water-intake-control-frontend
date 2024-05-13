import css from "./UserBar.module.css";

import Button from "@mui/material/Button";

import { useState } from "react";
import UserBarPopover from "../UserBarPopover/UserBarPopover";

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
          <use className={css.icon} href="../../../public/symbol.svg#"></use>
        </svg>

        <svg className={css.svgDrop}>
          <use
            className={css.iconDrop}
            href="../../../public/symbol.svg#icon-chevron-down"
          ></use>
        </svg>
      </Button>
      <UserBarPopover
        anchorEl={anchorEl}
        handleClose={handleClose}
        id={id}
        open={open}
      />
    </div>
  );
};
export default UserBar;
