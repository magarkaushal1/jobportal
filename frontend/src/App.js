import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./assets/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Footer from "./component/Footer";
import { login, logout, setUser } from "./redux/reducer/auth";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  const [user_fetched, setuser_fetched, setUserFetched] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      axios
        .get("$ {process.env.PORT}/users/get-user", {
          headers: {
            Authorization: 'Bearer $(localStorage.getItem("access_token")}',
          },
        })
        .then((res) => {
          dispatch(login());
          dispatch(setUser(res.data));
          setUserFetched(true);
        })
        .catch((error) => {
          dispatch(logout());
          setUserFetched(true);
        });
    }
    if (!user_fetched) {
      return (
        <>
          <h1>Loading...</h1>
        </>
      );
    }
  });

  return (
    <>
      <div>
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="*" element={<h1>Page not Found</h1>} />
          <Route path="/404" element={<h1>Page not Found</h1>} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
