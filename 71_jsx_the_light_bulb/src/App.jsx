import { useState } from 'react'
import './style.css';

// probs LightBulb
const LightBulb = ({ isOn, onClick }) => {
  return (
    <div className={isOn ? "container night" : "container"} onClick={onClick}>
      <div className="bulb-light">
        <div id="light" />
        <div id="bulb">
          <div className="bulb-top">
            <div className="reflection" />
          </div>
          <div className="bulb-middle-1" />
          <div className="bulb-middle-2" />
          <div className="bulb-middle-3" />
          <div className="bulb-bottom" />
        </div>

        <div id="base">
          <div className="screw-top" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-c" />
          <div className="screw-d" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  // state setup
  const [isOn, setisOn] = useState(false);
  const [clickCount, setclickCount] = useState(0);

  // toggle handlers functions
  const handleToggle = () => {
    if (!isOn && clickCount >= 10) {
      alert("Locked! Max actiations reached.");
      return;
    }

    setisOn((prev) => !prev);

    if (!isOn) {
      setclickCount((prev) => prev + 1);
    }
  }

  // Reset button
  const handleReset = () => {
    setclickCount(0);
    setisOn(false);
  }

  // Button Label
  const buttonLabel = clickCount >= 10 ? 'Locked' : isOn ? 'Turn off' : 'Turn on';

  return (
    <>
      <section>
        <LightBulb isOn={isOn} onClick={handleToggle} />
        <div className='button-container'>
          <button onClick={handleToggle}>{buttonLabel}</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </section>
    </>
  );
};

export default App;

