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
import { Post } from "./entity/post";
import { Photo } from "./entity/photo";
import { User } from "./entity/user";

const app: Application = express();
const PORT: number | string = process.env.PORT || 4000;

async function startServer() {
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [BookResolver, AuthorResolver, SampleResolver],
        }),
        context: ({ req, res }) => ({ req, res }),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    });
    await apolloServer.start();
    await createConnection({
        type: "mysql",
        host: "db4free.net",
        port: 3306,
        username: "nguyengochai__",
        password: "J5e+Xud!<6|ZVv*~",
        database: "doan1__",
        entities: [User, Photo, Post],
    }).then(() => console.log("Connected to database"));
    apolloServer.applyMiddleware({ app });
}

app.get("/", async (req: Request, res: Response) => {
    res.send(`wibu`);
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
startServer();
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
    console.log(`graphql playground at http://localhost:${PORT}/graphql`);
});
