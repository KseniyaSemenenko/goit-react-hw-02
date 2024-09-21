import { useState } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setClicks(prevClicks => ({
      ...prevClicks,

      [feedbackType]: prevClicks[feedbackType] + 1,
    }));
  };
  const clicksReset = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  return (
    <>
      <Description />
      <Options
        onClickButton={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={clicksReset}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback clicksNumber={clicks} />
      )}
    </>
  );
};

export default App;
