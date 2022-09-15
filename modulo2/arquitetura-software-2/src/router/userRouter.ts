import { UserController } from './../controller/UserController';
import {Router} from 'express'
import { UserBusiness } from '../business/UserBusiness';
import { UserDatabase } from '../database/UserDatabase';
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';
import { HashManager } from '../services/HashManager';

export const userRouter = Router()

const userController = new UserController(
  new UserBusiness(
    new UserDatabase(),
    new Authenticator(),
    new IdGenerator(),
    new HashManager()
  )
)

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.get("/", userController.getUsers)
userRouter.delete("/:id", userController.deleteUser)
userRouter.put("/:id", userController.editUser)