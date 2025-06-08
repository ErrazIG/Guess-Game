import { Link } from "react-router-dom";
import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>404 - Page non trouvée</h1>
      <p className={style.message}>
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <Link to="/" className={style.link}>
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;
