import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from "react";
import "./timerBlock.scss";

export default function TimerBlock() {
  const [time, settime] = useState(10);
  useEffect(() => {
    if (time > 0)
      setTimeout(() => {
        settime(time - 1);
      }, 1000);
  }, [time]);
  return (
    <div id="timer-block">
      {/* {time == 0 ? <h2>Time run out!</h2> : <h2>{time} seconds</h2>} */}
      <h2>{time} seconds</h2>
      {time == 0 && <h2>Time run out!</h2>}
    </div>
  );
}
