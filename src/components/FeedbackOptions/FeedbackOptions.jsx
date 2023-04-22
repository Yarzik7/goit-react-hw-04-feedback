export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(feedback => (
        <button key={feedback} onClick={onLeaveFeedback} data-feedback={feedback}>{feedback.replace(/^[a-z]/, char => char.toUpperCase())}</button>
      ))}
    </div>
  );
}
