"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isModel = exports.isRefTypeArray = exports.isRefType = exports.isDocumentArray = exports.isDocument = void 0;
const mongoose = require("mongoose");
const utils_1 = require("./internal/utils");
const logSettings_1 = require("./logSettings");
/**
 * Check if the given document is already populated
 * @param doc The Ref with uncertain type
 */
function isDocument(doc) {
    return doc instanceof mongoose.Model;
}
exports.isDocument = isDocument;
function isDocumentArray(docs) {
    // its "any" & "unkown" because this is not listed as an overload
    return Array.isArray(docs) && docs.every((v) => isDocument(v));
}
exports.isDocumentArray = isDocumentArray;
/**
 * Check if the document is not undefined/null and is not an document
 * @param doc The Ref with uncretain type
 */
function isRefType(doc, reftype) {
    logSettings_1.logger.info('isRefType:', reftype);
    if ((0, utils_1.isNullOrUndefined)(doc) || isDocument(doc)) {
        return false;
    }
    // this "ObjectId" test is in the front, because its the most common - to lower resource use
    if (reftype === mongoose.Types.ObjectId) {
        return doc instanceof mongoose.Types.ObjectId;
    }
    if (reftype === String) {
        return typeof doc === 'string';
    }
    if (reftype === Number) {
        return typeof doc === 'number';
    }
    if (reftype === Buffer || reftype === mongoose.Types.Buffer) {
        return doc instanceof Buffer;
    }
    return false;
}
exports.isRefType = isRefType;
function isRefTypeArray(docs, reftype) {
    // its "any" & "unkown" because this is not listed as an overload
    return Array.isArray(docs) && docs.every((v) => isRefType(v, reftype));
}
exports.isRefTypeArray = isRefTypeArray;
/**
 * Check if the input is a mongoose.Model
 * @param model The Value to check
 */
function isModel(model) {
    return (model === null || model === void 0 ? void 0 : model.prototype) instanceof mongoose.Model;
}
exports.isModel = isModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWd1YXJkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlZ3VhcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyw0Q0FBcUQ7QUFDckQsK0NBQXVDO0FBR3ZDOzs7R0FHRztBQUNILFNBQWdCLFVBQVUsQ0FBdUIsR0FBYztJQUM3RCxPQUFPLEdBQUcsWUFBWSxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQ3ZDLENBQUM7QUFGRCxnQ0FFQztBQVVELFNBQWdCLGVBQWUsQ0FBQyxJQUFpQztJQUMvRCxpRUFBaUU7SUFDakUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFIRCwwQ0FHQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLFNBQVMsQ0FBdUIsR0FBMEIsRUFBRSxPQUF3QjtJQUNsRyxvQkFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFbkMsSUFBSSxJQUFBLHlCQUFpQixFQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUM3QyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsNEZBQTRGO0lBQzVGLElBQUksT0FBTyxLQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQ3ZDLE9BQU8sR0FBRyxZQUFZLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0tBQy9DO0lBQ0QsSUFBSSxPQUFPLEtBQUssTUFBTSxFQUFFO1FBQ3RCLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0tBQ2hDO0lBQ0QsSUFBSSxPQUFPLEtBQUssTUFBTSxFQUFFO1FBQ3RCLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0tBQ2hDO0lBQ0QsSUFBSSxPQUFPLEtBQUssTUFBTSxJQUFJLE9BQU8sS0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUMzRCxPQUFPLEdBQUcsWUFBWSxNQUFNLENBQUM7S0FDOUI7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUF0QkQsOEJBc0JDO0FBV0QsU0FBZ0IsY0FBYyxDQUFDLElBQWlDLEVBQUUsT0FBd0I7SUFDeEYsaUVBQWlFO0lBQ2pFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDekUsQ0FBQztBQUhELHdDQUdDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFDLEtBQVU7SUFDaEMsT0FBTyxDQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxTQUFTLGFBQVksUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNwRCxDQUFDO0FBRkQsMEJBRUMifQ==