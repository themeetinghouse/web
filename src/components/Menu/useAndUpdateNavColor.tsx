import { useCallback, useEffect, useMemo, useState } from 'react';
import { flipElementColor } from './navUtils';

const determineColor = (color: string): string => {
  if (color === 'white') return '#FFFFFF';
  if (color === 'black') return '#1A1A1A';
  if (color === '#FFFFFF') return '#FFFFFF';
  if (color === '#1A1A1A') return '#1A1A1A';
  return '#FFFFFF';
};

export default function useAndUpdateNavColor(
  initialColor: string,
  elementID: string
) {
  const [color, setColor] = useState(initialColor);
  const forceCheck = useCallback(
    () =>
      flipElementColor(
        `${elementID}`,
        '#FFFFFF',
        '#1A1A1A',
        determineColor(color),
        setColor,
        ['oneImageBlackBox', 'partialNoFooter', 'divPartial', 'partialConnect'],
        15
      ),
    [elementID, color]
  );
  useEffect(() => {
    const handleScroll = () => {
      flipElementColor(
        `${elementID}`,
        '#FFFFFF',
        '#1A1A1A',
        determineColor(color),
        setColor,
        ['oneImageBlackBox', 'partialNoFooter', 'divPartial', 'partialConnect'],
        15
      );
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialColor, elementID, color]);
  const memoizedColor = useMemo(() => determineColor(color), [color]);
  return { color: memoizedColor, forceCheck };
}
