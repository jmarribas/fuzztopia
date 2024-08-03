"use client"
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>@{currentYear}</p>
      <div>
        <p>© www.fuzztopiarock.com by jomuarribas</p>
        <Link href="https://github.com/jmarribas" passHref>
          <Image
            src="/social/github.svg"
            alt="Raices"
            className={styles.github}
            width={20}
            height={20}
            priority
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/jmarribas", "_blank", "noopener,noreferrer");
            }}
          />
        </Link>
      </div>
      <p>
        <Link href="/privacypolicy">
          Política de privacidad
        </Link>
      </p>
    </footer>
  );
}