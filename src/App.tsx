import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./Pages/Home";
import { Store } from "./Pages/Store";
import { About } from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <h1>Test</h1>
      </Container>
    </div>
  );
}

export default App;
