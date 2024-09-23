import { useState, useEffect } from 'react';

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
  
  useEffect(() => {
    const savedClicks = JSON.parse(localStorage.getItem('saved-clicks'));
    if (savedClicks) {
      setClicks(savedClicks);
    };
  }, []);
  useEffect(() => {
    localStorage.setItem('saved-clicks', JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = feedbackType => {
    setClicks(prevClicks => ({
      
      ...prevClicks,

      [feedbackType]: prevClicks[feedbackType] + 1,
    }));
       }
  const clicksReset = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.removeItem('saved-clicks')
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

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
        <Feedback
          clicksNumber={clicks}
          totalClicks={totalFeedback}
          positiveClicks={positiveFeedback}
        />
      )}
    </>
  );
};

export default App;
