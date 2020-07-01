import React, { ReactElement } from "react";
import "./location.css";

interface Props {}

export default function Location(): ReactElement {
  return (
    <div className="location__container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14032.505738472562!2d81.3266094!3d28.4456048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa231bf700aacb9a7!2sKasa%20Cottage%20And%20Lodge!5e0!3m2!1sen!2snp!4v1593628903282!5m2!1sen!2snp"
        width="600"
        height="450"
        //   frameborder="0"
        className="iframe__"
        //   allowfullscreen=""
        aria-hidden="false"
        //   tabindex="0"
      ></iframe>
    </div>
  );
}
