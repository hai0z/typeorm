"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const book_1 = require("./resolvers/book");
const author_1 = require("./resolvers/author");
const nofication_1 = require("./resolvers/nofication");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 4000;
async function startServer() {
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [book_1.BookResolver, author_1.AuthorResolver, nofication_1.SampleResolver],
        }),
        context: ({ req, res }) => ({ req, res }),
        // plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
app.get("/", async (req, res) => {
    const useState = (initValue) => {
        let value = initValue;
        return [value, (v) => (value = v)];
    };
    const pluck = (item, key) => {
        return item.map((item) => item[key]);
    };
    return;
});
mongoose_1.default
    .connect("mongodb://localhost/graphql")
    .then(() => {
    startServer();
    console.log("connected to database");
})
    .catch((err) => console.log(err));
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
    console.log(`graphql playground at http://localhost:${PORT}/graphql`);
});
