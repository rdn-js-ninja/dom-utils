/**
 * Interface for the constructor of the class.
 */
export interface IDomEventUtilsConstructor {
    /**
     * Method for subscribing to a DOM element event.
     * @param element - The DOM element.
     * @param event - The event name.
     * @param handler - The event handler.
     */
    on: (
        element: HTMLElement,
        event: string,
        handler: EventListenerOrEventListenerObject
    ) => void;

    /**
     * Method for unsubscribing from a DOM element event.
     * @param element - The DOM element.
     * @param event - The event name.
     * @param handler - The event handler.
     */
    off: (
        element: HTMLElement,
        event: string,
        handler: EventListenerOrEventListenerObject
    ) => void;

    /**
     * Method for triggering a DOM element event.
     * @param element - The DOM element.
     * @param event - The event name.
     */
    dispatch: (element: HTMLElement, event: string) => void;
}

/**
 * Interface for the instance of the class.
 */
export interface IDomEventUtils {}
