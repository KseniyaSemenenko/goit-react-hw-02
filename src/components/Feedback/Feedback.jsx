export default function Feedback({clicksNumber}) {
  return (
    <div>
          <p>Good: {clicksNumber.good}</p>
          <p>Neutral: {clicksNumber.neutral}</p>
          <p>Bad: {clicksNumber.bad}</p>
    </div>
  );
}
