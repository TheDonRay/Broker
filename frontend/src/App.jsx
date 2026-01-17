import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import SignUpPage from "./components/Signuppage.jsx"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Example: <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Homepage />} /> 
        <Route path="/" element={<Signuppage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
