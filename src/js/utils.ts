type EventHandlerArgs = {
  /**
   * query selector to find elements or element/s
   */
  target: string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>;
  /**
   * query selector to find child elements to delegate the event
   */
  childQuerySelector?: string;
  /**
   * event key
   */
  event: keyof HTMLElementEventMap;
  /**
   * callback function
   */
  callback: EventListener;
};

/**
 * Add event handler to elements and allow delegation,
 * returns a function to remove the event handler
 *
 * @param target query selector to find elements or element/s
 * @param childQuerySelector query selector to find child elements to delegate the event
 * @param event event key
 * @param callback callback function
 * @returns function to remove the event handler
 *
 * @example
 * const removeHandler = addEventHandler({
 *  target: 'body',
 *  childQuerySelector: '.switcher_theme_button input',
 *  event: 'click',
 *  callback: switchTheme,
 * });
 *
 * // remove event handler
 * removeHandler();
 *
 * @example
 * const removeHandler = addEventHandler({
 *  target: document.querySelector('.switcher_theme_button input'),
 *  event: 'click',
 *  callback: switchTheme,
 * });
 */
export const addEventHandler = ({
  target,
  childQuerySelector,
  event,
  callback,
}: EventHandlerArgs) => {
  const isQuerySelector = typeof target === 'string';
  const isSingleElement = !isQuerySelector && target instanceof HTMLElement;

  const elements = isQuerySelector
    ? [...document.querySelectorAll(target)]
    : [...(isSingleElement ? [target] : target)];

  const handler = (event: Event) => {
    if (!childQuerySelector) {
      callback(event);
      return;
    }

    const target = event.target as HTMLElement;
    const itMatches = target.matches(childQuerySelector);

    if (!itMatches) return;

    callback(event);
  };

  elements.forEach(element => {
    element.addEventListener(event, handler);
  });

  return () => {
    elements.forEach(element => {
      element.removeEventListener(event, handler);
    });
  };
};
