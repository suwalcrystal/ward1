import { Request, Response } from "express";

class UserController {
  createUser(req: Request, res: Response) {
    console.log(req.body);
    res.status(200).json({});
  }

  getUsers(req: Request, res: Response) {
    res.status(200).json({});
  }

  getUserById(req: Request, res: Response) {
    res.status(200).json({});
  }
}

export default new UserController();
