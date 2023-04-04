/**
 * @param querySelector - query selector to find elements or element/s
 * @param event - event key
 * @param callback - callback function
 */
type EventHandlerArgs1 = [
  target: string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>,
  event: string,
  callback: EventListener
];

/**
 * @param querySelector - query selector to find elements or element/s
 * @param child - query selector to find child elements
 * @param event - event key
 * @param callback - callback function
 */
type EventHandlerArgs2 = [
  target: string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>,
  childQuerySelector: string,
  event: string,
  callback: EventListener
];

type EventHandlerArgs = EventHandlerArgs1 | EventHandlerArgs2;

/**
 * Add event handler to elements and allow delegation,
 * returns a function to remove the event handler
 *
 * @param querySelector - query selector to find elements
 * @param event - event key
 * @param callback - callback function
 *
 * OR
 *
 * @param target - query selector to find elements or element/s
 * @param child - query selector to find child elements
 * @param event - event key
 * @param callback - callback function
 *
 * @example
 * addEventHandler('.btn', 'click', () => console.log('clicked'));
 *
 * addEventHandler(
 *  '.btn',
 * '.btn__child',
 * 'click',
 * () => console.log('clicked')
 * );
 */
export const addEventHandler = (...[target, ...args]: EventHandlerArgs) => {
  // if there are 3 args, it means we should delegate the event since the first arg is the child query selector
  const isQuerySelector = typeof target === 'string';
  const isSingleElement = !isQuerySelector && target instanceof HTMLElement;

  const elements = isQuerySelector
    ? Array.from(document.querySelectorAll(target))
    : [...(isSingleElement ? [target] : target)];

  const [arg0, arg1, arg2] = args;
  const shouldDelegate = args.length === 3;
  const eventKey = (shouldDelegate ? arg1 : arg0) as string;
  const callback = (shouldDelegate ? arg2 : arg1) as EventListener;
  const childQuerySelector = (shouldDelegate ? arg0 : null) as string;

  const handler = (event: Event) => {
    if (!shouldDelegate) {
      callback(event);
      return;
    }

    const target = event.target as HTMLElement;
    const itMatches = target.matches(childQuerySelector);

    if (!itMatches) return;

    callback(event);
  };

  elements.forEach(element => {
    element.addEventListener(eventKey, handler);
  });

  return () => {
    elements.forEach(element => {
      element.removeEventListener(eventKey, handler);
    });
  };
};
