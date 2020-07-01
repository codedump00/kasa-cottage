import React from "react";
import Slider, { Settings } from "react-slick";
import "./slider.css";
import Back from "../assets/back.svg";
import Next from "../assets/next.svg";

interface Props {
  data: ISliderData[];
}

export default function ResponsiveSlider(props: Props) {
  var settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // arrows: true,
    nextArrow: (
      <div
        className="slider__icons"
        style={{
          backgroundImage: `url('${Next}')`,
        }}
      ></div>
    ),
    prevArrow: (
      <div
        className="slider__icons"
        style={{
          backgroundImage: `url('${Back}')`,
        }}
      ></div>
    ),
    useCSS: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="main__container">
      <Slider {...settings} className="slider__content">
        {props.data.map((each) => (
          <div className="slider__element">
            <div className="food__card__container">
              <div
                className="food__card__image"
                style={{
                  backgroundImage: `url('${each.image}')`,
                }}
              ></div>
              <div className="food__card__info">
                <h4 className="food__title">{each.name}</h4>
                <h4 className="food__price">{each.price}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
