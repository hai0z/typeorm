import { getRepository } from "typeorm";
import { User } from "../entity/user";
import { Request, Response } from "express";

export const getUsers = async (_: Request, res: Response): Promise<Response> => {
    const userRepository = getRepository(User);
    const result = await userRepository.find();
    return res.json(result);
};

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const userRepository = getRepository(User);
    const result = await userRepository.findOne(id);
    return res.json(result);
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const newUser = getRepository(User).create(req.body);
    const result = await getRepository(User).save(newUser);
    return res.json(result);
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const user = await getRepository(User).findOne(id);
    if (user) {
        getRepository(User).merge(user, req.body);
        const result = await getRepository(User).save(user);
        return res.json(result);
    }
    return res.status(404).json({ message: "User not found" });
};

export const getPhotos = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const userRepository = getRepository(User);
    const data = await userRepository.find({
        relations: ["photos", "posts"],
        where: { id },
    });
    return res.json(data);
};
