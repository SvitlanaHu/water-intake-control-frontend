import css from "./WaterList.module.css";
import WaterItem from "../WaterItem/WaterItem";

const WaterList = () => {
  const water = [
    {
      id: 1,
      water: "250ml",
      time: "7:00 AM",
    },
    {
      id: 2,
      water: "350ml",
      time: "1:00 AM",
    },
    {
      id: 3,
      water: "450ml",
      time: "7:00 AM",
    },
    {
      id: 4,
      water: "250ml",
      time: "8:00 AM",
    },
    {
      id: 5,
      water: "350ml",
      time: "9:00 AM",
    },
    {
      id: 6,
      water: "550ml",
      time: "3:00 AM",
    },
    {
      id: 7,
      water: "150ml",
      time: "2:00 AM",
    },
  ];

  return (
    <ul className={css.waterList}>
      {water.map((data) => (
        <WaterItem key={data.id} data={data} />
      ))}
    </ul>
  );
};
export default WaterList;
