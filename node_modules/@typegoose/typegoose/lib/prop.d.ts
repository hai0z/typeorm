import { WhatIsIt } from './internal/constants';
import type { ArrayPropOptions, BasePropOptions, MapPropOptions, PropOptionsForNumber, PropOptionsForString, VirtualOptions } from './types';
/**
 * Set Property Options for the property below
 * @param options Options
 * @param kind Overwrite auto-inferred kind
 * @example
 * ```ts
 * class ClassName {
 *   @prop()
 *   public someProp?: string;
 *
 *   @prop({ type: () => [String] })
 *   public someArrayProp?: string[];
 *
 *   @prop({ type: () => String })
 *   public someMapProp?: Map<string, string>;
 * }
 * ```
 */
declare function prop(options?: BasePropOptions | ArrayPropOptions | MapPropOptions | PropOptionsForNumber | PropOptionsForString | VirtualOptions, kind?: WhatIsIt): PropertyDecorator;
export { prop };
export { prop as Prop };
