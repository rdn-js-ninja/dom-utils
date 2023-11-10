/**
 * Interface for the class constructor.
 */
export interface IDomTransformUtilsConstructor {
    /**
     * Function that converts a NodeList or HTMLCollection to an array of DOM elements.
     * @param list - NodeList or HTMLCollection to convert.
     * @returns Array of DOM elements.
     */
    collectionToArray: <T extends HTMLElement>(
        list: NodeListOf<T> | HTMLCollectionOf<T>
    ) => Array<T>;
}

/**
 * Interface for the class instance.
 */
export interface IDomTransformUtils {}
