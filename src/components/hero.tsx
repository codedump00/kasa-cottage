import React, { ReactElement, useState, CSSProperties, useEffect } from "react";
import heroOne from "../assets/hero_one.jpg";
import heroTwo from "../assets/hero_two.jpg";
import "./hero.css";

interface Props {
  auto?: boolean;
}

const heroImages = [ heroTwo, heroOne];

export default function Hero({ auto = false }: Props): ReactElement {
  const [active, setActive] = useState(0);
  const [styles, setStyles] = useState<CSSProperties>({
    backgroundImage: `url(${heroImages[active]})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  });
  const handleCircleClick = (key: number) => {
    if (active !== key) {
      setActive(key);
      setStyles({ ...styles, backgroundImage: `url(${heroImages[key]})` });
    }
  };

  useEffect(() => {
    if (auto) {
      const change = () => {
        if (active === heroImages.length - 1) setActive(0);
        else setActive(active + 1);
        setStyles({ ...styles, backgroundImage: `url(${heroImages[active]})` });
      };

      const counter = setInterval(change, 2000);
      return () => clearInterval(counter);
    }
  });

  return (
    <section className="hero" style={styles}>
      <div className="rounded__elements">
        {heroImages.map((value, index) => (
          <span
            className="round"
            key={index}
            onClick={() => handleCircleClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
