import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../Reducer/bookReducer";

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(
    bookReducer,
    [
      { title: "The way of kings", author: "Sidra", id: 1 },
      { title: "The name of wind", author: "Henna", id: 2 },
      { title: "The final empire", author: "Mario", id: 3 },
      { title: "Angle The truth", author: "Iqra", id: 4 },
      { title: "Holy Spirit", author: "Sarmed", id: 5 },
    ],
    () => {
      const localData = localStorage.getItem("books");
      return localData ? JSON.parse(localData) : [];
    }
  );
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
