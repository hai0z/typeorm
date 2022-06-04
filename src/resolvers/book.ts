import {
    Arg,
    Query,
    Resolver,
    Mutation,
    Root,
    FieldResolver,
    PubSub,
    Subscription,
    PubSubEngine,
} from "type-graphql";
import "reflect-metadata";
import bookModel from "../model/book";
import authorModel from "../model/author";
import bookType from "../types/bookType";
import authorType from "../types/authorType";

@Resolver(() => bookType)
export class BookResolver {
    @Query(() => [bookType], { nullable: true })
    async books() {
        return await bookModel.find().lean();
    }

    @Query(() => bookType)
    async book(@Arg("id") id: string) {
        return await bookModel.findOne({ _id: id }).lean();
    }

    @FieldResolver(() => authorType)
    async author(@Root() book: { authorId: string }): Promise<authorType> {
        return await authorModel.findOne({ _id: book.authorId }).lean();
    }

    @Mutation(() => bookType)
    async createBook(
        @Arg("name") name: string,
        @Arg("genre") genre: string,
        @Arg("authorId") authorId: string
    ) {
        const newBook = new bookModel({ name, genre, authorId });
        return await newBook.save();
    }

    @Mutation(() => bookType)
    async updateBook(
        @Arg("id") id: string,
        @Arg("name") name: string,
        @Arg("genre") genre: string
    ) {
        return await bookModel.findByIdAndUpdate(
            id,
            { name, genre },
            { new: true }
        );
    }
    @Mutation(() => bookType)
    async deleteBook(@Arg("id") id: string) {
        return await bookModel.findByIdAndDelete(id);
    }

    @Subscription({ topics: "NOTIFICATIONS" })
    newNotification(@Root() payload: string): string {
        return payload;
    }

    @Mutation(() => String)
    async sendMessage(
        @Arg("name") name: string,
        @PubSub() pubsub: PubSubEngine
    ): Promise<string> {
        pubsub.publish("NOTIFICATIONS", name);
        return name;
    }
}
