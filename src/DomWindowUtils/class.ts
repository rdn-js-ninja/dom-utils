import type { IDomWindowUtils, IDomWindowUtilsConstructor } from "./types";

/**
 * Class representing utilities for working with DOM elements.
 */
const DomWindowUtils: IDomWindowUtilsConstructor = class
    implements IDomWindowUtils
{
    static document = () => {
        return window.document;
    };

    static window = () => {
        return window;
    };

    static body = () => {
        return this.document().body;
    };

    static computedStyles = (element) => {
        return window.getComputedStyle(element);
    };

    static isInViewport = (element) => {
        const { top, left, bottom, right } = this.rect(element);

        return (
            top >= 0 &&
            left >= 0 &&
            bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    static rect = (element) => {
        return element.getBoundingClientRect();
    };
};

export default DomWindowUtils;
