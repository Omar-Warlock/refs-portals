import { useEffect } from "react";

function ResultModal({ result, targetTime, modal }) {
  // useEffect(()=>{
  //   modal.current.open()
  // },[])
  return (
    <dialog className="result-modal" ref={modal}>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}

export default ResultModal;
