import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import IronMan from "./components/ironman/IronMan";

function App() {
  return (
    <AnimatePresence mode="wait">
      <I18nextProvider i18n={i18n}>
        <Router basename="/myGlory">
          <Routes>
            <Route path="/" element={<IronMan />} />
          </Routes>
        </Router>
      </I18nextProvider>
    </AnimatePresence>
  );
}

export default App;
