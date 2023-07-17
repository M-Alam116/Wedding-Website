import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Location from "./components/Location";
import Events from "./components/Events";
import GetStarted from "./components/GetStarted";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [showSignInPage, setShowSignInPage] = useState(false);
  const [showSignUpPage, setShowSignUpPage] = useState(false);

  const handleSignInClick = () => {
    setShowSignInPage(!showSignInPage);
    setShowSignUpPage(false);
  };

  const handleSignUpClick = () => {
    setShowSignUpPage(!showSignUpPage);
    setShowSignInPage(false);
  };

  const closeSignInPage = () => {
    setShowSignInPage(false);
  };

  const closeSignUpPage = () => {
    setShowSignUpPage(false);
  };

  return (
    <div>
      {showSignInPage ? (
        <SignIn closeSignInPage={closeSignInPage} handleSignUpClick={handleSignUpClick}/>
      ) : showSignUpPage ? (
        <SignUp closeSignUpPage={closeSignUpPage} handleSignInClick={handleSignInClick}/>
      ) : (
        <>
          <Navbar
            handleSignInClick={handleSignInClick}
            handleSignUpClick={handleSignUpClick}
          />
          <Home />
          <About />
          <WhyChoose />
          <Location />
          <Events />
          <GetStarted />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
  
}

export default App;
