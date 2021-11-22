import { useState } from "react";
import Card from "../UI/Card";
import BookItem from "./BookItem";
import { SadImage } from "../../assets";

import styles from "./BookList.module.css";
import AlertDeleteModal from "../UI/AlertDeleteModal";

const BookList = ({ books, onShowForm, onDelete }) => {
  const [confirmDelete, setConfirmDelete] = useState();

  const showFormHandler = (status, data) => {
    onShowForm(status, data);
  };

  const confirmDeleteHandler = (book) => {
    setConfirmDelete(book);
  };

  const cancelDeleteHandler = () => {
    setConfirmDelete();
  };

  if (books.length === 0) {
    return (
      <Card className={styles.empty}>
        <img src={SadImage} alt="sad icon" />
        <h3>Rak Buku Kosong</h3>
        <p>Belum ada buku sama sekali, yuk tambah sekarang.</p>
      </Card>
    );
  }

  return (
    <>
      {confirmDelete && (
        <AlertDeleteModal
          title={confirmDelete.title}
          author={confirmDelete.author}
          id={confirmDelete.id}
          onHide={cancelDeleteHandler}
          onDelete={onDelete}
        />
      )}
      <h3 className={styles.title}>Kumpulan Buku</h3>
      <div className={styles.books}>
        {books.map((book) => {
          return (
            <BookItem
              key={book.id}
              data={book}
              onShowForm={showFormHandler}
              onConfirmDelete={confirmDeleteHandler}
            />
          );
        })}
      </div>
    </>
  );
};

export default BookList;
