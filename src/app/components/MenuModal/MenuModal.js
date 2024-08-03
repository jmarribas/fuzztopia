"use client"
import { useEffect, useState } from 'react';
import styles from './MenuModal.module.css';

export default function MenuModal({ isOpen, onClose }) {
  const [closeModal, setCloseModal] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setCloseModal(isOpen);
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setCloseModal(false);
      onClose();
    }, 300); // Duración de la animación en milisegundos
  };

  if (!closeModal && !isClosing) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={`${styles.modalContent} ${isClosing ? styles.closing : ''}`}>
        <div className={styles.closeButton} onClick={handleClose}>
          CERRAR
        </div>
        <ul className={styles.menuItems}>
          <li>
            <a href="#historysection" onClick={handleClose}>
              HISTORIA
            </a>
          </li>
          <li>
            <a href="#wearesection" onClick={handleClose}>
              SOMOS
            </a>
          </li>
          <li>
            <a href="#releasessection" onClick={handleClose}>
              LANZAMIENTOS
            </a>
          </li>
          <li>
            <a href="#contactsection" onClick={handleClose}>
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}