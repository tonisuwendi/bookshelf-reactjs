import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./BookItem.module.css";

const BookItem = ({ data, onShowForm, onConfirmDelete }) => {
  const showFormHandler = () => {
    const book = {
      title: data.title,
      author: data.author,
      year: data.year,
      id: data.id,
    };
    onShowForm(true, book);
  };

  const confirmDeleteHandler = () => {
    onConfirmDelete({
      title: data.title,
      author: data.author,
      id: data.id,
    });
  };

  return (
    <Card className={styles.book}>
      <strong className={styles.title}>{data.title}</strong>
      <p className={styles.author}>Penulis: {data.author}</p>
      <p>Tahun: {data.year}</p>
      <div className={styles["button-group"]}>
        <Button
          title="Ubah"
          variant="success"
          size="sm"
          onClick={showFormHandler}
        />
        <Button
          title="Hapus"
          variant="danger"
          size="sm"
          onClick={confirmDeleteHandler}
        />
      </div>
    </Card>
  );
};

export default BookItem;
