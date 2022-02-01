import { CounterActionTypes, CounterState } from '../../constants/action-types';
import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { counterActions } from '../actions/index';
 
export type CounterActions = ActionType<typeof counterActions>;

export const counterInitialState: CounterState = {
  count: 100,
 };

export const counterReducer: Reducer<CounterState, CounterActions> = (
  state = counterInitialState,
  action,
): CounterState => {
  switch (action.type) {
    case CounterActionTypes.INCREASE:
      return {
        ...state,
        count: state.count + 1
      };
    case CounterActionTypes.DECREASE:
      return {
        ...state,
        count: state.count - 1
      };
    default: 
      return state;
  }
};