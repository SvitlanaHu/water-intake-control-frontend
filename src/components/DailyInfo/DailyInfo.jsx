import css from "./DailyInfo.module.css";
import ChooseDate from "../ChooseDate/ChooseDate";
import AddWaterDetailedBtn from "../AddWaterDetailedBtn/AddWaterDetailedBtn";
import WaterList from "../WaterList/WaterList";

const DailyInfo = () => {
  return (
    <div className={css.dailyCont}>
      <div className={css.dateAdd}>
        <ChooseDate />
        <AddWaterDetailedBtn />
      </div>
      <div className={css.scrollDiv}>
        <WaterList />
      </div>
    </div>
  );
};
export default DailyInfo;
