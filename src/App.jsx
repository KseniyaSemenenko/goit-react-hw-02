import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  const typeReviews = {
	good: 0,
	neutral: 0,
	bad: 0
}
console.log(typeReviews)
  return <>
  <Description />
    <Options name="good"/>
    <Options name="neutral"/>
    <Options name="bad"/>
    <Feedback name="good" value="3"/>
    <Feedback name="neutral"/>
    <Feedback name="bad"/>
  </>
}

export default App