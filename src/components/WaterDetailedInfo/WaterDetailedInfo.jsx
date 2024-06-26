import styles from "./WaterDetailedInfo.module.css";
import UserPanel from "../UserPanel/UserPanel";
import DailyInfo from "../DailyInfo/DailyInfo";
import MonthInfo from "../MonthInfo/MonthInfo";

const WaterDetailedInfo = () => {
  return (
    <div className={styles.container}>
      <UserPanel />
      <DailyInfo />
      <MonthInfo />
    </div>
  );
};
export default WaterDetailedInfo;
