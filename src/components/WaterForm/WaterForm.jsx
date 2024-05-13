import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    waterAmount: yup
      .number()
      .required("Amount of water is required")
      .min(0, "Minimum is 0ml")
      .max(3000, "Maximum is 3000ml"),
    time: yup.string().required("Time is required"),
  })
  .required();

const WaterForm = ({ operationType }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      waterAmount: 50,
      time: new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  });

  const waterAmount = watch("waterAmount");

  const incrementWaterAmount = () => {
    setValue("waterAmount", Math.min(waterAmount + 50, 3000));
  };
  const decrementWaterAmount = () => {
    setValue("waterAmount", Math.max(waterAmount - 50, 0));
  };

  const onSubmit = (data) => {
    console.log(data);
    // логіка для відправки даних на сервер
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>
        {operationType === "add"
          ? "Add water"
          : "Edit the entered amount of water"}
      </h2>
      <div>
        <label htmlFor="waterAmount">Amount of water:</label>
        <div>
          <button type="button" onClick={decrementWaterAmount}>
            -
          </button>
          <input type="number" {...register("waterAmount")} readOnly />
          <button type="button" onClick={incrementWaterAmount}>
            +
          </button>
        </div>
        <p>{errors.waterAmount?.message}</p>
      </div>
      <div>
        <label htmlFor="time">Recording time:</label>
        <input type="time" {...register("time")} />
        <p>{errors.time?.message}</p>
      </div>
      <div>
        <label htmlFor="water">Enter the value of the water used:</label>
        <input type="number" {...register("waterAmount")} readOnly />
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default WaterForm;
