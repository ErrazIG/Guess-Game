import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Quizia Games. Tous droits réservés.
      </p>
      <p>Créé avec ❤️ par ErrazIG — amuse-toi bien !</p>
    </footer>
  );
};

export default Footer;
