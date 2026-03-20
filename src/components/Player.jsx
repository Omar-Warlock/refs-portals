import { useRef, useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  // function handleChange(e) {
  //   setSubmitted;
  //   setEnteredPlayerName(e.target.value);
  // }
  // const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef();
  function handleClick() {
    setEnteredPlayerName(inputRef.current.value);
    inputRef.current.value = "";
  }

  // When Ref changes the component function does not re rendered ,
  // the state cause the component function to re execute or rerendered
  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
