import css from './ChooseDate.module.css';

const ChooseDate = () => {
  //   const date = 'Today';
  const today = new Date();
  //   const month = today.getMonth();
  //   const year = today.getFullYear();
  const date = today.getDay();

  return <p className={css.text}>{date}</p>;
};
export default ChooseDate;
