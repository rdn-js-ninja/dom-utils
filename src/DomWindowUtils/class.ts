import type { IDomWindowUtils, IDomWindowUtilsConstructor } from "./types";

/**
 * Class representing utilities for working with DOM elements.
 */
const DomWindowUtils: IDomWindowUtilsConstructor = class
    implements IDomWindowUtils
{
    static document = (): Document => {
        return window.document;
    };

    static window = (): Window => {
        return window;
    };

    static body = (): HTMLElement => {
        return this.document().body;
    };

    static computedStyles = (element: HTMLElement): CSSStyleDeclaration => {
        return window.getComputedStyle(element);
    };

    static isInViewport = (element: HTMLElement): boolean => {
        const { top, left, bottom, right } = this.rect(element);

        return (
            top >= 0 &&
            left >= 0 &&
            bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    static rect = (element: HTMLElement): DOMRect => {
        return element.getBoundingClientRect();
    };
};

export default DomWindowUtils;
