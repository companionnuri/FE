import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Region from "./Region";
import Search from "./Search";
import Info from "./Info";
import Detail from "./Detail";
import Category from "./Category";
import Cafemain from "./Cafemain";
import Foodmain from "./Foodmain";
import Housemain from "./Housemain";
import Hospitalmain from "./Hospitalmain";
import Parkmain from "./Parkmain";
import Regionmain from "./Regionmain";
import Searchmain from "./Searchmain";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Info />} />
        <Route path={`${process.env.PUBLIC_URL}/Main`} element={<Main />} />
        <Route
          path={`${process.env.PUBLIC_URL}/Cafemain`}
          element={<Cafemain />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/Foodmain`}
          element={<Foodmain />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/Housemain`}
          element={<Housemain />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/Hospitalmain`}
          element={<Hospitalmain />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/Parkmain`}
          element={<Parkmain />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/Regionmain`}
          element={<Regionmain />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/Searchmain`}
          element={<Searchmain />}
        />
        <Route path={`${process.env.PUBLIC_URL}/Region`} element={<Region />} />
        <Route path={`${process.env.PUBLIC_URL}/Detail`} element={<Detail />} />
        <Route path={`${process.env.PUBLIC_URL}/Info`} element={<Info />} />
        <Route
          path={`${process.env.PUBLIC_URL}/Category`}
          element={<Category />}
        />
        <Route path={`${process.env.PUBLIC_URL}/Search`} element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
