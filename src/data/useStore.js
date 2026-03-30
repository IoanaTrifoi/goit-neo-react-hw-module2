import { useEffect } from 'react';
import { useState } from 'react';

const LOCAL_STORAGE_KEY = 'feedback-state';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const saveToLocalStorage = state => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
};

const loadFromLocalStorage = () => {
  const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedState) {
    try {
      return JSON.parse(savedState);
    } catch (error) {
      console.error('Error parsing saved state:', error);
    }
  }
  return initialState; // Return initial state if no saved state found
};

const useStore = () => {
  const [state, setState] = useState(loadFromLocalStorage());

  const totalFeedback = state.good + state.neutral + state.bad;

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      return setState(initialState);
    }

    setState(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  // Save state to localStorage before the page unloads
  useEffect(() => {
    function saveCallback() {
      saveToLocalStorage(state);
    }
    window.addEventListener('beforeunload', saveCallback);
    return () => {
      window.removeEventListener('beforeunload', saveCallback);
    };
  }, [state]);

  return {
    state,
    totalFeedback,
    updateFeedback,
  };
};

export default useStore;
