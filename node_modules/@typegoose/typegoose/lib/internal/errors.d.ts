export declare class InvalidTypeError extends Error {
    constructor(targetName: string, key: string, Type: unknown);
}
export declare class NotNumberTypeError extends Error {
    constructor(targetName: string, key: string, enumKey: string, enumValue: string);
}
export declare class NotStringTypeError extends Error {
    constructor(targetName: string, key: string, enumKey: string, enumValue: string);
}
/** Not All Virtual Populate Elements Error */
export declare class NotAllVPOPElementsError extends Error {
    constructor(name: string, key: string);
}
export declare class NoValidClassError extends TypeError {
    constructor(cl: unknown);
}
export declare class AssertionFallbackError extends Error {
    constructor();
}
/** Error for when an unknown WhatIsIt is passed to an switch, gets thrown in the default case */
export declare class InvalidWhatIsItError extends Error {
    constructor(whatisit: unknown, name: string, key: string, where: string);
}
export declare class CannotBeSymbolError extends Error {
    constructor(name: string, key: string | symbol);
}
export declare class SelfContainingClassError extends TypeError {
    constructor(name: string, key: string);
}
export declare class OptionRefDoesNotSupportArraysError extends TypeError {
    constructor(dim: number, name: string, key: string);
}
export declare class RefOptionIsUndefinedError extends Error {
    constructor(name: string, key: string);
}
export declare class NotValidModelError extends TypeError {
    constructor(model: unknown, where: string);
}
export declare class FunctionCalledMoreThanSupportedError extends Error {
    constructor(functionName: string, supported: number, extra: string);
}
export declare class StringLengthExpectedError extends TypeError {
    constructor(length: number, got: any, where: string, valueName: string);
}
