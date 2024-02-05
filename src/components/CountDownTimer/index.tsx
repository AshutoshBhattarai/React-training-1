import { useEffect, useState } from 'react';

const START_TIME = 300;

export const CountDownTimer = () => {
  const [timer, setTimer] = useState(START_TIME);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout | undefined;

    if (flag && timer > 0) {
      timerInterval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [flag, timer]);

  const toggleTimer = () => {
    setFlag(!flag);
  };

  const resetTimer = () => {
    setFlag(false);

    setTimer(START_TIME);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-10">
      <h1 className="basis-full text-5xl">CountDown Timer</h1>
      <section>
        <div>
          <p className="text-3xl">
            {Math.floor(timer / 60)} minute :{' '}
            {(timer % 60).toString().padStart(2, '0')}seconds
          </p>
        </div>
        <div className="flex justify-center gap-2 p-4">
          <button
            className={
              flag
                ? 'mb-2 me-2 rounded-lg border border-red-700 px-5 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900'
                : 'mb-2 me-2 rounded-lg border border-green-700 px-5 py-2.5 text-center text-sm font-medium text-green-700 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800'
            }
            onClick={toggleTimer}
          >
            {flag ? 'Stop' : 'Start'}
          </button>
          <button
            className="mb-2 me-2 rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </section>
    </div>
  );
};
