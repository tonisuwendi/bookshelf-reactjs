import Button from "../UI/Button";
import { LogoImage } from "../../assets";

import styles from "./Navbar.module.css";

const Navbar = ({ onShowForm }) => {
  const showFormHandler = () => {
    onShowForm(true);
  };

  return (
    <header className={styles.navbar}>
      <img src={LogoImage} className={styles.logo} alt="logo bookshelf" />
      <Button title="Tambah Buku" variant="outline" onClick={showFormHandler} />
    </header>
  );
};

export default Navbar;
