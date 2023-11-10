import type { IDomEventUtils, IDomEventUtilsConstructor } from "./types";

/**
 * Class representing utilities for working with DOM events.
 */
const DomEventUtils: IDomEventUtilsConstructor = class
    implements IDomEventUtils
{
    public static on = (
        element: HTMLElement,
        event: string,
        handler: EventListenerOrEventListenerObject
    ) => {
        element.addEventListener(event, handler);
    };

    public static off = (
        element: HTMLElement,
        event: string,
        handler: EventListenerOrEventListenerObject
    ) => {
        element.removeEventListener(event, handler);
    };

    public static dispatch = (element: HTMLElement, event: string) => {
        element.dispatchEvent(new Event(event));
    };
};

export default DomEventUtils;
