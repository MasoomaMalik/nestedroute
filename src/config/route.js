import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "../screens/about";
import Contact from "../screens/contact";
import Dashboard from "../screens/dashboard";
import Home from "../screens/home";
import NotFound from "../screens/notfound";
import Profile from "../screens/profile";
import Service from "../screens/srevices";

export default function AppRouter() {
  return (
    <Router>
        <div>
            <Link to='/'>Home</Link>
            <Link to='About'>About</Link>
            <Link to='Pricing'>Pricing</Link>
            <Link to='Users'>Users</Link>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Users" element={<Users />} />
        <Route path="About" element={<About />} />
        <Route path="About/*" element={<About />} />
        <Route path="Pricing/*" element={<Pricing />} />
      </Routes>
    </Router>
  );
}