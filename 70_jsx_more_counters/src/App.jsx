import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [count1, setCounter1] = useState(0);
  const [count2, setCounter2] = useState(10);
  const [count3, setCounter3] = useState(20);

  return (
    <>
      <section>
        <h1>More Counters</h1>
        <Counter count={count1} setCounter={setCounter1} />
        <Counter count={count2} setCounter={setCounter2} incrementBy={10} />
        <Counter count={count3} setCounter={setCounter3} incrementBy={20} />
      </section>
    </>
  )
}

export default App
