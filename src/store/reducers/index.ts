import { ActionType } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { CounterActionTypes, CounterState } from '../../constants/action-types';
import  { counterReducer } from './counterReducer';

// The top-level state object
export interface ApplicationState {
    readonly counter: CounterState 
}

export type CounterAction = ActionType<typeof CounterActionTypes>

export const appReducer = () => combineReducers({
    counter: counterReducer
});
 