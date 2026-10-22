import { useEffect, useRef } from "react";

export function useDebounceCallback(
  deps: string | number,
  callback: () => void,
  delay = 500,
) {
  const isFirst = useRef(true);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    const timer = setTimeout(() => callbackRef.current(), delay);
    return () => clearTimeout(timer);
  }, [deps, delay]);
}
