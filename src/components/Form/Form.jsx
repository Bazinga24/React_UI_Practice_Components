import React from "react";
import "./Form.css";
import { useRef, useState } from "react";

function Form() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [isError, setIsError] = useState(false);
  const [errorField, setErrorField] = useState("");
  const clickHandler = () => {
    //...............................................
    let nameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    //.........................................
    const isValidPassword = passwordRegex.test(password.current.value);
    const isValidEmail = emailRegex.test(email.current.value);
    const isValidName = nameRegex.test(name.current.value);
    console.log(isValidEmail, isValidName, isValidPassword);
    if (isValidEmail && isValidName && isValidPassword) {
      setIsError(false);
    }

    if (!isValidPassword) {
      password.current.className = "error";
      setIsError(true);
      setErrorField("Password");
    } else {
      password.current.className = "";
    }

    //...............................................
    if (!isValidEmail) {
      email.current.className = "error";
      setIsError(true);
      setErrorField("Email");
    } else {
      email.current.className = "";
    }

    //............................................
    if (!isValidName) {
      name.current.className = "error";
      setIsError(true);
      setErrorField("Name");
    } else {
      name.current.className = "";
    }
  };

  return (
    <>
      <div className="form-container">
        <div>
          <label>Username</label>
          <input type="text" placeholder="Name" ref={name}></input>
        </div>

        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" ref={email}></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Password" ref={password}></input>
        </div>
        <button type="submit" onClick={clickHandler}>
          Submit
        </button>
      </div>
      {isError && (
        <p className="error-text">
          Please enter the correct {errorField} value
        </p>
      )}
    </>
  );
}

export default Form;
