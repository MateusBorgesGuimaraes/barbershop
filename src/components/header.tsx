'use client';

import LogoIcon from '@/icons/logo';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Header() {
  const [active, setActive] = React.useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <header className={`${styles.headerContainer} container`}>
      <section className={`${styles.header}`}>
        <div className={styles.iconHeader}>
          <LogoIcon />
        </div>

        <button onClick={handleActive} className={styles.buttonMenu}>
          <Image
            src={'/assets/icons/mobilemenu-40-40.svg'}
            alt="mobile menu"
            width={40}
            height={40}
          />
        </button>

        <nav className={`${styles.navegacao} ${active ? styles.active : ''}`}>
          <ul>
            <li>
              <Link href={`#sobre`}>sobre</Link>{' '}
            </li>
            <li>
              <Link href={`#precos`}>preços</Link>{' '}
            </li>
            <li>
              <Link href={`#agendamento`}>agendamento</Link>{' '}
            </li>
            <li>
              <Link href={`#contato`}>contato</Link>{' '}
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
