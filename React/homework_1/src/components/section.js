import React from "react";
import propTypes from "prop-types";
import styles from "../styles-module/section.module.css";
export default function Section({ title, children }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: propTypes.string,
};
