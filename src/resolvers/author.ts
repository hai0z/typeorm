import { Query, FieldResolver, Resolver, Arg, Root, Subscription } from "type-graphql";
import authorType from "../types/authorType";
import bookType from "../types/bookType";
import authorModel from "../model/author";
import bookModel from "../model/book";

@Resolver(() => authorType)
export class AuthorResolver {
    @Query(() => [authorType])
    async authors() {
        return await authorModel.find();
    }
    @Query(() => authorType)
    async author(@Arg("id") id: string) {
        return await authorModel.findOne({ _id: id }).lean();
    }

    @FieldResolver(() => [bookType])
    async books(@Root() author: { _id: string }) {
        return await bookModel.find({ authorId: author._id }).lean();
    }
}
