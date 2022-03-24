export const flipElementColor = (
  elementId: string,
  colorA: string,
  colorB: string,
  currentColor: string,
  setColor: React.Dispatch<React.SetStateAction<string>>,
  classesToCheckFor: string[],
  yOffset: number // increase based on element size
) => {
  if (window.innerWidth < 768) return;
  const currentElement: HTMLElement | null | undefined =
    document.getElementById(elementId);
  if (!currentElement) return;
  const elementPosition = currentElement.getBoundingClientRect();
  const pos = { x: elementPosition?.x, y: elementPosition?.y };
  if (!pos.x || !pos.y) return;
  const isFound = document
    .elementsFromPoint(pos.x, pos.y + yOffset)
    .find((a) => {
      return classesToCheckFor.find((className) =>
        Array.from(a.classList).includes(className)
      );
    });
  if (isFound) {
    if (currentColor !== colorA) {
      setColor(colorA);
    }
  } else {
    if (currentColor !== colorB) {
      setColor(colorB);
    }
  }
};
