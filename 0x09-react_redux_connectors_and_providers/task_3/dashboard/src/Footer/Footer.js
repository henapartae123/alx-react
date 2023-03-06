import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";
import { connect } from "react-redux";

const Footer = (props) => {
  const { user } = props.user;
  return (
    <div className="App-footer">
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
};
export function mapStateToProps(state) {
  return {
    user: state.get("user"),
  };
}

export default connect(mapStateToProps)(Footer);
