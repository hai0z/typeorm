"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = exports.index = void 0;
const constants_1 = require("./internal/constants");
const utils_1 = require("./internal/utils");
const logSettings_1 = require("./logSettings");
/**
 * Defines an index (most likely compound) for this schema.
 * @param fields Which fields to give the Options
 * @param options Options to pass to MongoDB driver's createIndex() function
 * @example Example:
 * ```ts
 * @index({ article: 1, user: 1 }, { unique: true })
 * class ClassName {}
 * ```
 */
function index(fields, options) {
    return (target) => {
        var _a;
        logSettings_1.logger.info('Adding "%o" Indexes to %s', { fields, options }, (0, utils_1.getName)(target));
        const indices = Array.from((_a = Reflect.getMetadata(constants_1.DecoratorKeys.Index, target)) !== null && _a !== void 0 ? _a : []);
        indices.push({ fields, options });
        Reflect.defineMetadata(constants_1.DecoratorKeys.Index, indices, target);
    };
}
exports.index = index;
exports.Index = index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0RBQXFEO0FBQ3JELDRDQUEyQztBQUMzQywrQ0FBdUM7QUFHdkM7Ozs7Ozs7OztHQVNHO0FBQ0gsU0FBZ0IsS0FBSyxDQUNuQixNQUFpRCxFQUNqRCxPQUF5QjtJQUV6QixPQUFPLENBQUMsTUFBVyxFQUFFLEVBQUU7O1FBQ3JCLG9CQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUEsZUFBTyxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0UsTUFBTSxPQUFPLEdBQXVCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBQSxPQUFPLENBQUMsV0FBVyxDQUFDLHlCQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxtQ0FBSSxFQUFFLENBQUMsQ0FBQztRQUN2RyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyx5QkFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVZELHNCQVVDO0FBR2lCLHNCQUFLIn0=