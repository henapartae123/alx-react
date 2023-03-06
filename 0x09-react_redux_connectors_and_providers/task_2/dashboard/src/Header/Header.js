import React from "react";
import logo from "../assets/HolbertonLogo.jpg";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";

function Header() {
  const { user, logout } = props;
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
              <a href="#" onClick={logout}>
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

export function mapStateToProps(state) {
  return {
    user: state.get("user"),
  };
}

export const mapDispatchToProps = {
  logout: UiAC.logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
