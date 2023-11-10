/**
 * Interface for the class constructor.
 */
export interface IDomWindowUtilsConstructor {
    /**
     * Returns the Document object of the current window.
     * @returns The Document object of the current window.
     */
    document: () => Document;
    /**
     * Returns the Window object of the current window.
     * @returns The Window object of the current window.
     */
    window: () => Window;
    /**
     * Returns the body element of the current window.
     * @returns The body element of the current window.
     */
    body: () => HTMLElement;
    /**
     * Returns the computed styles of an element.
     * @param element - The element to get the styles for.
     * @returns An object containing the computed styles of the element.
     */
    computedStyles: (element: HTMLElement) => CSSStyleDeclaration;
    /**
     * Checks if an element is in the viewport.
     * @param element - The element to check.
     * @returns true if the element is in the viewport, otherwise false.
     */
    isInViewport: (element: HTMLElement) => boolean;
    /**
     * Returns the rectangle that describes the position and dimensions of an element.
     * @param element - The element to get the rectangle for.
     * @returns An object describing the position and dimensions of the element.
     */
    rect: (element: HTMLElement) => DOMRect;
}

/**
 * Interface for the class instance.
 */
export interface IDomWindowUtils {}
