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
exports.AuthorResolver = void 0;
const type_graphql_1 = require("type-graphql");
const authorType_1 = __importDefault(require("../types/authorType"));
const bookType_1 = __importDefault(require("../types/bookType"));
const author_1 = __importDefault(require("../model/author"));
const book_1 = __importDefault(require("../model/book"));
let AuthorResolver = class AuthorResolver {
    async authors() {
        return await author_1.default.find();
    }
    async author(id) {
        return await author_1.default.findOne({ _id: id }).lean();
    }
    async books(author) {
        return await book_1.default.find({ authorId: author._id }).lean();
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [authorType_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "authors", null);
__decorate([
    (0, type_graphql_1.Query)(() => authorType_1.default),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "author", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => [bookType_1.default]),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "books", null);
AuthorResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => authorType_1.default)
], AuthorResolver);
exports.AuthorResolver = AuthorResolver;
