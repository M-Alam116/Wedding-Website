import React, { useState } from "react";
import Title from "./Title";
import Button from "./Button";
// import Book from "./Book";
import "../index.css";
// import home1 from "../images/home1.jpg";
// import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";

export default function Home() {
  const homeStyle = {
    backgroundImage: `url(${home3})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    flexDirection: "cloumn",
    justifyContent: "center",
  };

  // const [renderBook, setRenderBook] = useState(false);

  // const handleBook = () => {
  //   if (!renderBook) {
  //     setRenderBook(true);
  //   } else {
  //     setRenderBook(false);
  //   }
  // };

  // const handleClose = () => {
  //   setRenderBook(false);
  // };

  return (
    <div id="home" style={homeStyle}>
      <div
        style={{
          // backgroundColor: "rgba(0, 0, 0, 0.15)",
          position: "absolute",
          top: "35%",
          padding: "1rem",
        }}
      >
        <Title text={"DA WEDDING WHISPER"} titleStyle={"home-title"} />
        <Title
          text={"ELEVATING YOUR SPECIAL DAY"}
          titleStyle={"home-subtitle"}
        />
        {/* <Button
          text={"Book Venue"}
          btnStyle={"btn btn-book"}
          onclick={handleBook}
        /> */}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          position: "absolute",
          top: "70%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          padding: "0.5rem",
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <select className="dropdown">
            <option>Choose Location</option>
            <option>Islamabad</option>
            <option>Rawalpindi</option>
            <option>Wah cantt</option>
          </select>

          <input type="date" className="dropdown" />

          <select className="dropdown">
            <option>Time</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
        </div>
        <Button text={"Search Now"} btnStyle={"btn btn-search"} />
      </div>
      {/* {renderBook ? <Book handleClose={handleClose} /> : null} */}
    </div>
  );
}
