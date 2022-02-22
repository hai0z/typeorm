"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
const type_graphql_1 = require("type-graphql");
require("reflect-metadata");
const book_1 = __importDefault(require("../model/book"));
const author_1 = __importDefault(require("../model/author"));
const bookType_1 = __importDefault(require("../types/bookType"));
const authorType_1 = __importDefault(require("../types/authorType"));
let BookResolver = class BookResolver {
    async books() {
        return await book_1.default.find().lean();
    }
    async book(id) {
        return await book_1.default.findOne({ _id: id }).lean();
    }
    async author(book) {
        return await author_1.default.findOne({ _id: book.authorId }).lean();
    }
    async createBook(name, genre, authorId) {
        const newBook = new book_1.default({ name, genre, authorId });
        return await newBook.save();
    }
    newNotification(payload) {
        return payload;
    }
    async sendMessage(name, pubsub) {
        pubsub.publish("NOTIFICATIONS", name);
        return name;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [bookType_1.default], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "books", null);
__decorate([
    (0, type_graphql_1.Query)(() => bookType_1.default),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "book", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => authorType_1.default),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "author", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => bookType_1.default),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __param(1, (0, type_graphql_1.Arg)("genre")),
    __param(2, (0, type_graphql_1.Arg)("authorId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "createBook", null);
__decorate([
    (0, type_graphql_1.Subscription)({ topics: "NOTIFICATIONS" }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], BookResolver.prototype, "newNotification", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __param(1, (0, type_graphql_1.PubSub)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, type_graphql_1.PubSubEngine]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "sendMessage", null);
BookResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => bookType_1.default)
], BookResolver);
exports.BookResolver = BookResolver;
