import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddBook.module.css";

const AddBook = ({ onShowForm, onAddBook }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const cancelHandler = () => {
    setIsUpdate(false);
    onShowForm(false);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
  };

  const addBookHandler = (event) => {
    event.preventDefault();
    onAddBook(enteredTitle, enteredAuthor, enteredYear);
    onShowForm(false);
    resetFormHandler();
  };

  const resetFormHandler = () => {
    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredYear("");
  };

  return (
    <Card className={styles.form}>
      <h3 className={styles.title}>
        {isUpdate ? "Edit Buku" : "Tambah Buku Baru"}
      </h3>
      <form autoComplete="off" onSubmit={addBookHandler}>
        <div className={styles["form-group"]}>
          <label htmlFor="title">Judul</label>
          <input
            type="text"
            id="title"
            required
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="author">Penulis</label>
          <input
            type="text"
            id="author"
            onChange={authorChangeHandler}
            value={enteredAuthor}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="year">Tahun</label>
          <input
            type="text"
            id="year"
            onChange={yearChangeHandler}
            value={enteredYear}
          />
        </div>
        <div className={styles["button-group"]}>
          <Button title="Masukkan Buku" variant="primary" type="submit" />
          <Button title="Batal" variant="danger" onClick={cancelHandler} />
        </div>
      </form>
    </Card>
  );
};

export default AddBook;
