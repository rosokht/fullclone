"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = void 0;
/**
 * @function
 * @description Deep clone of anything.
 * @param {object} instance The thing instance you want to clone.
 * @param {number} deep The deep of function
 * @returns {object} A new cloned instance.
 */
function clone(instance, deep) {
    if (deep === void 0) { deep = 1; }
    if (deep < 0)
        return instance;
    try {
        if (Array.isArray(instance)) {
            return instance.map(function (item) { return clone(item, deep - 1); });
        }
        else if (typeof instance === 'object') {
            if (instance) {
                var temp_1;
                // @ts-ignore
                if (instance.constructor) {
                    try {
                        temp_1 = Object.assign(Object.create(
                        // Set the prototype of the new object to the prototype of the instance.
                        // Used to allow new object behave like class instance.
                        Object.getPrototypeOf(instance)), 
                        // Prevent shallow copies of nested structures like arrays, etc
                        JSON.parse(JSON.stringify(instance)));
                    }
                    catch (e) {
                        temp_1 = Object.assign(Object.create(
                        // Set the prototype of the new object to the prototype of the instance.
                        // Used to allow new object behave like class instance.
                        Object.getPrototypeOf(instance)), 
                        // Prevent shallow copies of nested structures like arrays, etc
                        instance);
                    }
                }
                else {
                    temp_1 = JSON.parse(JSON.stringify(instance));
                }
                Object.keys(instance).forEach(function (item) {
                    // @ts-ignore
                    temp_1[item] = clone(instance[item], deep - 1);
                });
                Object.getOwnPropertySymbols(instance).forEach(function (symbol) {
                    // @ts-ignore
                    temp_1[symbol] = instance[symbol];
                });
                return temp_1;
            }
            else {
                return instance;
            }
        }
        else {
            return instance;
        }
    }
    catch (e) {
        // console.error(e)
        return instance;
    }
}
exports.clone = clone;
