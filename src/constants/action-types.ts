
export enum CounterActionTypes {
  INCREASE = '@@counter/INCREASE',
  DECREASE = '@@counter/DECREASE',
}

export interface CounterState {
    count: number;
  }
  