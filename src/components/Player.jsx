import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  function handleChange(e) {
    setSubmitted(false);
    setEnteredPlayerName(e.target.value);
  }
  const [submitted, setSubmitted] = useState(false);
  function handleClick() {
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
