import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Logo from "../../components/Logo/Logo";
import SignInForm from "../../components/SignInForm/SignInForm";
import styles from "../AuthPages/AuthPages.module.css";

export default function SignInPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.logoWrap}>
          <Logo text="AquaTrack" />
        </div>
        <div className={styles.titleWrap}>
          <DocumentTitle>Sign In</DocumentTitle>
        </div>
        <div className={styles.formWrap}>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
