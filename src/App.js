import "./App.css";
import ShareModal from "./components/ShareModal/ShareModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchModal from "./components/SearchModal/SearchModal";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <ShareModal />
              </div>
            }></Route>
          <Route
            path="search"
            element={
              <div className="d-flex h-100 justify-content-center align-items-center ">
                <SearchModal />
              </div>
            }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
