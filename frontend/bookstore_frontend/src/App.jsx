import SignUp from "./components/SignUp";
import Courses from "./courses/courses";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
