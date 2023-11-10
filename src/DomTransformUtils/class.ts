import type {
    IDomTransformUtils,
    IDomTransformUtilsConstructor,
} from "./types";

/**
 * Class representing utilities for working with DOM elements.
 */
const DomTransformUtils: IDomTransformUtilsConstructor = class
    implements IDomTransformUtils
{
    static collectionToArray = <T extends HTMLElement>(
        list: NodeListOf<T> | HTMLCollectionOf<T>
    ): Array<T> => {
        return Array.from<T>(list);
    };
};

export default DomTransformUtils;
