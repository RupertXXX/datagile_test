import { Iaction } from "../../interfaces";

const ADD_COUNTER = 'ADD_COUNTER';
const REMOVE_COUNTER = 'REMOVE_COUNTER';
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
const INCREMENT_EVERY_FOURTH_COUNTER = 'INCREMENT_EVERY_FOURTH_COUNTER';

interface countersState {
    counters: {
        id: string;
        count: number;
    }[];
}
let initialState: countersState = {
    counters: [],
};

const countersReducer = (state = initialState, action: Iaction): countersState => {
    switch (action.type) {
        case ADD_COUNTER:
            let timeNow = new Date();
            return {
                ...state,
                counters: [...state.counters, {
                    id: `${state.counters.length}_${timeNow.getTime()}`,
                    count: state.counters.reduce((sum, el) => sum + el.count, 0),
                }],
            }
        case REMOVE_COUNTER:
            return {
                ...state,
                counters: state.counters.filter((el, i) => i !== action.payload),
            }
        case INCREMENT_COUNTER:
            return {
                ...state,
                counters: state.counters.map((el, i) => action.payload === i ? {...el, count: el.count + 1} : el),
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                counters: state.counters.map((el, i) => action.payload === i ? {...el, count: el.count - 1} : el),
            }
        case INCREMENT_EVERY_FOURTH_COUNTER:
            return {
                ...state,
                counters: state.counters.map((el, i) => (i+1) % 4 === 0 ? {...el, count: el.count + 1} : el),
            }
        default:
            return state;
    }
}

export const addCounterCreateAction = () => ({type: 'ADD_COUNTER'});
export const removeCounterCreateAction = (index: number) => ({type: 'REMOVE_COUNTER', payload: index});
export const incrementCounterCreateAction = (index: number) => ({type: 'INCREMENT_COUNTER', payload: index});
export const decrementCounterCreateAction = (index: number) => ({type: 'DECREMENT_COUNTER', payload: index});
export const incrementEveryFourthCreateAction = () => ({type: 'INCREMENT_EVERY_FOURTH_COUNTER'});

export default countersReducer;