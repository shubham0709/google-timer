import React, { useEffect, useState } from "react";
import { Heading, Input, Button, ButtonGroup } from "@chakra-ui/react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [value, setValue] = useState(0);
  const [toggle, setToggle] = useState(true);  

  useEffect(() => {
    let id = setInterval(() => {
      if (timer < 1) {
        clearInterval(id);
      } else {
        setTimer((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [timer]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    setTimer(value);
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
      setTimer(0)
    }
  };

  return (
    <div>
      <Heading>Timer</Heading>
      <br />
      <Heading as="h5" size="xl" style={{ color: "red" }}>
        Your Entered Time In Seconds
      </Heading>
      <Input
        onChange={handleChange}
        color="teal"
        placeholder="Enter time in seconds"
        _placeholder={{ color: "teal" }}
        textAlign="center"
        fontSize="xl"
      ></Input>
      <br />
      <br />
      <Heading>{timer}</Heading>
      <br />
      <Button colorScheme="red" onClick={handleClick}>
        {toggle === true ? "Start" : "Reset"}
      </Button>
    </div>
  );
};

export default Timer;
