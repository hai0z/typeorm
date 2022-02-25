"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../entity/user");
const getUsers = async (_, res) => {
    const userRepository = (0, typeorm_1.getRepository)(user_1.User);
    const result = await userRepository.find();
    return res.json(result);
};
exports.getUsers = getUsers;
const getUser = async (req, res) => {
    const { id } = req.params;
    const userRepository = (0, typeorm_1.getRepository)(user_1.User);
    const result = await userRepository.findOne(id);
    return res.json(result);
};
exports.getUser = getUser;
const createUser = async (req, res) => {
    const newUser = (0, typeorm_1.getRepository)(user_1.User).create(req.body);
    const result = await (0, typeorm_1.getRepository)(user_1.User).save(newUser);
    return res.json(result);
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await (0, typeorm_1.getRepository)(user_1.User).findOne(id);
    if (user) {
        (0, typeorm_1.getRepository)(user_1.User).merge(user, req.body);
        const result = await (0, typeorm_1.getRepository)(user_1.User).save(user);
        return res.json(result);
    }
    return res.status(404).json({ message: "User not found" });
};
exports.updateUser = updateUser;
