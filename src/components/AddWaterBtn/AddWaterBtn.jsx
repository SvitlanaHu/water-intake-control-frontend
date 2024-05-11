import css from "./AddWaterBtn.module.css";
// import WaterModal from "../WaterModal/WaterModal";

const AddWaterBtn = () => {
  return (
    <button className={css.btn} type="button">
      <div className={css.cont}>
        <svg className={css.svg}>
          <use
            width={16}
            height={16}
            className={css.icon}
            href="../../../public/symbol.svg#icon-x"
          ></use>
        </svg>
        <a className={css.btnText}>Add water</a>
      </div>
    </button>
  );
};

export default AddWaterBtn;
