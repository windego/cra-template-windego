import React, { useState } from 'react';
import reduxImg from '@assets/logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import WaterMark from '@components/WaterMark';
// import { selectUserInfo } from '@src/store/modules/userInfo.module';

import { Button } from 'antd';
import styles from './styles.scss';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counter.module';

function App() {
  const count = useSelector(selectCount);
  // const all = useSelector(selectUserInfo);

  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className={styles.container}>
      <WaterMark />
      <Button>sss</Button>
      <header className={styles.header}>
        <img src={reduxImg} className={styles.logo} alt="logo" />
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          >
            Add Async
          </button>
        </div>
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={styles.link}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,
          <span> and </span>
          <a
            className={styles.link}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
