import React from "react";
import Section from "./section";
import propTypes from "prop-types";
import styles from "../styles-module/statistics.module.css";

export default function Statistics({ title, stats }) {
  return (
    <Section title={title}>
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={styles.item} key={id}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
};
