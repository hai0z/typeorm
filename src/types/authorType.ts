import { ObjectType, Field, ID } from "type-graphql";

import "reflect-metadata";

import Book from "./bookType";

@ObjectType()
export default class Author {
    @Field(() => ID)
    _id!: string;

    @Field()
    name!: string;

    @Field()
    age!: number;

    @Field(() => [Book])
    books?: Book[];
}
