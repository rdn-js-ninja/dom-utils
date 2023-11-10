import type { IDomChildUtils, IDomChildUtilsConstructor } from "./types";

/**
 * Class representing utilities for working with DOM elements.
 */
const DomChildUtils: IDomChildUtilsConstructor = class
    implements IDomChildUtils
{
    static firstChild = <T extends HTMLElement>(
        element: HTMLElement
    ): T | null => {
        return element.firstElementChild as T | null;
    };

    static lastChild = <T extends HTMLElement>(
        element: HTMLElement
    ): T | null => {
        return element.lastElementChild as T | null;
    };

    static isEmpty = (element: HTMLElement): boolean => {
        return element.childElementCount === 0;
    };
};

export default DomChildUtils;
