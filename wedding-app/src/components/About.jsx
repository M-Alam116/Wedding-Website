import React from "react";
import '../index.css'
import Title from "./Title";
import aboutvector from "../images/aboutvector.png";
import Button from "./Button";

export default function About() {
  return (
    <div id="about">
      <div className="about-section">
      <Title text={"ABOUT US"} titleStyle={"abouttitle"}/>
        <p className="about-description">
          Plan your dream wedding effortlessly with Da Wedding Whispers! Our
          professional wedding company offers a wide range of services to ensure
          an unforgettable and flawless experience. From finding the best
          vendors to coordinating every aspect of your special day, we provide a
          smart and stylish approach. Don't let the overwhelming task of
          planning your own wedding dampen your excitement. Let us handle the
          details while you cherish the journey to your perfect wedding
        </p>
        <a href="#contact">
        <Button text={"Contact Now"} btnStyle={"btn btn-book"}/>
        </a>
      </div>
        <img src={aboutvector}alt="about vector"/>
    </div>
  );
}
