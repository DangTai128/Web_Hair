import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/HeaderComponent";
import Footer from "./component/Footer/FooterComponent";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/AboutUs";
import Hair from "./pages/Hair/Hair";
import ProductDetail from "./pages/Product/ProductDetail";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NoFound/NoFound";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hair" element={<Hair />} />
          <Route path="/hair/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
