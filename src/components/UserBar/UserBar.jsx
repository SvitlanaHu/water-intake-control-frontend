import css from './UserBar.module.css';

import Button from '@mui/material/Button';

import { useState } from 'react';
import UserBarPopover from '../UserBarPopover/UserBarPopover';

const UserBar = () => {
  const userName = 'Nadia';

  const [isIconRotated, setIsIconRotated] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setIsIconRotated(!isIconRotated);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsIconRotated(!isIconRotated);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={css.userBar}>
      <Button
        type="button"
        className={css.btn}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <p className={css.text}>{userName}</p>
        <svg className={css.svg}>
          <use className={css.icon} href="../../../public/symbol.svg#"></use>
        </svg>

        <svg className={`${css.svgDrop} ${isIconRotated ? css.rotated : ''}`}>
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
