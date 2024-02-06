import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface TimerState {
  timer: number;
  flag: boolean;
}
const initialState: TimerState = {
  timer: 0,
  flag: false
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    increment: (state) => {
      state.timer += 1;
    },
    decrement: (state) => {
      state.timer -= 1;
    },
    resetTimer: (state) => {
      state.timer = 0;
      state.flag = false;
    },
    toggleTimer: (state) => {
      state.flag = !state.flag;
    }
  }
});

export const { increment, resetTimer, toggleTimer } = timerSlice.actions;

export const selectTimerValue = (state: RootState) => state.timer;

export default timerSlice.reducer;
