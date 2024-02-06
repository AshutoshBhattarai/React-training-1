import {
  increment,
  resetTimer,
  selectTimerValue,
  toggleTimer
} from 'feature/countdownTimer/timerSlice';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { useEffect } from 'react';

const CountDownTimer2 = () => {
  const { timer, flag } = useAppSelector(selectTimerValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let timerInterval: NodeJS.Timeout | undefined;

    if (flag && timer >= 0) {
      timerInterval = setInterval(() => {
        dispatch(increment());
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [flag, timer, dispatch]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-10">
      <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        {/* <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': timer }}></span>
          </span>
          days
        </div> */}
        <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': Math.floor(timer / (60 * 60)) }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': Math.floor(timer / 60) }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': timer % 60 }}></span>
          </span>
          sec
        </div>
      </div>

      <div className="flex justify-center gap-2 p-4">
        <button
          className={
            flag
              ? 'mb-2 me-2 rounded-lg border border-red-700 px-5 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900'
              : 'mb-2 me-2 rounded-lg border border-green-700 px-5 py-2.5 text-center text-sm font-medium text-green-700 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800'
          }
          onClick={() => dispatch(toggleTimer())}
        >
          {flag ? 'Stop' : 'Start'}
        </button>
        <button
          className="mb-2 me-2 rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          onClick={() => dispatch(resetTimer())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountDownTimer2;
