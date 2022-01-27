import { Route, BrowserRouter, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import "./base.css";
import Footer from "./components/Footer/Footer";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import SingleBlogPage from "./pages/SingleBlogPage/SingleBlogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog" element={<SingleBlogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
