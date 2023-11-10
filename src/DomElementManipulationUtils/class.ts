import type {
    IDomElementManipulationUtils,
    IDomElementManipulationUtilsConstructor,
    THTML,
} from "./types";

import DomChildUtils from "../DomChildUtils";
import DomWindowUtils from "../DomWindowUtils";

/**
 * Class representing utilities for working with DOM elements.
 */
const DomElementManipulationUtils: IDomElementManipulationUtilsConstructor = class
    implements IDomElementManipulationUtils
{
    public static parent = (element) => {
        return element.parentElement;
    };

    public static remove = (element) => {
        const parent = this.parent(element);

        if (!parent) {
            return;
        }

        parent.removeChild(element);
    };

    public static next = <T extends HTMLElement>(
        element: HTMLElement
    ): T | null => {
        return element.nextElementSibling as T | null;
    };

    public static prev = <T extends HTMLElement>(
        element: HTMLElement
    ): T | null => {
        return element.previousElementSibling as T | null;
    };

    public static html = ((element, value) => {
        if (typeof value === "undefined") {
            return element.innerHTML;
        }

        element.innerHTML = value;

        return;
    }) as THTML;

    public static create = (tag) => {
        return DomWindowUtils.document().createElement(tag);
    };

    public static insertBefore = (newElement, targetElement) => {
        const parent = this.parent(targetElement);

        if (parent) {
            parent.insertBefore(newElement, targetElement);
        }
    };

    public static insertAfter = (newElement, targetElement) => {
        const parent = this.parent(targetElement);

        if (parent) {
            const nextSibling = this.next(targetElement);

            if (nextSibling) {
                parent.insertBefore(newElement, nextSibling);
            } else {
                parent.appendChild(newElement);
            }
        }
    };

    public static wrap = (element, wrapper) => {
        const parent = this.parent(element);

        if (parent) {
            this.insertBefore(wrapper, element);

            wrapper.appendChild(element);
        }
    };

    public static unwrap = (wrapper) => {
        const parent = this.parent(wrapper);

        if (parent) {
            let firstChild = DomChildUtils.firstChild(wrapper);
            while (firstChild) {
                parent.insertBefore(firstChild, wrapper);

                firstChild = DomChildUtils.firstChild(wrapper);
            }

            this.remove(wrapper);
        }
    };

    public static clone = <T extends HTMLElement>(element: T): T => {
        return element.cloneNode(true) as T;
    };
};

export default DomElementManipulationUtils;
