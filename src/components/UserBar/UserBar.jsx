import css from './UserBar.module.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
import UserBarPopover from '../UserBarPopover/UserBarPopover';

const UserBar = ({ userName, avatar }) => {
  const [isIconRotated, setIsIconRotated] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonWidth, setButtonWidth] = useState(0);

  const handleClick = event => {
    const { currentTarget } = event;
    setAnchorEl(currentTarget);
    setIsIconRotated(!isIconRotated);
    setButtonWidth(currentTarget.getBoundingClientRect().width);
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
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <svg className={`${css.svgDrop} ${isIconRotated ? css.rotated : ''}`}>
          <use
            className={css.iconDrop}
            href="../../../symbol.svg#icon-chevron-down"
          ></use>
        </svg>
      </Button>
      <UserBarPopover
        anchorEl={anchorEl}
        handleClose={handleClose}
        id={id}
        open={open}
        buttonWidth={buttonWidth}
      />
    </div>
  );
};

export default UserBar;
