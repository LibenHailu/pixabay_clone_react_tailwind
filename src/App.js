// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Detail from "./pages/detail";
function App() {
  return (
    <>
      <Navbar />
      <switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/detail/:id" exact component={Detail}></Route>
      </switch>
      <Footer />
    </>
  );
}

export default App;
