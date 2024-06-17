import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Timer } from "../utils/timer";
import { Button } from "./button";
import { Card } from "./card";

const StopWatchUnitViewer = styled.span`
  color: black;
  font-size: 32px;
  font-weight: normal;
`;

const StopWatchMillisecondsViewer = styled.span`
  display: table-cell;
  width: 25%;
  color: black;
  font-size: 28px;
  font-weight: bold;
`;

const StopWatchSecondsViewer = styled.span`
  display: table-cell;
  width: 25%;
  color: black;
  font-size: 64px;
  font-weight: bold;
`;

const StopWatchMinutesViewer = styled.span`
  display: table-cell;
  width: 25%;
  color: black;
  font-size: 64px;
  font-weight: bold;
`;

const StopWatchHoursViewer = styled.span`
  display: table-cell;
  width: 25%;
  color: black;
  font-size: 64px;
  font-weight: bold;
`;

const StopWatchViewerContainer = styled.div`
  display: table;
  width: 100%;
  text-align: "center";
`;

const stopWatchController = css`
  display: flex;
  flex-direction: row;
  padding: 0;
  justify-content: space-around;
`

const StopWatchController = styled(Card)`
  ${stopWatchController}
`

type StopWatchViewerProps = {
  timer: Timer;
};

function StopWatchViewer(props: StopWatchViewerProps) {
  const { timer } = props;

  return (
    <StopWatchViewerContainer>
      <StopWatchHoursViewer>
        {timer.hours()}
        <StopWatchUnitViewer>{"h"}</StopWatchUnitViewer>
      </StopWatchHoursViewer>
      <StopWatchMinutesViewer>
        {timer.minutes()}
        <StopWatchUnitViewer>{"m"}</StopWatchUnitViewer>
      </StopWatchMinutesViewer>
      <StopWatchSecondsViewer>
        {timer.seconds()}
        <StopWatchUnitViewer>{"s"}</StopWatchUnitViewer>
      </StopWatchSecondsViewer>
      <StopWatchMillisecondsViewer>
        {timer.tenthOfMilliseconds()}
      </StopWatchMillisecondsViewer>
    </StopWatchViewerContainer>
  );
}

const TimerWatchTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.9;
`;

type TimerWatchProps = {
  timer: Timer;
  status: string;
  onStartHandler: () => void;
  onResetHandler: () => void;
};

export function TimerWatch(props: TimerWatchProps) {
  const { timer, status, onStartHandler, onResetHandler } = props;

  return (
    <div>
      <output>
        <StopWatchViewer timer={timer} />
      </output>
      <StopWatchController>
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "1em",
          padding: 0,
        }}>
          <Button primary onClick={onStartHandler}>
            {status === "idle" ? "START" : "PAUSE"}
          </Button>
          <Button onClick={onResetHandler}>{"RESET"}</Button>
        </div>
      </StopWatchController>
    </div>
  );
}


import { useState, useEffect } from "react";

export const TimerComponent = () => {
  const [initialTime, setInitialTime] = useState(300000); // 5 minutes in milliseconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(id);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 10;
        });
      }, 10);
      setIntervalId(id);
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setTimeRemaining(initialTime);
  };

  const timer = new Timer(timeRemaining)

  return (
    <div>
      <div>{timer.minutes()}:{timer.seconds()}:{timer.tenthOfMilliseconds()}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
