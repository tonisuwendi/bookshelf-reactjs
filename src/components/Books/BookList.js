import Card from "../UI/Card";
import BookItem from "./BookItem";
import styles from "./BookList.module.css";

const BookList = ({ books }) => {
  if (books.length === 0) {
    return (
      <Card className={styles.empty}>
        <h3>Rak Buku Kosong</h3>
        <p>
          Belum ada buku sama sekali, yuk tambah sekarang.
        </p>
      </Card>
    );
  }

  return (
    <div>
      <h3 className={styles.title}>Kumpulan Buku</h3>
      <div className={styles.books}>
        {books.map((book) => {
          return <BookItem key={book.id} data={book} />;
        })}
      </div>
    </div>
  );
};

export default BookList;
