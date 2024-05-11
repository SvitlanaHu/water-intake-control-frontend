import css from "./WaterMainInfo.module.css";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import Logo from "../Logo/Logo";

const WaterMainInfo = () => {
  return (
    <div className={css.WaterMaininfoContainer}>
      <Logo text="AQUATRACK" />
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src="../../../public/images/bottle-mobile@1x.png"
          alt="1"
        />
      </div>
    </div>
  );
};
export default WaterMainInfo;
