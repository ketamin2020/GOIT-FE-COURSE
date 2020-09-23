import React from "react";
import propTypes from "prop-types";
import styles from "../styles-module/profile.module.css";

export default function Profile({ user }) {
  const { avatar, name, tag, location, stats } = user;

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}> @ {tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsList}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.statsList}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.statsList}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  user: propTypes.exact({
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    stats: propTypes.exact({
      followers: propTypes.number.isRequired,
      views: propTypes.number.isRequired,
      likes: propTypes.number.isRequired,
    }),
  }),
};
