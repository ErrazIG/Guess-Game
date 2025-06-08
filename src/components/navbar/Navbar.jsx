import { Link } from "react-router-dom";
import DarkModeToggle from "../darkmodeToggle/DarkmodeToggle.jsx";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>QUIZIA</div>

      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Accueil
        </Link>
        <Link to="/random" className={styles.link}>
          Quiz Aléatoire
        </Link>
        <Link to="/all" className={styles.link}>
          Tous les Quiz
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
