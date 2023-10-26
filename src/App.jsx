import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PreviousEvents from "./pages/PreviousEvents";
import Header from "./layout/Header/index";
import Footer from "./layout/Footer/Footer";
import { headerLinks } from "./utils/headerLinks";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Header links={headerLinks} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/previous-events" element={<PreviousEvents />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
