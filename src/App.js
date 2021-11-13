import { useState } from "react";

import AddBook from "./components/Books/AddBook";
import BookList from "./components/Books/BookList";
import Navbar from "./components/Navbar/";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookList, setBookList] = useState([]);

  const changeFormHandler = (status) => {
    setShowForm(status);
  };

  const addBookHandler = (title, author, year) => {
    setBookList((prevBookList) => {
      return [
        ...prevBookList,
        {
          title,
          author,
          year,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <>
      <Navbar onShowForm={changeFormHandler} />
      <main>
        {showForm && (
          <AddBook onShowForm={changeFormHandler} onAddBook={addBookHandler} />
        )}
        <BookList books={bookList} />
      </main>
    </>
  );
};

export default App;
