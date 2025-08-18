import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/Contact";
import PrototypePage from "./pages/Prototype";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [geminiResponse, setGeminiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage />;
      case "prototype":
        return (
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
        );
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans antialiased">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow pt-10">{renderPage()}</main>
      <Footer />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        isLoading={isLoading}
        error={error}
        geminiResponse={geminiResponse}
      />
    </div>
  );
}

export default App;