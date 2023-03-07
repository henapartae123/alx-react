import React, { Component } from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { Map } from "immutable";
import * as notifActions from "../actions/notificationActionCreators";
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";

class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return (
      <React.Fragment>
        {!this.props.displayDrawer ? (
          <div
            className={css(styles.menuItem)}
            onClick={(e) => {
              this.props.handleDisplayDrawer();
            }}
          >
            <p>Your notifications</p>
          </div>
        ) : (
          <div className={css(styles.Notifications)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={(e) => {
                console.log("Close button has been clicked");
                this.props.handleHideDrawer();
              }}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {this.props.listNotifications.length != 0 ? (
              <div>
                <p>Here is the list of notifications</p>
                <button
                  type="button"
                  className={css(styles.filterButton)}
                  id="buttonFilterUrgent"
                  onClick={() => {
                    setNotificationFilter("URGENT");
                  }}
                >
                  ❗❗
                </button>
                <button
                  type="button"
                  className={css(styles.filterButton)}
                  id="buttonFilterDefault"
                  onClick={() => {
                    setNotificationFilter("DEFAULT");
                  }}
                >
                  💠
                </button>
              </div>
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
                    markAsRead={this.props.markNotificationAsRead}
                    id={val.id}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const opacityAnimation = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounceAnimation = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};

const styles = StyleSheet.create({
  Notifications: {
    border: "2px dashed red",
    position: "relative",
    top: "1.8em",
    margin: "0 0 20px",
    width: "100%",
    right: "0",
    zIndex: "100",

    "@media (max-width: 575px)": {
      position: "relative",
      height: "100vh",
      border: "none",
      fontSize: "20px",
      padding: "0",
    },
  },

  menuItem: {
    textAlign: "right",
    position: "relative",
    zIndex: 100,
    ":hover": {
      cursor: "pointer",
      animationName: [opacityAnimation, bounceAnimation],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },
  ul: {
    "@media (max-width: 900px)": {
      padding: 0,
    },
  },
  button: {
    "@media (max-width: 900px)": {
      position: "relative",
      float: "right",
    },
  },

  '[data-notification-type="default"]': {
    color: "blue",
  },

  "[data-urgent]": {
    color: "red",
  },

  '[data-notification-type="urgent"]': {
    color: "red",
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
  setNotificationFilter: () => {},
};

function mapStateToProps(state) {
  const unreadNotificationsByType = getUnreadNotificationsByType(state);
  return {
    listNotifications: unreadNotificationsByType,
  };
}

const mapDispatchToProps = {
  fetchNotifications: notifActions.fetchNotifications,
  markNotificationAsRead: notifActions.markAsRead,
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
