import { useLayoutEffect, useState } from 'react';
import useResizeObserver from '@react-hook/resize-observer';

export default function useSize(
  target: React.RefObject<HTMLElement>
): DOMRectReadOnly | undefined {
  const [size, setSize] = useState<DOMRectReadOnly>();

  useLayoutEffect(() => {
    if (target.current) setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
}
