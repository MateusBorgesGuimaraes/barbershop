// 'use client';

import Link from 'next/link';
import styles from './hero.module.css';
import Button from './Button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className={styles.heroBg}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>
          Uma das barbearias de maior
          <br /> renome do Brasil
        </h1>
        <Button path="#agendar" text="AGENDAR" />
        <div className={styles.photo}>
          <div>
            <Image
              src={'/assets/images/tools-inicio-480-556.jpg'}
              alt="tolls"
              width={414}
              height={480}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
