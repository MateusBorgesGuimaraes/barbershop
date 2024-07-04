import Image from 'next/image';
import styles from './CardSobre.module.css';

type CardSobreProps = {
  path: string;
  alt: string;
  title: string;
  icon: string;
  content: string;
  iconAlt: string;
  even?: boolean;
};

export default function CardSobre({
  path,
  alt,
  title,
  icon,
  content,
  iconAlt,
  even,
}: CardSobreProps) {
  if (even) {
    return (
      <div className={styles.cardSobreContainerEven}>
        <div className={styles.contentContainer}>
          <h3>
            {title}
            <Image src={icon} alt={iconAlt} width={40} height={40} />
          </h3>
          <p>{content}</p>
        </div>
        <div className={styles.containerImage}>
          <Image src={path} alt={alt} width={380} height={280} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.cardSobreContainer}>
        <div className={styles.containerImage}>
          <Image src={path} alt={alt} width={380} height={280} />
        </div>

        <div className={styles.contentContainer}>
          <h3>
            {title}
            <Image src={icon} alt={iconAlt} width={40} height={40} />
          </h3>
          <p>{content}</p>
        </div>
      </div>
    );
  }
}
