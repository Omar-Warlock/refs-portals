import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
//let timer; // global var cause overwritten pointers
function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const modal = useRef();

  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      modal.current.showModal();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal targetTime={targetTime} result={"lost"} modal={modal} />

      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You Lost !</p>}
        <p className="challenge-time">
          {targetTime} Second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
        <p> {timerStarted ? "Time is running..." : "Timer inactive"} </p>
      </section>
    </>
  );
}

export default TimerChallenge;
