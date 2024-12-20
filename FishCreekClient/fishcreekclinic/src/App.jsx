import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import AskVet from "./components/AskVet.jsx";
import Contact from "./components/Contact.jsx";
import Shop from "./components/Shop.jsx";
import "./styles/fishcreek.css";
function App() {
    return (
        <Router>
            <div id="wrapper">
                <Header />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/askvet" element={<AskVet />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shop" element={<Shop /> } />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
export default App;