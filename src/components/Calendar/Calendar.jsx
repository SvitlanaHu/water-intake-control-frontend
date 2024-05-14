import css from "./Calendar.module.css";
import CalendarItem from "../CalendarItem/CalendarItem";

const Calendar = () => {
  const month = [
    { id: 1, water: "70%" },
    { id: 2, water: "89%" },
    { id: 3, water: "65%" },
    { id: 4, water: "42%" },
    { id: 5, water: "77%" },
    { id: 6, water: "53%" },
    { id: 7, water: "61%" },
    { id: 8, water: "88%" },
    { id: 9, water: "35%" },
    { id: 10, water: "72%" },
    { id: 11, water: "90%" },
    { id: 12, water: "46%" },
    { id: 13, water: "79%" },
    { id: 14, water: "55%" },
    { id: 15, water: "63%" },
    { id: 16, water: "92%" },
    { id: 17, water: "31%" },
    { id: 18, water: "68%" },
    { id: 19, water: "84%" },
    { id: 20, water: "50%" },
    { id: 21, water: "73%" },
    { id: 22, water: "37%" },
    { id: 23, water: "67%" },
    { id: 24, water: "81%" },
    { id: 25, water: "58%" },
    { id: 26, water: "94%" },
    { id: 27, water: "29%" },
    { id: 28, water: "69%" },
    { id: 29, water: "85%" },
    { id: 30, water: "48%" },
    { id: 31, water: "76%" },
  ];
  return (
    <div className={css.calendarBlock}>
      {month.map((data) => (
        <CalendarItem key={data.id} data={data} />
      ))}
    </div>
  );
};
export default Calendar;
