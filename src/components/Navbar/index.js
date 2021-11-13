import Button from "../UI/Button";

import styles from "./Navbar.module.css";

const Navbar = ({ onShowForm }) => {
  const showFormHandler = () => {
    onShowForm(true);
  };

  return (
    <header className={styles.navbar}>
      <h1 className={styles.app_name}>Bookshelf</h1>
      <Button title="Tambah Buku" variant="outline" onClick={showFormHandler} />
    </header>
  );
};

export default Navbar;
