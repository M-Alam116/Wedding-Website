import React from "react";
import Home3 from "../images/home3.jpg";
import Title from "./Title";
import Button from "./Button";

export default function GetStarted() {
  return (
    <div
      style={{
        backgroundImage: `url(${Home3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "fit-content",
        padding: "6rem 0",
        marginBottom: "2rem",
        marginTop: "3rem"
      }}
    >
      <div className="started">
        <Title text={"Are You Looking For Vendor For Your Wedding"} titleStyle={"getStarted-title"}/>
        <Button text={"Get Started Now"} btnStyle={"btn btn-book"}/>
      </div>
    </div>
  );
}
