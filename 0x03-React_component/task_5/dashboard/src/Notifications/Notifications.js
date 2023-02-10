import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

class Notifications extends compoonent {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }
  render() {
    return (
      <React.Fragment>
        {displayDrawer ? (
          <div>
            <div className="menuItem">
              <p>Your notifications</p>
            </div>
            <div className="Notifications">
              <button
                style={{
                  color: "#3a3a3a",
                  fontWeight: "bold",
                  background: "none",
                  border: "none",
                  fontSize: "15px",
                  position: "absolute",
                  right: "2px",
                  top: "2px",
                  cursor: "pointer",
                }}
                aria-label="Close"
                onClick={console.log("Close button has been clicked")}
              >
                <img src={closeIcon} alt="closeIcon" width="10px" />
              </button>
              {this.props.listNotifications.length != 0 ? (
                <p>Here is the list of notifications</p>
              ) : null}
              <ul>
                {this.props.listNotifications.length == 0 ? (
                  <NotificationItem
                    type="default"
                    value="No new notification for now"
                  />
                ) : null}
                {this.props.listNotifications.map((val, idx) => {
                  return (
                    <NotificationItem
                      type={val.type}
                      value={val.value}
                      html={val.html}
                      key={val.id}
                      markAsRead={this.markAsRead}
                      id={val.id}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
