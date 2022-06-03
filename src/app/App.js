import React from "react";
import { useRoutes } from "react-router-dom";

import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">{useRoutes(routes)}</main>
      <Footer />
    </div>
  );
};

export default App;
