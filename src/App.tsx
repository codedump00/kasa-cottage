import React from "react";
import "./index.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Rooms from "./components/room";
import Foods from "./components/food";
import Menu from "./components/menu";

function App() {
  return (
    <div className="App">
      <span className="logo"></span>
      <Hero />
      <Nav />
      <Rooms />
      <Foods />
      <Menu/>
    </div>
  );
}

export default App;
