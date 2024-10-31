import "./App.css";
import { useState, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import CreatePet from "./components/CreatePet";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }
  }, []);
  return (
    <div className="App">
      <Nav isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dogs" element={<Dogs isAuth={isAuth} />} />
        <Route path="/cats" element={<Cats isAuth={isAuth} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Navigate to="/" />} />
        <Route path="/register" element={!isAuth ? <Register /> : <Navigate to="/" />} />
        <Route path="/profile" element={isAuth ? <Profile setIsAuth={setIsAuth} /> : <Navigate to="/login" />} />
        <Route path="/createpet" element={<CreatePet />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;