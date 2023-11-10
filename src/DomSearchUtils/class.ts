import type { IDomSearchUtils, IDomSearchUtilsConstructor } from "./types";

import DomElementManipulationUtils from "../DomElementManipulationUtils";
import DomWindowUtils from "../DomWindowUtils";
import DomTransformUtils from "../DomTransformUtils";

/**
 * Class representing utilities for working with DOM elements.
 */
const DomSearchUtils: IDomSearchUtilsConstructor = class
    implements IDomSearchUtils
{
    public static find = <T extends HTMLElement>(
        selector: string,
        container: HTMLElement | Document | null
    ): T | null => {
        const context: HTMLElement | Document =
            container || DomWindowUtils.document();

        return context.querySelector<T>(selector);
    };

    public static findList = <T extends HTMLElement>(
        selector: string,
        container: HTMLElement | Document | null
    ): Array<T> => {
        const context: HTMLElement | Document =
            container || DomWindowUtils.document();

        const nodeList = context.querySelectorAll<T>(selector);

        return DomTransformUtils.collectionToArray<T>(nodeList);
    };

    public static closest = <T extends HTMLElement>(
        element: HTMLElement,
        selector: string
    ): T | null => {
        return element.closest<T>(selector);
    };

    public static isDescendantOf = (element, parentElement) => {
        let currentElement: HTMLElement | null = element;

        while (currentElement) {
            if (currentElement === parentElement) {
                return true;
            }

            currentElement = DomElementManipulationUtils.parent(currentElement);
        }

        return false;
    };
};

export default DomSearchUtils;
