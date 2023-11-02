import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Man from "./pages/Man";
import Woman from "./pages/Woman";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} title="Verstyle | Fashion Style" />
        <Route path="/login" element={<Login />} />
        <Route
          path="/product"
          element={<Product />}
          title="Verstyle | Product"
        />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
      </Routes>
    </Router>
  );
};

export default App;
