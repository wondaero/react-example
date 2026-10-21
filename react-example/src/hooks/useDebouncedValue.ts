import { useCallback, useEffect, useRef, useState } from "react";

export function useDebouncedValue<T>(value: T, delay = 500): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    console.log(3333);
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export function useDebounce(callback, delay = 500) {
  const isFirst = useRef(true);

  const [cb, setCb] = useState(callback);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    console.log(callback, 333);
    const timer = setTimeout(() => {
      setCb(callback);
    }, delay);
    return () => clearTimeout(timer);
  }, [callback, delay]);

  return cb;
}

// 호출형 디바운스: 반환된 함수를 부를 때마다 타이머를 새로 걸고,
// 마지막 호출 후 delay ms가 지나면 callback을 한 번 실행한다.
// 타이머를 useRef에 두기 때문에 호출해도 리렌더링이 일어나지 않는다.
export function useDebounceSample<A extends unknown[]>(
  callback: (...args: A) => void,
  delay = 500,
) {
  const timer = useRef<number | undefined>(undefined);
  const callbackRef = useRef(callback);

  // 렌더링마다 최신 callback을 보관 (반환 함수의 참조는 바뀌지 않게 하려는 용도)
  useEffect(() => {
    callbackRef.current = callback;
  });

  // 언마운트될 때 남은 타이머 정리
  useEffect(() => () => clearTimeout(timer.current), []);

  return useCallback(
    (...args: A) => {
      clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay],
  );
}
