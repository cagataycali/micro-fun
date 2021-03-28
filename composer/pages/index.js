import styles from '../styles/Home.module.css';

// We need to use top level await on these modules as they are async. 
// This is actually what let's module federation work with NextJS
// const Header = (await import('Header/Header')).default;
// const add = (await import('Footer/add')).default;
import { useRouter } from "next/router";

export default function Home() {
  // Example router for navigate detail page
  // const router = useRouter();
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   router.push('detail');
  // };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>Composer started, edit the composer/pages/index.js</p>
        {/* <Header />
        {`Adding from framework 2 and 3 ==>`} {add(2, 3)}
        <a onClick={handleClick}>Detail</a> */}
      </main>
    </div>
  );
}
