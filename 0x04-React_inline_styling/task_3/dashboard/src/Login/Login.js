import React from "react";
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            name="email"
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            name="password"
          ></input>
          <button className={css(styles.btn)}>OK</button>
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
