/**
 * Interface for the constructor of the class.
 */
export interface IDomElementManipulationUtilsConstructor {
    /**
     * Returns the parent element of the given DOM element.
     * @param element - DOM element.
     * @returns Parent element or null.
     */
    parent: (element: HTMLElement) => HTMLElement | null;
    /**
     * Removes the given DOM element from the document.
     * @param element - DOM element.
     */
    remove: (element: HTMLElement) => void;
    /**
     * Finds the next element for the DOM element.
     * @param element - DOM element.
     * @returns Next DOM element or null.
     */
    next: <T extends HTMLElement>(element: HTMLElement) => T | null;
    /**
     * Finds the previous element for the DOM element.
     * @param element - DOM element.
     * @returns Previous DOM element or null.
     */
    prev: <T extends HTMLElement>(element: HTMLElement) => T | null;
    /**
     * Inserts HTML markup as innerHTML of the DOM element,
     * if value is specified, returns the current value of innerHTML.
     * @param element - DOM element.
     * @param value - HTML markup to insert into the element.
     * @returns Current value of innerHTML or undefined if value was passed.
     */
    html: THTML;
    /**
     * Creates a new DOM element of the specified type.
     * @param tag - Type of the DOM element.
     * @returns Created DOM element.
     */
    create: <K extends keyof HTMLElementTagNameMap>(
        tag: K
    ) => HTMLElementTagNameMap[K];
    /**
     * Inserts a new element before the target element.
     * @param newElement - New element to insert.
     * @param targetElement - Target element before which the insertion is performed.
     */
    insertBefore: (newElement: HTMLElement, targetElement: HTMLElement) => void;
    /**
     * Inserts a new element after the target element.
     * @param newElement - New element to insert.
     * @param targetElement - Target element after which the insertion is performed.
     */
    insertAfter: (newElement: HTMLElement, targetElement: HTMLElement) => void;
    /**
     * Wraps the specified element with the given wrapper.
     * @param element - Element to wrap.
     * @param wrapper - Wrapper element.
     */
    wrap: (element: HTMLElement, wrapper: HTMLElement) => void;
    /**
     * Removes the wrapper and leaves only the contents.
     * @param wrapper - Wrapper element to remove.
     */
    unwrap: (wrapper: HTMLElement) => void;
    /**
     * Creates a deep copy of the specified DOM element.
     * @param element - DOM element.
     * @returns Copy of the DOM element.
     */
    clone: <T extends HTMLElement>(element: T) => T;
}

/**
 * Interface for the class instance
 */
export interface IDomElementManipulationUtils {}

/**
 * Function for working with innerHTML of a DOM element.
 * @param element - DOM element.
 * @param value - HTML markup to insert into the element.
 * @returns Current value of innerHTML or undefined if value was passed.
 */
export type THTML = {
    (element: HTMLElement, value: string): void;
    (element: HTMLElement, value?: undefined): string;
};
