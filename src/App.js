import { Route, BrowserRouter, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import "./base.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
