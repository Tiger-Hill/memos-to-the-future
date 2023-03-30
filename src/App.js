import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomepagePage from "./pages/HomepagePage";
import ArticleShowPage from "./pages/ArticleShowPage"

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomepagePage />} />
        <Route path="/article/:id" element={<ArticleShowPage />}/>
      </ Routes>
    </div>
  );
};

export default App;
