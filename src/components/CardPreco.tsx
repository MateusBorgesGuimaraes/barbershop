import Image from 'next/image';
import styles from './CardPreco.module.css';

export default function CardPreco({
  path,
  alt,
  title,
  content,
  price,
}: {
  path: string;
  alt: string;
  title: string;
  content: string;
  price: string;
}) {
  return (
    <div className={styles.cardContainer}>
      <Image
        className={styles.icon}
        src={path}
        alt={alt}
        width={120}
        height={120}
      />
      <h4>{title}</h4>
      <p>{content}</p>
      <span className={styles.preco}>{price}</span>
    </div>
  );
}
