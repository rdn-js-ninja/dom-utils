import DomChildUtils from "./DomChildUtils";
import DomElementManipulationUtils from "./DomElementManipulationUtils";
import DomEventUtils from "./DomEventUtils";
import DomSearchUtils from "./DomSearchUtils";
import DomTransformUtils from "./DomTransformUtils";
import DomWindowUtils from "./DomWindowUtils";

import type { IDomUtils, IDomUtilsConstructor } from "./types";

/**
 * Class representing utilities for working with DOM elements.
 */
const DomUtils: IDomUtilsConstructor = class implements IDomUtils {
    /**
     * DomChildUtils
     */
    public static firstChild = DomChildUtils.firstChild;
    public static lastChild = DomChildUtils.lastChild;
    public static isEmpty = DomChildUtils.isEmpty;

    /**
     * DomElementManipulationUtils
     */
    public static parent = DomElementManipulationUtils.parent;
    public static remove = DomElementManipulationUtils.remove;
    public static next = DomElementManipulationUtils.next;
    public static prev = DomElementManipulationUtils.prev;
    public static html = DomElementManipulationUtils.html;
    public static create = DomElementManipulationUtils.create;
    public static insertBefore = DomElementManipulationUtils.insertBefore;
    public static insertAfter = DomElementManipulationUtils.insertAfter;
    public static wrap = DomElementManipulationUtils.wrap;
    public static unwrap = DomElementManipulationUtils.unwrap;
    public static clone = DomElementManipulationUtils.clone;

    /**
     * DomEventUtils;
     */
    public static on = DomEventUtils.on;
    public static off = DomEventUtils.off;
    public static dispatch = DomEventUtils.dispatch;

    /**
     * DomSearchUtils;
     */
    public static find = DomSearchUtils.find;
    public static findList = DomSearchUtils.findList;
    public static closest = DomSearchUtils.closest;
    public static isDescendantOf = DomSearchUtils.isDescendantOf;

    /**
     * DomTransformUtils;
     */
    public static collectionToArray = DomTransformUtils.collectionToArray;

    /**
     * DomWindowUtils;
     */
    public static document = DomWindowUtils.document;
    public static window = DomWindowUtils.window;
    public static body = DomWindowUtils.body;
    public static computedStyles = DomWindowUtils.computedStyles;
    public static isInViewport = DomWindowUtils.isInViewport;
    public static rect = DomWindowUtils.rect;
};

export default DomUtils;
