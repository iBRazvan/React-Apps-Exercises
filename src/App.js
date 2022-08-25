import React, { useState } from "react";

import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const [passStrength, setPassStrength] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.password.length <= 5) 
    {setPassStrength(false);
    setSubmitted(true);}
    else 
    {setPassStrength(true)}

    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.password
    ) {
      setValid(true);
    }
  };

  const handleFirstNameInputChange = (event) => {
    setValues({
      ...values,
      firstName: event.target.value,
    });
  };

  const handleLastNameInputChange = (event) => {
    setValues({
      ...values,
      lastName: event.target.value,
    });
  };

  const handleEmailInputChange = (event) => {
    setValues({
      ...values,
      email: event.target.value,
    });
  };

  const handlePasswordInputChange = (event) => {
    setValues({
      ...values,
      password: event.target.value,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        {/* Uncomment the next line to show the success message */}
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName ? (
          <span id="first-name-error">Please enter a last name</span>
        ) : null}
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.email ? (
          <span id="first-name-error">Please enter an email</span>
        ) : null}
        <input
          onChange={handlePasswordInputChange}
          value={values.password}
          id="password"
          className="form-field"
          type="password"
          placeholder="Password"
          name="password"
        />
        {submitted && !values.password ? (
          <span id="first-name-error">Please enter a password</span>
        ) : null}
        {submitted && !passStrength ? (
          <span id="first-name-error">
            At least 5 characters. A mixture of both uppercase and lowercase
            letters. A mixture of letters and numbers.
          </span>
        ) : null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
