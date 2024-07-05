import LogoIcon from '@/icons/logo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footerContainer} container`}>
      <div className={styles.footerIcon}>
        <LogoIcon />
      </div>

      <div className={styles.contentFooter}>
        <div>
          <h4>sobre nós</h4>
          <p>nossa historia</p>
          <p>contato</p>
          <p>objetivo</p>
        </div>

        <div>
          <h4>redes sociais</h4>
          <p>instagram</p>
          <p>facebook</p>
          <p>whatsapp</p>
        </div>

        <div>
          <h4>parceiros</h4>
          <p>pentesLoi</p>
          <p>Shamploo</p>
          <p>Cizoors</p>
        </div>
      </div>
      <p>barbershop@todos os dieritos reservados</p>
    </footer>
  );
}
