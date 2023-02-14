import React, { PureComponent } from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li
            className={
              type === "default" ? css(styles.default) : css(styles.urgent)
            }
            onClick={() => markAsRead(id)}
            data-notification-type={type}
          >
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            onClick={() => markAsRead(id)}
            className={css(styles.urgent)}
            data-urgent
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty");
  },
  id: 0,
};

export default NotificationItem;
