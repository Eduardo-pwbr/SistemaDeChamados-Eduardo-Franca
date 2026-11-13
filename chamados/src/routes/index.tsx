import { Routes, Route } from "react-router-dom";

import Signin from "../pages/SingnIn";
import SignUp from "../pages/SignUp/";
import Dashboard from "../pages/Dastboard";
import Profile from "../pages/Profile";
import { Private } from "./Private";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/profile" element={<Private><Profile /></Private>} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/dashboard" element={<Private><Dashboard /></Private>} />
    </Routes>
  );
}