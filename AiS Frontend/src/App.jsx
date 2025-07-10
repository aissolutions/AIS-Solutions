import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import CourseContent from "./component/CourseContent";
import Navbar from "./component/Navbar";
import Testimonial from "./component/Testimonial";
import Footer from "./component/Footer";
import ComboPack from "./component/ComboPack";
import Faq from "./component/Faq";
import BackButton from "./component/BackButton";

// ...inside your main component's return:

import Customize from "./component/Customize"; // adjust path if needed
import Alumini from "./component/Alumini/Alumini";

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
