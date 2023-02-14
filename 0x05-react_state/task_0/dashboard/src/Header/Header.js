import React from "react";
import logo from "../assets/HolbertonLogo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <div className={css(styles["App-header"])}>
      <img className={css(styles.img)} src={logo} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}
const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },
});

export default Header;
