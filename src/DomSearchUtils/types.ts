/**
 * Class constructor interface.
 */
export interface IDomSearchUtilsConstructor {
    /**
     * Function for finding a DOM element by selector in a given container.
     * @param selector - DOM element selector.
     * @param container - Container in which to search.
     * @returns Found DOM element or null if the container does not exist.
     */
    find<T extends HTMLElement>(
        selector: string,
        container: HTMLElement | Document | null
    ): T | null;

    /**
     * Function for finding a list of DOM elements by selector in a given container.
     * @param selector - DOM elements selector.
     * @param container - Container in which to search.
     * @returns List of found DOM elements or an empty array if the container does not exist.
     */
    findList<T extends HTMLElement>(
        selector: string,
        container: HTMLElement | Document | null
    ): Array<T>;

    /**
     * Finds the closest parent element that matches the given selector.
     * @param element - DOM element.
     * @param selector - DOM element selector.
     * @returns Closest parent element or null.
     */
    closest<T extends HTMLElement>(
        element: HTMLElement,
        selector: string
    ): T | null;

    /**
     * Checks if an element is a descendant of a given parent element.
     * @param element - DOM element.
     * @param parentElement - Parent DOM element.
     * @returns true if the element is a descendant of the parent element, false otherwise.
     */
    isDescendantOf(element: HTMLElement, parentElement: HTMLElement): boolean;
}

/**
 * Instance class interface.
 */
export interface IDomSearchUtils {}
