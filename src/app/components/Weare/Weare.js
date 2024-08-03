"use client"
import { useEffect, useState } from 'react';
import styles from "./Weare.module.css";
import Image from "next/image";

export default function Weare() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const totalImages = 8;

  useEffect(() => {
    if (loadedCount === totalImages) {
      setImagesLoaded(true);
    }
  }, [loadedCount]);

  const handleImageLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1);
  };

  return (
    <section className={`${styles.weare} ${imagesLoaded ? styles.imagesLoaded : ''}`} id="wearesection">
      <div className={styles.weareEdu}>
        <Image
          src="/somos/Edu.webp"
          alt="Edu"
          width={300}
          height={442}
          priority
          onLoad={handleImageLoad}
        />
        <Image
          src="/somos/logoSomos.webp"
          className={styles.logoSomos}
          alt="Logo Somos"
          width={600}
          height={466}
          priority
          onLoad={handleImageLoad}
        />
        <h2>
          Eduardo Martín
        </h2>
        <h3>
          Voz principal
        </h3>
      </div>
      <div className={styles.weareJose}>
        <Image
          src="/somos/jose.webp"
          alt="Jose"
          width={300}
          height={442}
          priority
          onLoad={handleImageLoad}
        />
        <Image
          src="/somos/logoSomos.webp"
          className={styles.logoSomos}
          alt="Logo Somos"
          width={600}
          height={466}
          priority
          onLoad={handleImageLoad}
        />
        <h2>
          Jose Fernandez
        </h2>
        <h3>
          Guitarra y Coros
        </h3>
      </div>
      <div className={styles.weareRichard}>
        <Image
          src="/somos/Richard.webp"
          alt="Richard"
          width={300}
          height={442}
          priority
          onLoad={handleImageLoad}
        />
        <Image
          src="/somos/logoSomos.webp"
          className={styles.logoSomos}
          alt="Logo Somos"
          width={600}
          height={466}
          priority
          onLoad={handleImageLoad}
        />
        <h2>
          Richard Muñoz
        </h2>
        <h3>
          Bajo y Coros
        </h3>
      </div>
      <div className={styles.weareJonathan}>
        <Image
          src="/somos/Jonathan.webp"
          alt="Jonathan"
          width={300}
          height={442}
          priority
          onLoad={handleImageLoad}
        />
        <Image
          src="/somos/logoSomos.webp"
          className={styles.logoSomos}
          alt="Logo Somos"
          width={600}
          height={466}
          priority
          onLoad={handleImageLoad}
        />
        <h2>
          Jonathan Muñoz
        </h2>
        <h3>
          Batería y Coros
        </h3>
      </div>
    </section>
  )
}