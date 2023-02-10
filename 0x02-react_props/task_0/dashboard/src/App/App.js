import React from "react";
import ".App/App.css";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <body className="App-body">
          <Login />
        </body>

        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
      ;
    </React.Fragment>
  );
}

export default App;
