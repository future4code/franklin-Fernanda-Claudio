import { v4 } from "uuid";

export class IdGenerator {
  generatorId = () => {
  return v4()
  }
}