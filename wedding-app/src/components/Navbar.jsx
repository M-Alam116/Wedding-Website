import React, { useState } from "react";
import "../index.css";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import {CgProfile} from "react-icons/cg"
import Logo1 from '../images/logo1.png'

export default function Navbar({handleSignInClick, handleSignUpClick}) {
  const [open, setOpen] = useState(true);

  let hambarger = document.getElementsByClassName("navElements");
  const openNavbar = () => {
    setOpen(false);
    hambarger[0].style.display = "flex";
  };

  const closeNavbar = () => {
    hambarger[0].style.display = "none";
    setOpen(true);
  };


  return (
    <div className="navStyle">
      <a href="#home">
        <img src={Logo1} alt="logo" className="logo" />
      </a>
      <ul className="navElements open">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#choose">Services</a>
        </li>
        <li>
          <a href="#location">Locations</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div style={{ display: "flex", gap: "20px" }}>
        <Button
          text={"Sign in"}
          btnStyle={"btn sign_in"}
          onclick={handleSignInClick}
        />
        <Button
          text={"Sign up"}
          btnStyle={"btn sign_up"}
          onclick={handleSignUpClick}
        />
        <CgProfile className="profile-icon" onClick={handleSignInClick}/>
        {open ? (
          <RxHamburgerMenu className="hambarger" onClick={openNavbar} />
        ) : (
          <RxCross2 className="hambarger" onClick={closeNavbar} />
        )}
      </div>
    </div>
  );
}
