import css from "./UserPanel.module.css";
import UserBar from "../UserBar/UserBar";

const UserPanel = () => {
  const userName = "Nadia";
  return (
    <div className={css.panelCont}>
      <div className={css.text}>
        <strong className={css.greet}>
          {" "}
          Hello<span className={css.userName}>, {userName}!</span>
        </strong>
      </div>
      <UserBar />
    </div>
  );
};
export default UserPanel;
