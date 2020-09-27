/**
 * @function
 * @description Deep clone of anything.
 * @param {object} instance The thing instance you want to clone.
 * @param {number} deep The deep of function
 * @returns {object} A new cloned instance.
 */
export declare function clone<T>(instance: T, deep?: number): (T | any[])