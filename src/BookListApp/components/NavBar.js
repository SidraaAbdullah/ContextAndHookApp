import React, { useContext } from "react";
import { BookContext } from "../../Contexts/BookContext";

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently You Have {books.length} books to get through...</p>
    </div>
  );
};

export default NavBar;
