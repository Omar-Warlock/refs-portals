import { useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
function ResultModal({ targetTime, modal, remainingTime, handleReset }) {
  // useEffect(()=>{
  //   modal.current.open()
  // },[])
  const dialog = useRef();

  const formatTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  const userLost = remainingTime <= 0;

  useImperativeHandle(modal, () => {
    return {
      show: function () {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="result-modal" ref={dialog}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the timer with <strong>{formatTime} seconds left.</strong>
      </p>
      <form action="dialog">
        <button onSubmit={handleReset}>Close</button>
      </form>
    </dialog>,
    document.querySelector("#modal"),
  );
}

export default ResultModal;
