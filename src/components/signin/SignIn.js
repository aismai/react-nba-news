import React, { Component } from "react";
import styles from "./SignIn.css";

class SignIn extends Component {
  state = {
    registerError: "",
    loading: false,
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placehodler: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placehodler: "Enter your password"
        },
        validation: {
          required: true,
          password: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  render() {
    return <div>SIGN IN</div>;
  }
}

export default SignIn;
