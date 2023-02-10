import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <body className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </body>

        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
      ;
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
