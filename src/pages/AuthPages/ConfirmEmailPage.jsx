import { NavLink } from 'react-router-dom/dist';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import Logo from '../../components/Logo/Logo';
import styles from '../AuthPages/AuthPages.module.css';
import AuthBtn from '../../components/AuthBtn/AuthBtn';

export default function ConfirmEmailPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.logoWrap}>
          <Logo text="AquaTrack" />
        </div>
        <div className={styles.titleWrap}>
          <DocumentTitle>Register success</DocumentTitle>
        </div>
        <div className={styles.textWrap}>
          The email confirmation has been sent to your email address. Please
          verify it.
        </div>
        <div className={styles.btnToSignIn}>
          <NavLink to="/signin">
            <AuthBtn>Sign In</AuthBtn>
          </NavLink>
        </div>
        <div className={styles.wrapWaterSection}>
          <AdvantagesSection />
        </div>
      </div>
    </div>
  );
}
