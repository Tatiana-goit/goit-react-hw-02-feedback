function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
      <>
    <div>
      {options.map(option => (
        <button
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

export default FeedbackOptions;
