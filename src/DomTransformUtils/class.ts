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
        list: NodeList | HTMLCollection
    ): Array<T> => {
        return Array.from(list) as Array<T>;
    };
};

export default DomTransformUtils;
