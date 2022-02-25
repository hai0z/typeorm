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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleResolver = void 0;
const graphql_subscriptions_1 = require("graphql-subscriptions");
const type_graphql_1 = require("type-graphql");
const noficationType_1 = require("../types/noficationType");
let SampleResolver = class SampleResolver {
    constructor() {
        this.autoIncrement = 0;
    }
    currentDate() {
        return new Date();
    }
    async pubSubMutation(pubSub, message) {
        const payload = { id: ++this.autoIncrement, message };
        await pubSub.publish("NOTIFICATIONS", payload);
        return true;
    }
    async publisherMutation(publish, message) {
        await publish({ id: ++this.autoIncrement, message });
        return true;
    }
    normalSubscription({ id, message }) {
        return { id, message, date: new Date() };
    }
    subscriptionWithFilter({ id, message }) {
        const newNotification = { id, message, date: new Date() };
        return newNotification;
    }
    async pubSubMutationToDynamicTopic(pubSub, topic, message) {
        const payload = { id: ++this.autoIncrement, message };
        await pubSub.publish(topic, payload);
        return true;
    }
    subscriptionWithFilterToDynamicTopic(topic, { id, message }) {
        return { id, message, date: new Date() };
    }
};
__decorate([
    (0, type_graphql_1.Query)((returns) => Date),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SampleResolver.prototype, "currentDate", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Boolean),
    __param(0, (0, type_graphql_1.PubSub)()),
    __param(1, (0, type_graphql_1.Arg)("message", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_subscriptions_1.PubSubEngine, String]),
    __metadata("design:returntype", Promise)
], SampleResolver.prototype, "pubSubMutation", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Boolean),
    __param(0, (0, type_graphql_1.PubSub)("NOTIFICATIONS")),
    __param(1, (0, type_graphql_1.Arg)("message", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, String]),
    __metadata("design:returntype", Promise)
], SampleResolver.prototype, "publisherMutation", null);
__decorate([
    (0, type_graphql_1.Subscription)({ topics: "NOTIFICATIONS" }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", noficationType_1.Notification)
], SampleResolver.prototype, "normalSubscription", null);
__decorate([
    (0, type_graphql_1.Subscription)((returns) => noficationType_1.Notification, {
        topics: "NOTIFICATIONS",
        filter: ({ payload }) => payload.id % 2 === 0,
    }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SampleResolver.prototype, "subscriptionWithFilter", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Boolean),
    __param(0, (0, type_graphql_1.PubSub)()),
    __param(1, (0, type_graphql_1.Arg)("topic")),
    __param(2, (0, type_graphql_1.Arg)("message", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_subscriptions_1.PubSubEngine, String, String]),
    __metadata("design:returntype", Promise)
], SampleResolver.prototype, "pubSubMutationToDynamicTopic", null);
__decorate([
    (0, type_graphql_1.Subscription)({
        topics: ({ args }) => args.topic,
    }),
    __param(0, (0, type_graphql_1.Arg)("topic")),
    __param(1, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", noficationType_1.Notification)
], SampleResolver.prototype, "subscriptionWithFilterToDynamicTopic", null);
SampleResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], SampleResolver);
exports.SampleResolver = SampleResolver;
