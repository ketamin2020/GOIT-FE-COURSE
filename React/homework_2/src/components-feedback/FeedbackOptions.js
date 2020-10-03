import React from "react";
import PropTypes from "prop-types";

function FeedbackOptions({ addFeedback }) {
  return (
    <div>
      <button value="good" onClick={addFeedback}>
        Good
      </button>
      <button value="neutral" onClick={addFeedback}>
        Neutral
      </button>
      <button value="bad" onClick={addFeedback}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  addFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
