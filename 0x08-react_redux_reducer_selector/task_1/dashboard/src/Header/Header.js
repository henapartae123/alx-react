import React, { useContext } from "react";
import logo from "../assets/HolbertonLogo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";

function Header() {
  const { user, logOut } = useContext(AppContext);
  return (
    <>
      <div className={css(styles["App-header"])}>
        <img className={css(styles.img)} src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      {user.isLoggedIn && (
        <section id="logoutSection">
          <h2>
            Welcome<strong> {user.email} </strong>
            <em>
              <a href="#" onClick={logOut}>
                (logout)
              </a>
            </em>
          </h2>
        </section>
      )}
    </>
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
