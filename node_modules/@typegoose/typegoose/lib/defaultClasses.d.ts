import type { Types } from 'mongoose';
import type { AnyParamConstructor, DocumentType, RefType } from './types';
export declare abstract class TimeStamps {
    createdAt?: Date;
    updatedAt?: Date;
}
/**
 * This Interface can be used when "_id" and "id" need to be defined in types
 */
export interface Base<IDType extends RefType = Types.ObjectId> {
    _id: IDType;
    /**
     * This getter/setter dosnt exist if "schemaOptions.id" being set to "false"
     */
    id: string;
}
export interface FindOrCreateResult<T> {
    created: boolean;
    doc: DocumentType<T>;
}
/**
 * This class contains all types for the module "mongoose-findorcreate"
 */
export declare abstract class FindOrCreate {
    static findOrCreate: <T extends FindOrCreate>(this: AnyParamConstructor<T>, condition: any, createWith?: any) => Promise<FindOrCreateResult<T>>;
}
