import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
  return (
    <div className="typing-text">
      <Typewriter
        options={{
          strings: [
            "Developer",
            "Frontend Developer",
            "Backend Developer",
            "Data Analyst",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Typing;
