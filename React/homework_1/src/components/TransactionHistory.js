import React from "react";
import propTypes from "prop-types";
import styles from "../styles-module/TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map(({ type, amount, currency, id }) => (
        <tbody key={id}>
          <tr>
            <td> {type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ).isRequired,
};
