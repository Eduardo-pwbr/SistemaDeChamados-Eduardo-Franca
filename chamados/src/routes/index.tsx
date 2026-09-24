import { Routes, Route } from "react-router-dom";

import Signin from "../pages/SingnIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dastboard";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}