/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./types/emotion.d.ts" />
/** @jsxImportSource @emotion/react */

import { useRef, useState } from "react";

import { Timer } from "./utils/timer";

import { StopWatch } from "./components/stopwatch";
import { StopWatchTitle } from "./components/stopwatch";
import { theme } from "./theme/theme";
import { TimerWatch } from "./components/timer";
import { TabContainer } from "./components/tab";
import { Tab } from "./components/tab";
import { TabHead } from "./components/tab-head";
import { TabItem } from "./components/tab-item";

import { TimerComponent } from "./components/timer";

import { useInterval } from "./hooks/use-interval";

import { css } from "@emotion/react";

import "./App.css";

import StopwatchIcon from "./assets/stopwatch-svg.svg";
import StopwatchIconWhite from "./assets/stopwatch-svg-white.svg";

import TimerIcon from "./assets/timer-svg.svg";
import TimerIconWhite from "./assets/timer-svg-white.svg";
import { TabBody } from "./components/tab-body";

function App() {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [pausedTime, setPausedTime] = useState(0);
  const [status, setStatus] = useState("idle");

  const startTimeRef = useRef<number | null>(null);

  const [tab, setTab] = useState<"timer" | "stopwatch">("timer");

  const timer = new Timer(timeElapsed);

  useInterval(
    () => {
      if (status === "running" && startTimeRef.current !== null) {
        const now = performance.now();
        const elapsedMilliseconds = now - startTimeRef.current;
        setTimeElapsed(Math.floor(elapsedMilliseconds));
      }
    },
    status === "running" ? 10 : null
  );

  const toggle = () => {
    if (status === "idle") {
      if (startTimeRef.current === null) {
        startTimeRef.current = performance.now();
      } else {
        startTimeRef.current = performance.now() - pausedTime;
      }
    } else if (status === "running") {
      const now = performance.now();
      setPausedTime(
        (prevPausedTime) => prevPausedTime + now - startTimeRef.current
      );
      startTimeRef.current = null;
    }
    setStatus((prevStatus) => (prevStatus === "running" ? "idle" : "running"));
  };

  const handleTabClick = (selectedTab: "timer" | "stopwatch") => {
    setTab(selectedTab);
  };

  return (
    <div
      css={css`
        position: relative;
        width: 50vw;

        @media (max-width: 1024px) {
          width: 75vw;
        }
      `}
    >
      <Tab>
        <TabHead>
          <TabItem
            onClick={() => handleTabClick("stopwatch")}
            css={css`
              display: flex;
              align-items: center;
              gap: 0.5em;
              cursor: pointer;
              color: ${tab === "stopwatch" ? "white" : theme.colors.primary};
              background-color: ${tab === "stopwatch"
                ? theme.colors.primary
                : "white"};
            `}
          >
            {tab === "timer" ? <img width={24} height={24} src={StopwatchIcon} alt="stopwatch-icon" /> : <img width={24} height={24} src={StopwatchIconWhite} alt="stopwatch-icon" />}
            STOPWATCH
          </TabItem>
          <TabItem
            onClick={() => handleTabClick("timer")}
            css={css`
              display: flex;
              align-items: center;
              gap: 0.5em;
              cursor: pointer;
              color: ${tab === "timer" ? "white" : theme.colors.primary};
              background-color: ${tab === "timer"
                ? theme.colors.primary
                : "white"};
            `}
          >
            {tab === "stopwatch" ? <img width={24} height={24} src={TimerIcon} alt="timer-icon" /> : <img width={24} height={24} src={TimerIconWhite} alt="timer-icon" />}
            TIMER
          </TabItem>
        </TabHead>
        <TabBody>
          {tab === "stopwatch" && (
            <>
              <StopWatch
                timer={timer}
                status={status}
                onResetHandler={() => setTimeElapsed(() => 0)}
                onStartHandler={toggle}
              />
            </>
          )}
          {tab === "timer" && (
            <TimerComponent />
          )}
        </TabBody>
      </Tab>
    </div>
  );
}

export default App;
