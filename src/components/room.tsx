import React, { ReactElement } from "react";
import "./room.css";

interface Props {}

export default function Rooms(): ReactElement {
  return (
    <section className="rooms">
      <div className="rooms__text">
        <h4>Rooms</h4>
        <p>
          Fresh and clean rooms.
          <br />
          But I must explain to you how all
          <br /> this mistaken idea of denouncing pleasure and
          <br /> praising pain was born and I will give you a<br /> complete
          account of the system, and
          <br /> expound the actual teachings of the great
          <br /> explorer of the truth, the master-builder of
          <br /> human happiness.
        </p>
      </div>
      <div className="rooms__bg"></div>
    </section>
  );
}
