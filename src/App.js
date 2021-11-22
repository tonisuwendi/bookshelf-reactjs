import { useState, useEffect } from "react";

import FormBook from "./components/Books/FormBook";
import BookList from "./components/Books/BookList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/";

const KEY_STORAGE = "BOOK_LIST";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookData, SetBookData] = useState("");
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const bookListStorage = JSON.parse(localStorage.getItem(KEY_STORAGE)) || [];
    setBookList(bookListStorage);
  }, []);

  const changeFormHandler = (status, data = null) => {
    setShowForm(status);
    SetBookData(data);
  };

  const saveBookHandler = (title, author, year, id) => {
    let books = [];
    if (id) {
      books = bookList.map((book) => {
        if (book.id === id) {
          return {
            title,
            author,
            year,
            id,
          };
        }
        return book;
      });
    } else {
      books = [
        {
          title,
          author,
          year,
          id: Date.now(),
        },
        ...bookList,
      ];
    }

    insertBooks(books);
  };

  const deleteHandler = (id) => {
    bookList.map((book, index) => {
      if (book.id === id) {
        bookList.splice(index, 1);
      }
      return book;
    });
    insertBooks(bookList);
  };

  const insertBooks = (data) => {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
    setBookList(data);
  };

  return (
    <>
      <Navbar onShowForm={changeFormHandler} />
      <main>
        {showForm && (
          <FormBook
            bookData={bookData}
            onShowForm={changeFormHandler}
            onSaveBook={saveBookHandler}
          />
        )}
        <BookList
          books={bookList}
          onShowForm={changeFormHandler}
          onDelete={deleteHandler}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
