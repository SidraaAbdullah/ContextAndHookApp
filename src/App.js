import React from "react";
import BookForm from "./BookListApp/components/BookForm";
import BookList from "./BookListApp/components/BookList";
import NavBar from "./BookListApp/components/NavBar";
import {BookContextProvider} from "./Contexts/BookContext";

const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
};

export default App;

// import NavBar from "./Component/ContextApp/NavBar";
// import BookList from "./Component/ContextApp/BookList";
// import ThemeToggle from "./Component/ContextApp/ThemeToggle";
// import AuthContextProvider from "./Contexts/AuthContext";
// import ThemeContextProvider from "./Contexts/ThemeContex";
// import BookContextProvider from "./Contexts/BookContext";

// function App() {
//   return (
//     <div className="App">
//       <ThemeContextProvider>
//         <AuthContextProvider>
//           <NavBar />
//           <BookContextProvider>
//             <BookList />
//           </BookContextProvider>
//           <ThemeToggle />
//         </AuthContextProvider>
//       </ThemeContextProvider>
//     </div>
//   );
// }

// export default App;

// // import SongList from './Component/HooksApp/SongList'

// // const App = () => {
// //   return (
// //     <div>
// //     <SongList/>
// //     </div>
// //    );
// // }

// // export default App;
