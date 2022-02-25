import express, { Application, Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { BookResolver } from "./resolvers/book";
import { AuthorResolver } from "./resolvers/author";
import { SampleResolver } from "./resolvers/nofication";
import mongoose from "mongoose";
import "reflect-metadata";
import userRouter from "./routes/user.routes";
import { createConnection } from "typeorm";

const app: Application = express();
const PORT: number = 4000;
// test pull
async function startServer() {
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [BookResolver, AuthorResolver, SampleResolver],
        }),
        context: ({ req, res }) => ({ req, res }),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    });
    await apolloServer.start();
    await createConnection()
        .then(() => console.log("connected to mysqldb"))
        .catch((err) => console.log(err));
    apolloServer.applyMiddleware({ app });
}

app.get("/", async (req: Request, res: Response) => {
    res.send(`success`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRouter);
mongoose
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
