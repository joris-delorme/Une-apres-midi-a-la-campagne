import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import SmoothScrolling from "./utils/SmoothScrolling";
import { useState } from "react";
import Institution from "./Pages/Institution";
import Prestations from "./Pages/Prestations";
import Prestation from "./Pages/Prestation";
import Produits from "./Pages/Produits";
import { AnimatePresence } from "framer-motion";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import UpdatePrestation from "./Pages/Admin/UpdatePrestation";

const App = () => {

  const [skew, setSkew] = useState(0)
  const [prestations, setPrestations] = useState([])
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
              <Route path="/institution" element={<Institution skew={skew} />} />
              <Route path="/prestations" element={<Prestations setPrestations={setPrestations} prestations={prestations} />} />
              <Route path="/produits" element={<Produits />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/prestations/:id" element={<Prestation prestations={prestations} />} />
              <Route path="/admin" element={<Admin setPrestations={setPrestations} prestations={prestations} />} />
              <Route path="/admin/update/:id" element={<UpdatePrestation prestations={prestations} />} />
            </Routes>
          </AnimatePresence>

          <Footer />
        </div>
      </SmoothScrolling>
    </>
  );
}

export default App;
