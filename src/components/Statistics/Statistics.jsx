import PropTypes from 'prop-types'
import css from './Statistics.module.css'

export default function Statistics({ good, neutral, bad, total, positivePercentage}) {
  return (
    <div>
      <p className={css.caption}>Good: {good}</p>
      <p className={css.caption}>Neutral: {neutral}</p>
      <p className={css.caption}>Bad: {bad}</p>
      <p className={css.caption}>Total: {total}</p>
      <p className={css.caption}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};