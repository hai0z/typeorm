import { prop, getModelForClass } from "@typegoose/typegoose";

class Author {
    @prop()
    public name!: string;

    @prop()
    public age!: number;
}
const AuthorModel = getModelForClass(Author);

export default AuthorModel;
