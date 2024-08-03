"use client"
import Image from "next/image";
import { useEffect, useRef } from 'react';
import styles from "./Releases.module.css";

export default function Releases() {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles['image-animate']);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.releases} id="releasessection">
      <h2>ULTIMO LANZAMIENTO</h2>
      <div>
        <div>
          <Image
            ref={imageRef}
            src="/single/single.webp"
            alt="Single"
            width={190}
            height={190}
            priority
          />
          <div>
            <p><strong>Single: </strong>Miedo a camibiar</p>
            <p><strong>Disponible en: </strong>Todas las plataformas digitales</p>
          </div>
        </div>
      </div>
    </section>
  )
}