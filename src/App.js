// App.js

import React from "react";
import { ChatInterface } from "./ChatInterface"; // 챗봇 UI 컴포넌트 임포트
import { Headers } from "./components/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
