import { lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const HomePage = lazy(() => import("./pages/HomePage"));
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/Contact";
const PrototypePage = lazy(() => import("./pages/Prototype"));

function App() {
  const [geminiResponse, setGeminiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans antialiased">
        <Header />
        <main className="flex-grow pt-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route 
              path="/prototype" 
              element={
                <PrototypePage
                  showModal={showModal}
                  setShowModal={setShowModal}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  error={error}
                  setError={setError}
                  geminiResponse={geminiResponse}
                  setGeminiResponse={setGeminiResponse}
                />
              } 
            />
          </Routes>
        </main>
        <Footer />
        
        {/* Modal should be at App level since it's shared */}
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          isLoading={isLoading}
          error={error}
          geminiResponse={geminiResponse}
        />
      </div>
    </Router>
  );
}

export default App;