import React, { useState } from "react";
import { Heading, Input, Button, ButtonGroup, border } from "@chakra-ui/react";

const Stopwatch = () => {
  const [timerId, setTimerId] = useState(null);
  const [watch, setWatch] = useState(0);
  const [toggle, setToggle] = useState(true);

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  const reset = () => {
    clearInterval(timerId);
    setWatch(0);
    setTimerId(null);
    if (toggle === false) {
      setToggle(true);
    }
  };

  const handleClick = () => {
    if (toggle === true) {
      if (!timerId) {
        let id = setInterval(() => {
          setWatch((prev) => prev + 10);
        }, 10);
        setTimerId(id);
        setToggle(false);
      }
    } else {
      clearInterval(timerId);
      setTimerId(null);
      setToggle(true);
    }
  };
  return (
    <div>
      <Heading>Stopwatch</Heading>
      <br />
      <Heading>{msToTime(watch)}</Heading>
      <br />
      <div
        style={{
          display: "flex",
          gap: "20px",
          margin: "auto",
          width: "fit-content",
        }}
      >
        <Button colorScheme="red" onClick={handleClick}>
          {toggle ? "Start" : "Pause"}
        </Button>
        <Button colorScheme="red" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Stopwatch;
