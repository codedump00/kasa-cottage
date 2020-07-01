import React, { ReactElement, Component } from "react";
import "./menu.css";
import image from "../assets/food.jpg";
import ResponsiveSlider from "./slider";

interface Props {}

const menuItems: ISliderData[] = [
  { name: "Chicken Shadeko", price: "RS. 500", image: image },
  { name: "Taas", price: "RS. 500", image: image },
  { name: "MoMo", price: "RS. 500", image: image },
  { name: "Mushroom Chilly", price: "RS. 500", image: image },
  { name: "Fried Corn", price: "RS. 500", image: image },
  { name: "Chicken Chilly", price: "RS. 500", image: image },
];

export default function Menu(): ReactElement {
  return (
    <>
      <h3 className="menu__titles">Snacks</h3>
      <section className="menu">
        <ResponsiveSlider data={menuItems} />
      </section>
      <h3 className="menu__titles">Refreshments</h3>
      <section className="menu">
        <ResponsiveSlider data={menuItems} />
      </section>
      <h3 className="menu__titles">Dinner</h3>
      <section className="menu">
        <ResponsiveSlider data={menuItems} />
      </section>
    </>
  );
}
