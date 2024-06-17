import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import { useMultipleWindow } from "./multiple-window-hook.tsx";

function MyApp() {
  const [screen, setScreen] = useState<ScreenDetailed>(undefined);

  const onScreenChange = (event) => {
    let currentTarget: ScreenDetailed = event.currentTarget.currentScreen;
    setScreen(currentTarget);
  };

  const onCurrentScreenChange = (event) => {
    let currentTarget: ScreenDetailed = event.currentTarget.currentScreen;
    console.log(currentTarget);
  };

  const {
    setup,
    screenDetails,
    permission,
    screens,
    windowPosition,
    outerWindow,
  } = useMultipleWindow({
    onScreenChangeCb: onScreenChange,
    onCurrentScreenChangeCb: onCurrentScreenChange,
  });

  async function onRequestForScreenDetailPermission(e) {
    setup();
  }

  return (
    <>
      {permission || (
        <button onClick={onRequestForScreenDetailPermission}>Start</button>
      )}
      <div>screens: {screens.length}</div>
      <div>outerWidth: {windowPosition.x}</div>
      <div>outerHeight: {windowPosition.y}</div>
      <div>outerWidth: {outerWindow.width}</div>
      <div>outerHeight: {outerWindow.height}</div>
      <div>
        {screenDetails && `label: ${screenDetails.currentScreen.label}`}
      </div>
      <div>
        {screenDetails && `width: ${screenDetails.currentScreen.width}`}
      </div>
      <div>
        {screenDetails && `screen: ${screenDetails.currentScreen.availWidth}`}
      </div>
      <div>{screenDetails && `top: ${screenDetails.currentScreen.top}`}</div>
      <div>
        {screenDetails &&
          `devicePixelRatio: ${screenDetails.currentScreen.devicePixelRatio}`}
      </div>
      <div>
        {screenDetails &&
          `isInternal: ${screenDetails.currentScreen.isInternal}`}
      </div>
      <div>
        {screenDetails &&
          `orientation.angle: ${screenDetails.currentScreen.orientation.angle}`}
      </div>
      <div>
        {screenDetails &&
          `orientation.type: ${screenDetails.currentScreen.orientation.type}`}
      </div>
      <div>
        {screenDetails && `height: ${screenDetails.currentScreen.height}`}
      </div>
    </>
  );
}

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<MyApp />);
