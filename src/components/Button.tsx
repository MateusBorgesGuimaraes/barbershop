import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ path, text }: { path: string; text: string }) {
  return (
    <Link className={styles.button} href={path}>
      {text}
    </Link>
  );
}
