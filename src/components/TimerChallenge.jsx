import { useState } from "react";

function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost !</p>}
      <p className="challenge-time">
        {targetTime} Second{targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={handleStart}>
        {timerStarted ? "Stop" : "Start"} Challenge
      </button>
      <p> {timerStarted ? "Time is running..." : "Timer inactive"} </p>
    </section>
  );
}

export default TimerChallenge;
