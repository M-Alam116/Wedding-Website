import React from "react";
import "../index.css";
import Title from "../components/Title";
import Button from "../components/Button";
import { TiDelete } from "react-icons/ti";

export default function Book({handleClose, handleBookRender}) {
  const inputStyle = {
    width: "15rem",
    height: "3.1rem",
    padding: "15px",
    outlineColor: "lightblue",
    fontSize: "16px",
    margin: "1rem",
  };

  return (
    <div className="book">
      <div>
        <Title text={"Book your desired place"} titleStyle={"book-title"} />
        <TiDelete
          style={{
            position: "absolute",
            right: "10",
            top: "10px",
            cursor: "pointer",
            fontSize: "25px",
          }}
          onClick={handleClose}
        />
      </div>
      <form
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          <input
            type="text"
            placeholder="First and last name"
            style={inputStyle}
          />

          <input type="email" placeholder="Email" style={inputStyle} />

          <input type="text" placeholder="Phone number" style={inputStyle} />

          <input
            type="date"
            placeholder="Date"
            //    value=""
            //    min=""
            //    max=""
            style={inputStyle}
            className="date"
          />

          <input type="time" placeholder="Time" style={inputStyle} />

          <input type="number" placeholder="# of people" style={inputStyle} />
        </div>

        <textarea
          placeholder="Message"
          style={{
            padding: "15px",
            width: "75%",
            height: "10rem",
            marginBottom: "2rem",
            outlineColor: "lightblue",
            fontSize: "16px",
            resize: "none",
          }}
        ></textarea>
      </form>
      <Button text={"Book Now"} btnStyle={"btn btn-book-form"} onclick={handleBookRender}/>
    </div>
  );
}
