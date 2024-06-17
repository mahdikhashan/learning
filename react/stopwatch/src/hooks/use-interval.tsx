import { useCallback, useEffect, useRef } from "react";

export function useInterval(cb: () => void, delay: number | null) {
  const ref = useRef<number | null>(null);
  const savedCb = useRef<() => void>(cb);

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const tick = () => savedCb.current();

    if (typeof delay === "number") {
      ref.current = window.setInterval(tick, delay);

      return () => window.clearInterval(ref.current!);
    }
  }, [delay]);

  const memoizedRef = useCallback(() => ref, []);

  return memoizedRef;
}
