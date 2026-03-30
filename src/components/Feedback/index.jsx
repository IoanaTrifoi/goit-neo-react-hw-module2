import Notification from '../Notification';
import styles from './index.module.css';

const Feedback = props => {
  const { good, neutral, bad, totalFeedback } = props;

  if (totalFeedback === 0) {
    return <Notification />;
  }

  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <div className={styles.feedback}>
      <p className={styles.text}>Good: {good}</p>
      <p className={styles.text}>Neutral: {neutral}</p>
      <p className={styles.text}>Bad: {bad}</p>
      <p className={styles.text}>Total: {totalFeedback}</p>
      <p className={styles.text}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
