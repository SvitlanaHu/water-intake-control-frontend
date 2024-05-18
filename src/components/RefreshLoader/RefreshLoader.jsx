import { ThreeDots } from "react-loader-spinner";
import css from "./RefreshLoader.module.css";

export default function RefreshLoader() {
  return (
    <div className={css.loaderContainer}>
      <div className={css.loaderWrapper}>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="yellow"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
}
