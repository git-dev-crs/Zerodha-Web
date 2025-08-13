import SignupPage from "./components/Signup/SignupPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}
