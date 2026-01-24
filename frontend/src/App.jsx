import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import SignUpPage from "./components/Signuppage.jsx";  
import DashboardPage from "./components/Dashboard.jsx"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Example: <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Homepage />} /> 
        <Route path="/signup" element={<SignUpPage />} /> 
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
