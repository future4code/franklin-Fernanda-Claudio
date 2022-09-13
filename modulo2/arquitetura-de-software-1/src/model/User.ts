import { idGenerator } from "../services/IdGenerator";

export  class User {
    public id: any;
    public name: string;
    public email: string;
    public password: string;

    constructor(
        name: string,
        email: string,
        password: string,
    ){
        this.id = idGenerator();
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getEmail = () => {
        return this.email
    }

    public getPassword = () => {
        return this.password
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setEmail = (newEmail: string) => {
        this.email = newEmail
    }

    public setPassword = (newPassword: string) => {
        this.password = newPassword
    }
}