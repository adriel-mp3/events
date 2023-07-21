import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import PreviousEvents from "./routes/PreviousEvents";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/previous-events" element={<PreviousEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
