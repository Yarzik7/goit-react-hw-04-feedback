import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.feedback}>
      {options.map(feedback => (
        <button
          type='button'
          key={feedback}
          className={css.button}
          onClick={onLeaveFeedback}
          data-feedback={feedback}
        >
          {feedback}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
