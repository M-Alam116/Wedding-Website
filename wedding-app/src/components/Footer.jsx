import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RxLinkedinLogo } from "react-icons/rx";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer">
      <p>© Copyright Da wedding Whispers. All Rights Reserved</p>
      <div className="footer-icons">
        <a href="https://wa.me/message/TYBWH4KEVBANN1" target="_blank">
          <BsWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/company/da-wedding-whisper/"
          target="_blank"
        >
          <RxLinkedinLogo />
        </a>
        <a
          href="https://instagram.com/daweddingwhisper?igshid=MzRlODBiNWFlZA=="
          target="_blank"
        >
          <BsInstagram />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&to=daweddingwhisper@gmail.com"
          target="_blank"
        >
          <SiGmail />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100091511314699"
          target="_blank"
        >
          <BsFacebook />
        </a>
      </div>
      <a href="#home">
        <AiFillHome className="footer-home" />
      </a>
    </div>
  );
}
