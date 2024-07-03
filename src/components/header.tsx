import LogoIcon from '@/icons/logo';
import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={`${styles.headerContainer} container`}>
      <section className={`${styles.header}`}>
        <div>
          <LogoIcon />
        </div>

        <nav>
          <ul>
            <li>
              <Link href={`#sobre`}>sobre</Link>{' '}
            </li>
            <li>
              <Link href={`#precos`}>preços</Link>{' '}
            </li>
            <li>
              <Link href={`#contato`}>contato</Link>{' '}
            </li>
            <li>
              <Link href={`#agendamento`}>agendamento</Link>{' '}
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
