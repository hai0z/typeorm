import { prop, getModelForClass } from "@typegoose/typegoose";

class Book {
    @prop()
    public name?: string;

    @prop()
    public genre?: string;

    @prop()
    public authorId?: string;
}

const BookModel = getModelForClass(Book);

export default BookModel;
