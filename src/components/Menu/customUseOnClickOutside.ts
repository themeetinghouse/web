import useOnClickOutside from 'use-onclickoutside';

const hasClass = (element: any, className: string) => {
  return (
    element &&
    (element.correspondingElement
      ? element.correspondingElement
      : element
    ).classList.contains(className)
  );
};

const isInIgnoredElement = (element: any, ignoredClass: string): boolean => {
  if (!element) {
    return false;
  }
  if (hasClass(element, ignoredClass)) {
    return true;
  }

  return isInIgnoredElement(element.parentElement, ignoredClass);
};

export default (
  ref: any,
  handler: any,
  ignoredClass = 'ignore-onClickOutside'
) =>
  useOnClickOutside(ref, (event) => {
    if (isInIgnoredElement(event.target, ignoredClass)) {
      return;
    }
    handler(event);
  });
