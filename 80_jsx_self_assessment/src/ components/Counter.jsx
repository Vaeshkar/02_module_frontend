import { useState } from 'react';

const Counter = () => {
  // TODO: Create a piece of state and initialize it to 0
  // TODO: Render current value
  // TODO: Add "Increment" button to increase count by 1
  // TODO: Add "Decrement" button to decrease count by 1
  // TODO: Add "Reset" button to reset count to 0
  // TODO: Add "Change sign" button to toggle between positive and negative count

  //! Updated version
  // TODO: Use the useState hook to create a `count` state variable, initialized to 0
  // TODO: Display the current value of `count` inside a <p> element
  // TODO: Add a button labeled “Increment” that increases `count` by 1 when clicked
  // TODO: Add a button labeled “Decrement” that decreases `count` by 1 when clicked
  // TODO: Add a button labeled “Reset” that sets `count` back to 0
  // TODO: Add a button labeled “Change sign” that multiplies `count` by -1

  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);
  const toggleSign = () => setCount(count * -1);

  return (
    <>
      <div>
        <div>Count: {count}</div>
        <div>
          <button onClick={increaseCount}>Increment</button>
          /
          <button onClick={decreaseCount}>Decrement</button>
        </div>
        <div>
          <button onClick={resetCount}>Reset</button>
          /
          <button onClick={toggleSign}>Change sign</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
