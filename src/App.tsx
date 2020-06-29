import React from "react";
import "./index.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Rooms from "./components/room";
import Foods from "./components/food";

function App() {
  return (
    <div className="App">
      <Hero />
      <Nav />
      <Rooms />
      <Foods />
    </div>
  );
}

export default App;
