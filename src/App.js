import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import SmoothScrolling from "./utils/SmoothScrolling";
import { useState } from "react";
import Institution from "./Pages/Institution";
import Prestation from "./Pages/Prestations";
import Produits from "./Pages/Produits";
import { AnimatePresence } from "framer-motion";
import Contact from "./Pages/Contact";

const App = () => {

  const [skew, setSkew] = useState(0)

  const location = useLocation();

  return (
    <>

        <SmoothScrolling setSkew={setSkew}>
          <div className="App">
          <header>
        <Navbar />
        
      </header>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home skew={skew} />} />
              <Route path="/institution" element={<Institution />} />
              <Route path="/prestations" element={<Prestation />} />
              <Route path="/produits" element={<Produits />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/presations/:id" element={<Prestation />} />
              <Route path="/presations/:id" element={<Produits />} />
            </Routes>
            </AnimatePresence>

            <Footer />
          </div>
        </SmoothScrolling>
    </>
  );
}

export default App;
