import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
//let timer; // global var cause overwritten pointers
function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const modal = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    modal.current.show();
  }

  function handleReset(e) {
    e.preventDefault();
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((pervTime) => pervTime - 10);
    }, 10);
  }

  function handleStop() {
    modal.current.show();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        targetTime={targetTime}
        modal={modal}
        remainingTime={timeRemaining}
        handleReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} Second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timeIsActive ? handleStop : handleStart}>
          {timeIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p> {timeIsActive ? "Time is running..." : "Timer inactive"} </p>
      </section>
    </>
  );
}

export default TimerChallenge;
