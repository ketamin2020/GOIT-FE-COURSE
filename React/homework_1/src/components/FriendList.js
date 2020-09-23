import React from "react";
import propTypes from "prop-types";
import styles from "../styles-module/friendList.module.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.exact({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
    })
  ),
};
