import React from "react";
import SideBar from "./components/SideBar.js";
import HeaderBar from "./components/HeaderBar.js";
import WidgetContain from "./components/WidgetContain.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HeaderBar />
      <WidgetContain />
      <SideBar />
    </div>
  );
}
