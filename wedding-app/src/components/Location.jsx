import React from "react";
import LocationComp from "./LocationComp";
import islamabad from "../images/islamabad.jpg";
import rawalpindi from "../images/rawalpindi.jpg";
import wahCantt from "../images/wahCantt.jpg";
import Title from "./Title";

export default function Location() {
  return (
    <div id="location" className="locations">
      <Title text={"POPULAR LOCATIONS"} titleStyle={"location-title"}/>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent:"center", gap: "3rem"}}>
        <LocationComp image={islamabad} text={"Islamabad"} />
        <LocationComp image={rawalpindi} text={"Rawalpindi"} />
        <LocationComp image={wahCantt} text={"Wah Cantt"} />
      </div>
    </div>
  );
}
