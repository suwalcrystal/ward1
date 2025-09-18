import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class UserController {
  async createUser(req: Request, res: Response) {
    const userData = req.body;
    console.log(userData);
    const user = await prisma.user.create({
      data: {
        email: userData.email,
        name: userData.name,
        password: userData.password,
      },
    });
    res.status(200).json(user);
  }

  getUsers(req: Request, res: Response) {
    res.status(200).json({});
  }

  getUserById(req: Request, res: Response) {
    res.status(200).json({});
  }
}

export default new UserController();
