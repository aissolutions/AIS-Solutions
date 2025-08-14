import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import CourseContent from "./component/CourseContent";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import BackButton from "./component/BackButton";

// ...inside your main component's return:

import Customize from "./component/Customize"; // adjust

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <BackButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseContent />} />
          <Route path="/customize" element={<Customize />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
