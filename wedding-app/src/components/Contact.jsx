import React from "react";
import "../index.css";
import Title from "../components/Title";
import Button from "../components/Button";

export default function Book() {
  return (
    <div id="contact" style={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <Title text={"Contact"} titleStyle={"contacttitle"} />
      <form
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <input type="text" placeholder="Name" className="contact-input" />
          <input type="email" placeholder="Email" className="contact-input" />

          <input type="text" placeholder="Subject" className="contact-input" />
        </div>

        <textarea
          placeholder="Message"
          style={{
            padding: "15px",
            width: "80%",
            height: "10rem",
            marginBottom: "2rem",
            outlineColor: "lightblue",
            fontSize: "16px",
            resize: "none",
          }}
        ></textarea>
      </form>
      <Button text={"Send Message"} btnStyle={"btn btn-book-form"} />
    </div>
  );
}
