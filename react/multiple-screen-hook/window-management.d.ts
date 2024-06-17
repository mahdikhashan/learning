/// <reference lib="dom" />

interface ScreenDetailsEventHandlersEventMap {
  currentscreenchange: Event;
  screenschange: Event;
}

interface ScreenEventHandlersEventMap {
  change: Event;
}

interface ScreenDetailedEventHandlersEventMap {
  change: Event;
}

interface ScreenDetailedEventHandlers extends EventTarget {
  onchange: ((this: ScreenDetailed, ev: Event) => any) | null;
  addEventListener<K extends keyof ScreenDetailedEventHandlersEventMap>(
    type: K,
    listener: (this: Screen, ev: ScreenDetailedEventHandlersEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean,
  ): void;
}

interface ScreenDetailsEventHandlers extends EventTarget {
  oncurrentscreenchange: ((this: ScreenDetails, ev: Event) => any) | null;
  onscreenschange: ((this: ScreenDetails, ev: Event) => any) | null;
  addEventListener<K extends keyof ScreenDetailsEventHandlersEventMap>(
    type: K,
    listener: (
      this: ScreenDetails,
      ev: ScreenDetailsEventHandlersEventMap[K],
    ) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean,
  ): void;
}

interface ScreenEventHandlers extends EventTarget {
  onchange: ((this: Screen, ev: Event) => any) | null;
  addEventListener<K extends keyof ScreenEventHandlersEventMap>(
    type: K,
    listener: (this: Screen, ev: ScreenEventHandlersEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean,
  ): void;
}

interface Screen extends
  ScreenEventHandlers,
  ScreenDetailedEventHandlers {
  isExtended: boolean;
}

interface ScreenDetailed extends Screen {
  left: number;
  top: number;
  isPrimary: boolean;
  isInternal: boolean;
  devicePixelRatio: number;
  label: string;
}

interface ScreenDetails extends ScreenDetailsEventHandlers {
  screens: ScreenDetailed[];
  currentScreen: ScreenDetailed;
}
