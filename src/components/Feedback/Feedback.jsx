export default function Feedback({clicksNumber, totalClicks, positiveClicks } ) {
  return (
    <div>
          <p>Good: {clicksNumber.good}</p>
          <p>Neutral: {clicksNumber.neutral}</p>
      <p>Bad: {clicksNumber.bad}</p>
      <p>Total: {totalClicks}</p>
      <p>Positive: {positiveClicks}%</p>
    </div>
  );
}
