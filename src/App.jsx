import './App.css';
import useStore from './data/useStore';
import Description from './components/Description';
import Feedback from './components/Feedback';
import Options from './components/Options';

function App() {
  const { state, totalFeedback, updateFeedback } = useStore();

  return (
    <>
      <Description />
      <Options onLeaveFeedback={updateFeedback} totalFeedback={totalFeedback} />
      <Feedback {...state} totalFeedback={totalFeedback} />
    </>
  );
}

export default App;
