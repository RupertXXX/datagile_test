import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { decrementCounterCreateAction, incrementCounterCreateAction, removeCounterCreateAction } from '../../../store/reducers/countersReducer';

interface counterProps {
    count: number;
    index: number;
}

const Counter: FC<counterProps> = ({count, index}) => {

    const dispatch = useDispatch();
    const increment = () => {
        dispatch(incrementCounterCreateAction(index))
    }
    const decrement = () => {
        dispatch(decrementCounterCreateAction(index))
    }
    const removeCounter = () => {
        dispatch(removeCounterCreateAction(index))
    }

    return (
      <div>
        {(index+1) % 4 !== 0 && <button onClick={increment}>+</button>}
        {count}
        {(index+1) % 4 !== 0 && <button onClick={decrement}>-</button>}
        <button onClick={removeCounter}>Удалить счётчик</button>
      </div>
    );
  }

export default Counter;
  