import styles from './index.module.css';

const Options = props => {
  const { onLeaveFeedback, totalFeedback } = props;

  return (
    <div className={styles.options}>
      <button className={styles.button} onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button className={styles.button} onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button className={styles.button} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.button} onClick={() => onLeaveFeedback('reset')}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
