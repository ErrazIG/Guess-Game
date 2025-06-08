import { Link } from "react-router-dom";
import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={style.container}>
      <h1 className={style.title}>
        Teste-toi, amuse-toi, découvre qui tu es vraiment !
      </h1>
      <p className={style.subtitle}>
        Des quiz fun et surprenants pour apprendre à te connaître et défier tes
        amis.
      </p>

      <div className={style.buttons}>
        <Link to="/random" className={style.buttonPrimary}>
          🎲 Lancer un quiz aléatoire
        </Link>
        <Link to="/all" className={style.buttonSecondary}>
          📚 Voir tous les quiz
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
