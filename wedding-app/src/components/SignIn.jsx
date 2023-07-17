import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../index.css";
import Title from "../components/Title";
import Button from "../components/Button";

export default function SignIn({ handleSignUpClick, closeSignInPage }) {
  let inputEmail = useRef(null);
  let inputPassword = useRef(null);

  useEffect(() => {
    inputEmail.current.focus();
  }, []);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setValues({ ...values, password: e.target.value });
  };

  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email) {
      inputEmail.current.focus();
    } else if (!values.password) {
      inputPassword.current.focus();
    }
    setSubmit(true);
  };

  const signInRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (signInRef.current && !signInRef.current.contains(event.target)) {
        closeSignInPage();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSignInPage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="signin"
      ref={signInRef}
    >
      <div style={{ width: "90%" }}>
        <Title text={"Sign in to your Account"} titleStyle={"signtitle"} />
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="email"
              placeholder="Email"
              ref={inputEmail}
              value={values.email}
              onChange={handleEmailChange}
              style={{
                padding: "15px",
                width: "95%",
                marginTop: "1rem",
                outlineColor: "lightblue",
                fontSize: "16px",
              }}
            />
            {submit && !values.email ? (
              <label style={{ color: "red", margin: "3px 0px" }}>
                Please enter your email
              </label>
            ) : null}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="password"
              placeholder="Password"
              ref={inputPassword}
              value={values.password}
              onChange={handlePasswordChange}
              style={{
                padding: "15px",
                width: "95%",
                marginTop: "1rem",
                outlineColor: "lightblue",
                fontSize: "16px",
              }}
            />
            {submit && !values.password ? (
              <label style={{ color: "red", margin: "3px 0px" }}>
                Please enter your password
              </label>
            ) : null}
          </div>
          <Button text={"Sign in"} btnStyle={"btn sign-btn"} />
        </form>
        <h3 style={{ fontSize: "16px", fontWeight: "500" }}>
          Not a member yet?{" "}
          <span
            style={{ color: "#EF6B0B", fontWeight: "600", cursor: "pointer" }}
            onClick={handleSignUpClick}
          >
            Sign up
          </span>
        </h3>
      </div>
    </motion.div>
  );
}
