import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;