import type { IDomChildUtilsConstructor } from "./DomChildUtils";
import type { IDomElementManipulationUtilsConstructor } from "./DomElementManipulationUtils";
import type { IDomEventUtilsConstructor } from "./DomEventUtils";
import type { IDomSearchUtilsConstructor } from "./DomSearchUtils";
import type { IDomTransformUtilsConstructor } from "./DomTransformUtils";
import type { IDomWindowUtilsConstructor } from "./DomWindowUtils";

/**
 * Class constructor interface.
 */
export interface IDomUtilsConstructor
    extends IDomChildUtilsConstructor,
        IDomElementManipulationUtilsConstructor,
        IDomEventUtilsConstructor,
        IDomSearchUtilsConstructor,
        IDomTransformUtilsConstructor,
        IDomWindowUtilsConstructor {}

/**
 * Class instance interface.
 */
export interface IDomUtils {}
