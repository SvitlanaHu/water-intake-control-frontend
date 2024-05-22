import { NavLink } from 'react-router-dom/dist';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import Logo from '../../components/Logo/Logo';
import styles from '../AuthPages/AuthPages.module.css';
import AuthBtn from '../../components/AuthBtn/AuthBtn';

export default function ErrorEmailVerifyPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.logoWrap}>
          <Logo text="AquaTrack" />
        </div>
        <div className={styles.titleWrap}>
          <DocumentTitle>Email Verification Error</DocumentTitle>
        </div>
        <div className={styles.textWrap}>
          The email confirmation link is invalid or has already been used.
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
