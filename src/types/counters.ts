export interface countersState {
    counters: {
        id: string;
        count: number;
    }[];
}
export enum countersActionTypes {
    ADD_COUNTER = 'ADD_COUNTER',
    REMOVE_COUNTER = 'REMOVE_COUNTER',
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
    DECREMENT_COUNTER = 'DECREMENT_COUNTER',
    INCREMENT_EVERY_FOURTH_COUNTER = 'INCREMENT_EVERY_FOURTH_COUNTER'
}

interface addCounterAction {
    type: countersActionTypes.ADD_COUNTER
}
interface removeCounterAction {
    type: countersActionTypes.REMOVE_COUNTER;
    payload: number;
}
interface incrementCounterAction {
    type: countersActionTypes.INCREMENT_COUNTER;
    payload: number;
}
interface decrementCounterAction {
    type: countersActionTypes.DECREMENT_COUNTER;
    payload: number;
}
interface incrementEveryFourthCounterAction {
    type: countersActionTypes.INCREMENT_EVERY_FOURTH_COUNTER;
}

export type countersAction =
    addCounterAction
    | removeCounterAction
    | incrementCounterAction
    | decrementCounterAction
    | incrementEveryFourthCounterAction