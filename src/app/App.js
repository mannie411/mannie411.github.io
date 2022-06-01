import { useRoutes } from "react-router-dom";

import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      {useRoutes(routes)}
      <Footer />
    </>
  );
};

export default App;
