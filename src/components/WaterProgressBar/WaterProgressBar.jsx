import css from "./WaterProgressBar.module.css";
import Slider from "@mui/material/Slider";

const WaterProgressBar = () => {
  return (
    <div className={css.progressCont}>
      <div className={css.textCont}>
        <strong className={css.title}>Today</strong>
        <Slider
          className={css.slider}
          defaultValue={30}
          sx={{
            m: 0,
            p: 0,
            // height: 6,
            color: "#9be1a0",
            "& .MuiSlider-thumb": {
              borderRadius: "16px",
              width: "12px",
              height: "12px",
              color: "white",
              border: "1px solid#9be1a0",
            },

            "& .MuiSlider-rail": {
              color: "#F0EFF4",
              backgroundColor: "#F0EFF4",
            },
          }}
        />
        <div className={css.percentBar}>
          <a>0%</a>
          <a>50%</a>
          <a>100%</a>
        </div>
      </div>
    </div>
  );
};
export default WaterProgressBar;
