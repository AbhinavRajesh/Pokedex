import Head from "next/head";
import logo from "../public/logo.png";
import styles from "../styles/Layout.module.css";

const Layout = ({ children, title = "Pokedex" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src={logo} alt="" />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Layout;
