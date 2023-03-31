import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomepagePage from "./pages/HomepagePage";
import ArticleShowPage from "./pages/ArticleShowPage"
import Footer from "./components/Footer";
import { useEffect } from "react";

const App = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomepagePage />} />
        <Route path="/article/:id" element={<ArticleShowPage />}/>
      </ Routes>

      <Footer />
    </div>
  );
};

export default App;
