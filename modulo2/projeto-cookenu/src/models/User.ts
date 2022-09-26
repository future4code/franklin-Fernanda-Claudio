export interface IUserDB {
  id: string,
  name: string,
  email: string,
  password: string,
}

export class User {
  constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string,
  ) {}

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