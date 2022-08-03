import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { addCounterCreateAction, incrementEveryFourthCreateAction } from "../../store/reducers/countersReducer";
import Counter from "./counter/Counter";

let intervalId: number | null = null;

const Counters = () => {

    const state = useAppSelector(state => state.counters);
    const dispatch = useDispatch();

    const addCounter = () => {
        dispatch(addCounterCreateAction());
    }
    const incrementEveryFourth = () => {
        dispatch(incrementEveryFourthCreateAction());
    }
    useEffect(() => {
        if (state.counters.length > 3) {
            if (intervalId === null) {
                intervalId = window.setInterval(() => {
                    incrementEveryFourth();
                }, 1000);
            }
        } else {
            if (intervalId !== null) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }
    }, [state]);
    useEffect(() => {
        return () => {
            if (intervalId !== null) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }
    }, [])

    return (
        <div>
            <button onClick={addCounter}>Добавить счётчик</button>
            {state.counters.map((el, i) => {
                return (
                    <Counter key={el.id} count={el.count} index={i} />
                );
            })}
        </div>
    );
  }

export default Counters;
  