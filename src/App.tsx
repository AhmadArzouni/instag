import { Routes, Route } from "react-router-dom";
import VoteLanding from "./pages/VoteLanding";
import InstagramLogin from "./pages/InstagramLogin";
import FacebookLogin from "./pages/FacebookLogin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<VoteLanding />} />
      <Route path="/login" element={<InstagramLogin />} />
       <Route path="/facebook-login" element={<FacebookLogin />} />
    </Routes>
  );
}
