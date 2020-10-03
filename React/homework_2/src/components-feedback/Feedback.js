import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./section";
import Statistics from "./Statistics";
import Notification from "./Notification";

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddedFeedback = (e) => {
    const buttonName = e.target.value;
    this.setState({
      [buttonName]: this.state[buttonName] + 1,
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const totalValue = values.reduce((acc, item) => {
      acc += item;
      return acc;
    }, 0);
    return totalValue;
  };

  countPositiveFeedbackPercentage = (total) => {
    const goodVoices = this.state.good;
    let percentageValue = 0;
    if (goodVoices || total !== 0) {
      percentageValue = Math.floor((goodVoices / total) * 100);
    }
    return percentageValue;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions addFeedback={this.handleAddedFeedback} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
