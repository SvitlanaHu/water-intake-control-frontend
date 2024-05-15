import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Logo from "../../components/Logo/Logo";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import styles from "../AuthPages/AuthPages.module.css";

export default function SignUpPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.logoWrapSignUp}>
          <Logo text="AquaTrack" />
        </div>
        <div className={styles.titleWrap}>
          <DocumentTitle>Sign Up</DocumentTitle>
        </div>
        <div className={styles.formWrap}>
          <SignUpForm />
        </div>
      </div>
      <div className={styles.wrapWaterSection}>
        <AdvantagesSection />
      </div>
    </div>
  );
}
