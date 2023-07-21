import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import PreviousEvents from "./routes/PreviousEvents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/previous-events" element={<PreviousEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
