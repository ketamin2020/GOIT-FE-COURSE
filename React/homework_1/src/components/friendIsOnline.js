import React from "react";
import propTypes from "prop-types";
import styles from "../styles-module/friendIsOnline.module.css";
export default function FriendIsOnline({ IsOnline }) {
  return IsOnline ? (
    <span className={styles.online}></span>
  ) : (
    <span className={styles.status}></span>
  );
}

FriendIsOnline.propTypes = {
  IsOnline: propTypes.bool.isRequired,
};
