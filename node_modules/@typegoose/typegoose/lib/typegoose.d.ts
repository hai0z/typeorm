import * as mongoose from 'mongoose';
import 'reflect-metadata';
import { setGlobalOptions } from './globalOptions';
import type { AnyParamConstructor, BeAnObject, DocumentType, IModelOptions, Ref, ReturnModelType } from './types';
export { mongoose, setGlobalOptions };
export { setLogLevel, LogLevels } from './logSettings';
export * from './prop';
export * from './hooks';
export * from './plugin';
export * from './index';
export * from './modelOptions';
export * from './queryMethod';
export * from './typeguards';
export * as defaultClasses from './defaultClasses';
export * as errors from './internal/errors';
export * as types from './types';
export { DocumentType, Ref, ReturnModelType };
export { getClassForDocument, getClass, getName } from './internal/utils';
export { Severity } from './internal/constants';
/**
 * Get a Model for a Class
 * @param cl The uninitialized Class
 * @returns The Model
 * @public
 * @example
 * ```ts
 * class ClassName {}
 *
 * const NameModel = getModelForClass(ClassName);
 * ```
 */
export declare function getModelForClass<U extends AnyParamConstructor<any>, QueryHelpers = BeAnObject>(cl: U, options?: IModelOptions): ReturnModelType<U, QueryHelpers>;
/**
 * Get Model from internal cache
 * @param key ModelName key
 * @example
 * ```ts
 * class ClassName {}
 * getModelForClass(ClassName); // build the model
 * const NameModel = getModelWithString<typeof ClassName>("ClassName");
 * ```
 */
export declare function getModelWithString<U extends AnyParamConstructor<any>>(key: string): undefined | ReturnModelType<U>;
/**
 * Generates a Mongoose schema out of class props, iterating through all parents
 * @param cl The not initialized Class
 * @returns Returns the Build Schema
 * @example
 * ```ts
 * class ClassName {}
 * const NameSchema = buildSchema(ClassName);
 * const NameModel = mongoose.model("Name", NameSchema);
 * ```
 */
export declare function buildSchema<U extends AnyParamConstructor<any>>(cl: U, options?: mongoose.SchemaOptions, overwriteOptions?: IModelOptions): mongoose.Schema<DocumentType<InstanceType<U>>>;
/**
 * This can be used to add custom Models to Typegoose, with the type information of cl
 * Note: no gurantee that the type information is fully correct
 * @param model The model to store
 * @param cl The Class to store
 * @param options? Optional param for existingMongoose or existingConnection
 * @example
 * ```ts
 * class ClassName {}
 *
 * const schema = buildSchema(ClassName);
 * // modifications to the schame can be done
 * const model = addModelToTypegoose(mongoose.model("Name", schema), ClassName);
 * ```
 */
export declare function addModelToTypegoose<U extends AnyParamConstructor<any>, QueryHelpers = BeAnObject>(model: mongoose.Model<any>, cl: U, options?: {
    existingMongoose?: mongoose.Mongoose;
    existingConnection?: any;
}): ReturnModelType<U, QueryHelpers>;
/**
 * Deletes an existing model so that it can be overwritten with another model
 * (deletes from mongoose.connection & typegoose models cache & typegoose constructors cache)
 * @param key
 * @example
 * ```ts
 * class ClassName {}
 * const NameModel = getModelForClass(ClassName);
 * deleteModel("ClassName");
 * ```
 */
export declare function deleteModel(name: string): void;
/**
 * Delete a model, with the given class
 * Same as "deleteModel", only that it can be done with the class instead of the name
 * @param cl The Class
 * @example
 * ```ts
 * class ClassName {}
 * const NameModel = getModelForClass(ClassName);
 * deleteModelWithClass(ClassName);
 * ```
 */
export declare function deleteModelWithClass<U extends AnyParamConstructor<any>>(cl: U): void;
/**
 * Build a Model from a given class and return the model
 * @param from The Model to build From
 * @param cl The Class to make a model out
 * @param value The Identifier to use to differentiate documents (default: cl.name)
 * @example
 * ```ts
 * class Class1 {}
 * class Class2 extends Class1 {}
 *
 * const Class1Model = getModelForClass(Class1);
 * const Class2Model = getDiscriminatorModelForClass(Class1Model, Class1);
 * ```
 */
export declare function getDiscriminatorModelForClass<U extends AnyParamConstructor<any>, QueryHelpers = BeAnObject>(from: mongoose.Model<any>, cl: U, value?: string): ReturnModelType<U, QueryHelpers>;
/**
 * Use this class if raw mongoose for this path is wanted
 * It is still recommended to use the typegoose classes directly
 * @see Using `Passthrough`, the paths created will also result as an `Schema` (since mongoose 6.0), see {@link https://github.com/Automattic/mongoose/issues/7181 Mongoose#7181}
 * @example
 * ```ts
 * class Dummy {
 *   @prop({ type: () => new Passthrough({ somePath: String }) })
 *   public somepath: { somePath: string };
 * }
 *
 * class Dummy {
 *   @prop({ type: () => new Passthrough({ somePath: String }, true) })
 *   public somepath: { somePath: string };
 * }
 * ```
 */
export declare class Passthrough {
    raw: any;
    direct: boolean;
    /**
     * Use this like `new mongoose.Schema()`
     * @param raw The Schema definition
     * @param direct Directly insert "raw", instead of using "type" (this will not apply any other inner options)
     */
    constructor(raw: any, direct?: boolean);
}
