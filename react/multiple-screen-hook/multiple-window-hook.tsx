import { useEffect, useState } from "react";

interface MultipleWindow {
  onScreenChangeCb: Callback<Event>;
  onCurrentScreenChangeCb: Callback<Event>;
}

function useMultipleWindow({
  onScreenChangeCb,
  onCurrentScreenChangeCb,
}: MultipleWindow) {
  if (typeof window === "undefined") {
    throw new WindowObjectUndefinedError();
  }

  const [hasStarted, start] = useState(false);
  const [permission, setPermission] = useState(false);

  const isExtended = window.screen.isExtended;
  const [screenDetails, setScreenDetails] = useState<ScreenDetails>(undefined);
  const [currentScreenLength, setCurrentScreenLength] = useState(0);
  const [screens, setScreens] = useState<ScreenDetailed[]>([]);
  const [currentScreen, setCurrentScreen] = useState<ScreenDetailed>();

  const [outerWindow, setOuterWindow] = useState({
    width: window.outerWidth,
    height: window.outerHeight,
  });

  const [windowPosition, setWindowPosition] = useState({
    x: window.screenX,
    y: window.screenY,
  });

  useEffect(() => {
    const updateWindowPosition = () => {
      const newX = window.screenX;
      const newY = window.screenY;

      if (newX !== windowPosition.x || newY !== windowPosition.y) {
        // Window has moved
        setWindowPosition({ x: newX, y: newY });
      }
    };

    // Check window position every 100 milliseconds (adjust as needed)
    const intervalId = setInterval(updateWindowPosition, 1);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [windowPosition]); // The effect depends on the windowPosition state

  useEffect(() => {
    function handleResize(e) {
      setOuterWindow({
        width: e.currentTarget.outerWidth,
        height: e.currentTarget.outerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.getScreenDetails().then((screenDetails) => {
      setScreenDetails(screenDetails);
      setCurrentScreen(screenDetails.currentScreen);
      setScreens(screenDetails.screens);
      setCurrentScreenLength(screenDetails.screens.length);
      setPermission(true);
    });
  }, [hasStarted]);

  useEffect(() => {
    if (permission) {
      setupEventHandlers();
    }
  }, [permission]);

  async function setupEventHandlers() {
    if ("getScreenDetails" in window) {
      try {
        let permission = // @ts-ignore
          (await navigator.permissions.query({ name: "window-placement" }))
            .state === "granted";
        setPermission(permission);
      } catch (e) {
        throw new WindowManagementPermissionNotGranted(e);
      }
      screenDetails.addEventListener("screenschange", onScreenChangeCb);
      screenDetails.addEventListener(
        "currentscreenchange",
        onCurrentScreenChangeCb,
      );
    } else {
      // can be handled by a callback or old API for screen.
      throw new UnsupportedBrowserError();
    }
  }

  function setup() {
    start(true);
  }

  return {
    setup,
    isExtended,
    screens,
    permission,
    windowPosition,
    setPermission,
    setScreenDetails,
    currentScreen,
    screenDetails,
    currentScreenLength,
    outerWindow,
  };
}

class WindowManagementPermissionNotGranted extends Error {
  constructor(message = "permission denied.") {
    super(message);
    this.name = "WindowManagementPermissionNotGranted";
  }
}

class UnsupportedBrowserError extends Error {
  constructor(message = "Multi-Screen Window Placement API - NOT SUPPORTED") {
    super(message);
    this.name = "UnsupportedBrowserError";
  }
}

class WindowObjectUndefinedError extends Error {
  constructor(
    message = "window object in not available, maybe you are not on a browser?",
  ) {
    super(message);
    this.name = "WindowObjectUndefinedError";
  }
}

export { useMultipleWindow };
