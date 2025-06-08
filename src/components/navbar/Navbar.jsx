import { Link } from "react-router-dom";
import DarkModeToggle from "../darkmodeToggle/DarkmodeToggle.jsx";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/" className={style.logo}>
        QUIZIA
      </Link>

      <div className={style.links}>
        <Link to="/random" className={style.link}>
          Quiz Aléatoire
        </Link>
        <Link to="/all" className={style.link}>
          Tous les Quiz
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
