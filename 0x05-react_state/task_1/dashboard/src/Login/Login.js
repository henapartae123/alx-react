import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    console.log("logged in");
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email != "" && password != "") {
      setEnableSubmit(true);
    } else {
      if (enableSubmit != false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          ></input>
          <input
            className={css(styles.btn)}
            type="submit"
            value="Ok"
            disabled={!enableSubmit}
          />
        </form>
      </div>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "1em",
    borderBottom: "3px solid #e0354b",
    height: "45%",
    "@media (max-width: 600px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  input: {
    margin: "10px",
  },
  btn: {
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
});

export default Login;
