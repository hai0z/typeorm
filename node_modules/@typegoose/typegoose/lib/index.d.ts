import type { BeAnObject, IndexOptions } from './types';
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
export declare function index<T extends BeAnObject = BeAnObject>(fields: Partial<Record<keyof T, string | -1 | 1>>, options?: IndexOptions<T>): ClassDecorator;
export { index as Index };
