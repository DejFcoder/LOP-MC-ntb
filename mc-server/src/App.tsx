import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { DarkModeProvider, useDarkMode } from "./DarkModeContext";
import ScrollToTop from "./components/ScrollOnTop";
import { LanguageProvider } from "./LanguageContext";

import Home from "./pages/Home";
import Recruitments from "./pages/Recruitments";
import Rules from "./pages/Rules";
import VIPshop from "./pages/VIPshop";

import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";

import Package1 from "./components/VIPpackages/Package1";

function AppContext() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruitments" element={<Recruitments />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vipshop" element={<VIPshop />} />
        <Route path="/vipshop/package1" element={<Package1 />} />
      </Routes>
    </div>
  );
}

function App(): JSX.Element {
  return (
    <Router>
      <AuthProvider>
        <DarkModeProvider>
          <LanguageProvider>
            <ScrollToTop />
            <AppContext />
          </LanguageProvider>
        </DarkModeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
