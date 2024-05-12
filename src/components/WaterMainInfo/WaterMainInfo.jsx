import css from "./WaterMainInfo.module.css";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import Logo from "../Logo/Logo";

const WaterMainInfo = () => {
  return (
    <div className={css.container}>
      <div className={css.WaterMaininfoContainer}>
        <Logo text="AQUATRACK" />
        <WaterDailyNorma />
        <WaterProgressBar />
        <AddWaterBtn />
        <div className={css.imgWrapper}>
          <img
            className={css.img}
            src="../../../public/images/bottle-mobile@1x.png"
            srcSet="../../../public/images/bottle-desktop@2x.png"
            alt="Water bottle image"
          />
        </div>
      </div>
    </div>
  );
};
export default WaterMainInfo;
