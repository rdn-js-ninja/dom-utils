import type { IDomEventUtils, IDomEventUtilsConstructor } from "./types";

/**
 * Class representing utilities for working with DOM events.
 */
const DomEventUtils: IDomEventUtilsConstructor = class
    implements IDomEventUtils
{
    public static on = (element, event, handler) => {
        element.addEventListener(event, handler);
    };

    public static off = (element, event, handler) => {
        element.removeEventListener(event, handler);
    };

    public static dispatch = (element, event) => {
        element.dispatchEvent(new Event(event));
    };
};

export default DomEventUtils;
