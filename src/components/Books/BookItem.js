import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./BookItem.module.css";

const BookItem = ({ data }) => {
  return (
    <Card className={styles.book}>
      <strong className={styles.title}>{data.title}</strong>
      <p className={styles.author}>Penulis: {data.author}</p>
      <p>Tahun: {data.year}</p>
      <div className={styles["button-group"]}>
        <Button title="Ubah" variant="success" size="sm" />
        <Button title="Hapus" variant="danger" size="sm" />
      </div>
    </Card>
  );
};

export default BookItem;
