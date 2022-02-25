"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prop = exports.prop = void 0;
const constants_1 = require("./internal/constants");
const utils = require("./internal/utils");
const logSettings_1 = require("./logSettings");
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
function prop(options, kind) {
    return (target, key) => {
        options = options !== null && options !== void 0 ? options : {};
        const existingMapForTarget = Reflect.getOwnMetadata(constants_1.DecoratorKeys.PropCache, target);
        if (utils.isNullOrUndefined(existingMapForTarget)) {
            Reflect.defineMetadata(constants_1.DecoratorKeys.PropCache, new Map(), target);
        }
        const mapForTarget = existingMapForTarget !== null && existingMapForTarget !== void 0 ? existingMapForTarget : Reflect.getOwnMetadata(constants_1.DecoratorKeys.PropCache, target);
        mapForTarget.set(key, { options, target, key, whatis: kind });
        logSettings_1.logger.debug('Added "%s.%s" to the Decorator Cache', utils.getName(target.constructor), key);
    };
}
exports.prop = prop;
exports.Prop = prop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9EQUErRDtBQUMvRCwwQ0FBMEM7QUFDMUMsK0NBQXVDO0FBWXZDOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNILFNBQVMsSUFBSSxDQUNYLE9BQTRILEVBQzVILElBQWU7SUFFZixPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUMzQyxPQUFPLEdBQUcsT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksRUFBRSxDQUFDO1FBRXhCLE1BQU0sb0JBQW9CLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyx5QkFBYSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQWlDLENBQUM7UUFFckgsSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUNqRCxPQUFPLENBQUMsY0FBYyxDQUFDLHlCQUFhLENBQUMsU0FBUyxFQUFFLElBQUksR0FBRyxFQUFxQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZHO1FBRUQsTUFBTSxZQUFZLEdBQUcsb0JBQW9CLGFBQXBCLG9CQUFvQixjQUFwQixvQkFBb0IsR0FBSyxPQUFPLENBQUMsY0FBYyxDQUFDLHlCQUFhLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBa0MsQ0FBQztRQUV2SSxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTlELG9CQUFNLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9GLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFUSxvQkFBSTtBQUdJLG9CQUFJIn0=