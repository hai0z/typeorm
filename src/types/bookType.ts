import { ObjectType, Field, ID } from "type-graphql";
import "reflect-metadata";
import Author from "./authorType";

@ObjectType()
export default class Book {
    @Field(() => ID)
    _id!: string;

    @Field(() => String)
    name!: string;

    @Field(() => String)
    genre!: string;

    @Field(() => String)
    authorId!: string;

    @Field(() => Author)
    author!: Author;
}
