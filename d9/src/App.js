import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./component/MyNavbar";
import BookList from "./component/BookList";
import Registration from "./component/Registration";
import { useState } from "react";

// import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <div>
        <MyNavbar search={search} setSearch={setSearch} />

        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
