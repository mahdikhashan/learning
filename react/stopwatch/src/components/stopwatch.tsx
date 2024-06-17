import { useEffect, useState } from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Timer } from "../utils/timer";
import { Button } from "./button";
import { Card } from "./card";

import FullscreenIcon from "../assets/fullscreen.png";

const StopWatchUnitViewer = styled.span`
  color: black;
  font-size: 32px;
  font-weight: normal;
`;

const StopWatchMillisecondsViewer = styled.span`
  width: 20%;
  color: black;
  font-size: 28px;
  font-weight: bold;
`;

const StopWatchSecondsViewer = styled.span`
  width: 20%;
  color: black;
  font-size: 64px;
  font-weight: bold;
`;

const StopWatchMinutesViewer = styled.span`
  width: 20%;
  color: black;
  font-size: 64px;
  font-weight: bold;
`;

const StopWatchHoursViewer = styled.span`
  width: 20%;
  color: black;
  font-size: 64px;
  font-weight: bold;
`;

const StopWatchViewerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  width: 100%;
  height: 15vh;
  text-align: "center";
`;

const stopWatchController = css`
  display: flex;
  flex-direction: row;
  gap: 1.5em;
  justify-content: space-between;
  padding: 1.5em 0 0 0;
`;

const StopWatchController = styled(Card)`
  ${stopWatchController}
`;

type StopWatchViewerProps = {
  timer: Timer;
};

function StopWatchViewer(props: StopWatchViewerProps) {
  const { timer } = props;

  return (
    <StopWatchViewerContainer>
      {timer.hours() !== 0 && (
        <StopWatchHoursViewer>
          {timer.hours()}
          <StopWatchUnitViewer>{"h"}</StopWatchUnitViewer>
        </StopWatchHoursViewer>
      )}
      {timer.minutes() !== 0 && (
        <StopWatchMinutesViewer>
          {timer.minutes()}
          <StopWatchUnitViewer>{"m"}</StopWatchUnitViewer>
        </StopWatchMinutesViewer>
      )}
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

export const StopWatchTitle = styled.span`
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.9;
`;

type StopWatchProps = {
  timer: Timer;
  status: string;
  onStartHandler: () => void;
  onResetHandler: () => void;
};

export function StopWatch(props: StopWatchProps) {
  const { timer, status, onStartHandler, onResetHandler } = props;

  const [isFullscreen, setIsFullscreen] = useState(false);

  const requestFullscreen = () => document.body.requestFullscreen();

  const exitFullscreen = () => document.exitFullscreen();

  const toggleFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      requestFullscreen();
    }
  };

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, [isFullscreen]);

  return (
    <div>
      <StopWatchViewer timer={timer} />
      <StopWatchController>
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "1em",
        }}>
          <Button primary onClick={onStartHandler}>
            {status === "idle" ? "START" : "PAUSE"}
          </Button>
          <Button onClick={onResetHandler}>{"RESET"}</Button>
        </div>
        <Button onClick={toggleFullscreen}>
          <img src={FullscreenIcon} alt="fullscreen" />
        </Button>
      </StopWatchController>
    </div>
  );
}
