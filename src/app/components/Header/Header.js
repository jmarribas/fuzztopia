"use client";
import Image from "next/image";
import Link from 'next/link';
import styles from "./Header.module.css";
import MenuModal from "../MenuModal/MenuModal";
import { useState } from "react";

export default function HeaderComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <MenuModal isOpen={isModalOpen} onClose={handleCloseModal} />}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="#historysection">
            HISTORIA
          </Link>
          <Link href="#wearesection">
            SOMOS
          </Link>
          <Link href="#releasessection">
            LANZAMIENTOS
          </Link>
          <Link href="#contactsection">
            CONTACTO
          </Link>
          <span className="material-symbols-outlined" onClick={handleOpenModal}>
            menu
          </span>
        </nav >
        <div>
          <Image
            src="/raices.webp"
            alt="Raices"
            className={styles.raices}
            layout="fill" /* Asegura que la imagen ocupe todo el contenedor */
            objectFit="cover"
            priority
          />
        </div>
        <div className={styles.logo}>
          <Image
            src="/logo.webp"
            alt="Logotipo"
            width={240}
            height={118}
            priority
          />
          <div className={styles.social}>
            <a href="https://www.facebook.com/fuzztopiarock" target="_blank" rel="noopener noreferrer">
              <Image
                src="/social/facebook_blue.svg"
                alt="Fuzz"
                width={40}
                height={40}
                priority
              />
            </a>
            <a href="https://www.instagram.com/fuzztopiarock" target="_blank" rel="noopener noreferrer">
              <Image
                src="/social/instagram_blue.svg"
                alt="Fuzz"
                width={40}
                height={40}
                priority
              />
            </a>
            <a href="https://www.youtube.com/@fuzztopiarock" target="_blank" rel="noopener noreferrer">
              <Image
                src="/social/youtube_blue.svg"
                alt="Fuzz"
                width={40}
                height={40}
                priority
              />
            </a>
            <a href="https://www.tiktok.com/@fuzztopiarock" target="_blank" rel="noopener noreferrer">
              <Image
                src="/social/tiktok_blue.svg"
                alt="Fuzz"
                width={40}
                height={40}
                priority
              />
            </a>
          </div>
        </div>
      </header >
    </>
  );
}