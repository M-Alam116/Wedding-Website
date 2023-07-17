import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../index.css";
import Title from "../components/Title";
import Button from "../components/Button";

export default function SignUp({ handleSignInClick, closeSignUpPage }) {
  let firstName = useRef(null);
  let lastName = useRef(null);
  let email = useRef(null);
  let phoneNumber = useRef(null);
  let password = useRef(null);
  let confirmPassword = useRef(null);

  useEffect(() => {
    firstName.current.focus();
  }, []);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleFirstNameChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const handleLastNameChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const handleEmailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handlePhoneChange = (e) => {
    setValues({ ...values, phoneNumber: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setValues({ ...values, password: e.target.value });
  };
  const handleConfirmPasswordChange = (e) => {
    setValues({ ...values, confirmPassword: e.target.value });
  };

  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.firstName) {
      firstName.current.focus();
    } else if (!values.lastName) {
      lastName.current.focus();
    } else if (!values.email) {
      email.current.focus();
    } else if (!values.phoneNumber) {
      phoneNumber.current.focus();
    } else if (!values.password) {
      password.current.focus();
    } else if (!values.confirmPassword) {
      confirmPassword.current.focus();
    }
    setSubmit(true);
  };

  const signUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (signUpRef.current && !signUpRef.current.contains(event.target)) {
        closeSignUpPage();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSignUpPage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="signup"
      ref={signUpRef}
    >
      <div style={{ width: "100%" }}>
        <Title text={"Sign up with your email"} titleStyle={"signtitle"} />
        <form onSubmit={handleSubmit}>
          <div className="signup_fields">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                placeholder="First Name"
                ref={firstName}
                value={values.firstName}
                onChange={handleFirstNameChange}
                style={{
                  padding: "15px",
                  width: "95%",
                  outlineColor: "lightblue",
                  marginTop: "1.5rem",
                  fontSize: "16px",
                }}
              />
              {submit && !values.firstName ? (
                <label style={{ color: "red", margin: "3px 0px" }}>
                  please enter your first name
                </label>
              ) : null}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                placeholder="Last Name"
                ref={lastName}
                value={values.lastName}
                onChange={handleLastNameChange}
                style={{
                  padding: "15px",
                  width: "95%",
                  outlineColor: "lightblue",
                  marginTop: "1.5rem",
                  fontSize: "16px",
                }}
              />
              {submit && !values.lastName ? (
                <label style={{ color: "red", margin: "3px 0px" }}>
                  please enter your last name
                </label>
              ) : null}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="email"
                placeholder="Email"
                ref={email}
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
                type="email"
                placeholder="Phone Number"
                ref={phoneNumber}
                value={values.phoneNumber}
                onChange={handlePhoneChange}
                style={{
                  padding: "15px",
                  width: "95%",
                  marginTop: "1rem",
                  outlineColor: "lightblue",
                  fontSize: "16px",
                }}
              />
              {submit && !values.phoneNumber ? (
                <label style={{ color: "red", margin: "3px 0px" }}>
                  Please enter your phone number
                </label>
              ) : null}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="password"
                placeholder="Password"
                ref={password}
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

            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="password"
                placeholder="Confirm Password"
                ref={confirmPassword}
                value={values.confirmPassword}
                onChange={handleConfirmPasswordChange}
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
                  Please enter your password again
                </label>
              ) : null}
            </div>
          </div>
          <Button text={"Sign up"} btnStyle={"btn sign-btn"} />
        </form>
        <h3 style={{ fontSize: "16px", fontWeight: "500", marginLeft: "7.5%" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#EF6B0B", fontWeight: "600", cursor: "pointer" }}
            onClick={handleSignInClick}
          >
            Sign in
          </span>
        </h3>
      </div>
    </motion.div>
  );
}
