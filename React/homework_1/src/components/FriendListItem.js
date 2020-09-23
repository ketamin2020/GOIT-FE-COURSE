import React from "react";
import propTypes from "prop-types";
import styles from "../styles-module/friendListItem.module.css";
import FriendIsOnline from "./friendIsOnline";

export default function FriendListItem({ friends }) {
  return friends.map(({ id, avatar, name, isOnline }) => (
    <li className={styles.item} key={id}>
      <FriendIsOnline IsOnline={isOnline} />
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  ));
}

FriendListItem.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.exact({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
    })
  ),
};
