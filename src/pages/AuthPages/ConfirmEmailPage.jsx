import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import Logo from '../../components/Logo/Logo';
import styles from '../AuthPages/AuthPages.module.css';

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
          Вам прийшов лист на електронну адресу, підтвердіть будь ласка свій
          емейл
        </div>
      </div>
    </div>
  );
}
