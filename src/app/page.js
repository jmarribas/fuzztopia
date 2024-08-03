import styles from "./page.module.css";
import HeaderComponent from "./components/Header/Header";
import History from "./components/History/History";
import Weare from "./components/Weare/Weare";
import Footer from "./components/Footer/Footer";
import Releases from "./components/Releases/Releases";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderComponent />
      <main className={styles.main}>
        <Weare />
        <History />
        <Releases />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
