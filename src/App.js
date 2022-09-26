import useCounterStore from "./store/counterStore";
import {useCallback} from 'react'

function App() {
  const setState = (state) => ({count: state.count, increaseCount:state.increaseCount, removeCount:state.removeCount})
  const {count, increaseCount, removeCount} = useCounterStore(useCallback(setState))

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={increaseCount}>+</button>
      <button onClick={removeCount}>remove</button>
    </div>
  );
}

export default App;
