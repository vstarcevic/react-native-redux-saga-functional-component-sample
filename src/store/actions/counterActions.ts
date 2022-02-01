import { action } from 'typesafe-actions';
import { CounterActionTypes } from '../../constants/action-types';

export const increase = () => action(CounterActionTypes.INCREASE, {} );
export const decrease = () => action(CounterActionTypes.DECREASE, {} );
