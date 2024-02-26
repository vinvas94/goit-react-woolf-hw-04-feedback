import React from 'react';
import './Feedback.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="button-list">
      {options.map(option => (
        <button
          className="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
