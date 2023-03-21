import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const isCounterInvisible = useSelector(
    (state) => state.counter.isCounterInvisible
  );
  const dispatchFunction = useDispatch();

  const incrementHandler = () => {
    dispatchFunction(counterActions.increment());
  };
  const increasetHandler = () => {
    dispatchFunction(counterActions.increase(10));
  };
  const decrementHandler = () => {
    dispatchFunction(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatchFunction(counterActions.setCounterVisible());
  };

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      {!isCounterInvisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increasetHandler}>+10</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
    </main>
  );
};

export default Counter;
