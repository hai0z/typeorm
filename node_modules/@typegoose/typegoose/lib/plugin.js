"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugins = exports.plugin = void 0;
const constants_1 = require("./internal/constants");
const utils_1 = require("./internal/utils");
const logSettings_1 = require("./logSettings");
/**
 * Add a Middleware-Plugin
 * @param mongoosePlugin The Plugin to plug-in
 * @param options Options for the Plugin, if any
 * @example Example:
 * ```ts
 * @plugin(findOrCreate)
 * class ClassName {}
 * ```
 */
function plugin(mongoosePlugin, options) {
    // don't check if options is an object, because any plugin could make it anything
    return (target) => {
        var _a, _b;
        logSettings_1.logger.info('Adding plugin "%s" to "%s" with options: "%o"', (_a = mongoosePlugin === null || mongoosePlugin === void 0 ? void 0 : mongoosePlugin.name) !== null && _a !== void 0 ? _a : '<anonymous>', (0, utils_1.getName)(target), options);
        const plugins = Array.from((_b = Reflect.getMetadata(constants_1.DecoratorKeys.Plugins, target)) !== null && _b !== void 0 ? _b : []);
        plugins.push({ mongoosePlugin, options });
        Reflect.defineMetadata(constants_1.DecoratorKeys.Plugins, plugins, target);
    };
}
exports.plugin = plugin;
exports.Plugins = plugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3BsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvREFBcUQ7QUFDckQsNENBQTJDO0FBQzNDLCtDQUF1QztBQUd2Qzs7Ozs7Ozs7O0dBU0c7QUFDSCxTQUFnQixNQUFNLENBQXFELGNBQXFCLEVBQUUsT0FBaUI7SUFDakgsaUZBQWlGO0lBQ2pGLE9BQU8sQ0FBQyxNQUFXLEVBQUUsRUFBRTs7UUFDckIsb0JBQU0sQ0FBQyxJQUFJLENBQUMsK0NBQStDLEVBQUUsTUFBQSxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsSUFBSSxtQ0FBSSxhQUFhLEVBQUUsSUFBQSxlQUFPLEVBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUgsTUFBTSxPQUFPLEdBQXlCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBQSxPQUFPLENBQUMsV0FBVyxDQUFDLHlCQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxtQ0FBSSxFQUFFLENBQUMsQ0FBQztRQUMzRyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyx5QkFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVJELHdCQVFDO0FBR2tCLHlCQUFPIn0=