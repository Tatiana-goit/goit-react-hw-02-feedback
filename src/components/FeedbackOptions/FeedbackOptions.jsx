import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
      <>
    <div>
      {options.map(option => (
        <button className={s.button}
          type="button"
          key={option}
          name={option}
          value={option}
          onClick={onLeaveFeedback}
        >
            {option}
        </button>

      ))}
    </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
