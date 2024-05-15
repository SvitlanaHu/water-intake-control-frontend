// import { useDispatch } from "react-redux";
// import { logIn } from "../../redux/auth/operations";
import styles from "./SignInForm.module.css";
// import toast from "react-hot-toast";
import AuthBtn from "../AuthBtn/AuthBtn";
import { NavLink } from "react-router-dom";
import DefaultForm from "../DefautForm/DefautForm";

export default function SignInForm() {
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // dispatch(
    //   logIn({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // )
    //   .unwrap()
    //   .then(() => {
    //     toast.success("Login success");
    //   })
    //   .catch(() => {
    //     toast.error("Incorrect email or password :c");
    //   });

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <DefaultForm />
      <AuthBtn>Sign In</AuthBtn>
      <NavLink to="/signup">
        <p className={styles.wrapDesc}>
          <span className={styles.linkQuestion}>Don`t have an account?</span>
          <span className={styles.linkRedirect}>Sign Up</span>
        </p>
      </NavLink>
    </form>
  );
}
