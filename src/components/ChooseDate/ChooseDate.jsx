import css from "./ChooseDate.module.css";

const ChooseDate = () => {
  const date = "Today";

  return <p className={css.text}>{date}</p>;
};
export default ChooseDate;
