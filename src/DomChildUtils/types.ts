/**
 * Interface for the constructor of the class.
 */
export interface IDomChildUtilsConstructor {
    /**
     * Returns the first child element of the specified element.
     * @param element - The element to find the first child element for.
     * @returns The first child element of the specified element.
     */
    firstChild: (element: HTMLElement) => HTMLElement | null;

    /**
     * Returns the last child element of the specified element.
     * @param element - The element to find the last child element for.
     * @returns The last child element of the specified element.
     */
    lastChild: (element: HTMLElement) => HTMLElement | null;

    /**
     * Checks if the specified element is empty.
     * @param element - The element to check.
     * @returns true if the element is empty, otherwise false.
     */
    isEmpty: (element: HTMLElement) => boolean;
}

/**
 * Interface for the instance of the class.
 */
export interface IDomChildUtils {}
