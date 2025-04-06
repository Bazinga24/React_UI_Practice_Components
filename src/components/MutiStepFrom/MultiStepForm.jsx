import React from "react";
import { useState } from "react";
import "./MultiStepForm.css";
function MultiStepForm() {
  const [isBackCount, setIsBackCount] = useState(0);
  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Dob: "",
    Password: "",
  });
  //console.log(isBackCount);
  const nextHandler = () => {
    if (!values.Name && isBackCount === 0) {
      alert("Please enter the name !");
      return;
    }
    if (!values.Email && isBackCount === 1) {
      alert("Please enter the Email !");
      return;
    }
    if (!values.Dob && isBackCount === 2) {
      alert("Please enter the Dob !");
      return;
    }
    if (!values.Password && isBackCount === 3) {
      alert("Please enter the password !");
      return;
    }

    setIsBackCount((prev) => prev + 1);
  };

  const backHandler = () => {
    setIsBackCount((prev) => prev - 1);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const submitHandler = () => {
    console.log(values);
    alert(
      `{Name: ${values.Name},Email: ${values.Email}, Dob: ${values.Dob}, Password:${values.Password}}`
    );
    setIsBackCount(0);
  };

  return (
    <>
      <div>
        {!isBackCount && (
          <div className="form-container">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              onChange={changeHandler}
              value={values.Name}
            />
            <button onClick={nextHandler}>Next</button>
          </div>
        )}
      </div>

      {isBackCount === 1 && (
        <>
          <button onClick={backHandler} className="back-button">
            Back
          </button>
          <div className="form-container">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="Email"
              onChange={changeHandler}
              value={values.Email}
            />
            <button onClick={nextHandler}>Next</button>
          </div>
        </>
      )}

      {isBackCount === 2 && (
        <>
          <button onClick={backHandler} className="back-button">
            Back
          </button>
          <div className="form-container">
            <input
              type="date"
              placeholder="mm/dd/yy"
              name="Dob"
              onChange={changeHandler}
              value={values.Dob}
            />
            <button onClick={nextHandler}>Next</button>
          </div>
        </>
      )}

      {isBackCount === 3 && (
        <>
          <button onClick={backHandler} className="back-button">
            Back
          </button>
          <div className="form-container">
            <label>Password</label>
            <input
              type="password"
              name="Password"
              onChange={changeHandler}
              value={values.Password}
            />
            <button onClick={submitHandler}>Submit</button>
          </div>
        </>
      )}
    </>
  );
}

export default MultiStepForm;
