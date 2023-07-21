import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Mission from "./Mission";
import Team from "./Team";
import Stories from "./Stories";
import Store from "./Store"
import Cart from "./Cart"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/team" element={<Team />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;