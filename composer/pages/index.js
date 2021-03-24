import styles from '../styles/Home.module.css';

// We need to use top level await on these modules as they are async. 
// This is actually what let's module federation work with NextJS
const Footer = (await import('Footer/Footer')).default;
const Header = (await import('Header/Header')).default;
const add = (await import('Footer/add')).default;

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <Footer />
        <h2>
          {`Adding from framework 2 and 3 ==>`} {add(2, 3)}
        </h2>
      </main>
    </div>
  );
}
