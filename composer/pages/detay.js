import styles from '../styles/Home.module.css';

// We need to use top level await on these modules as they are async. 
// This is actually what let's module federation work with NextJS
const Header = (await import('Header/Header')).default;

export default function Detay() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <p>header</p>
      </main>
    </div>
  );
}
