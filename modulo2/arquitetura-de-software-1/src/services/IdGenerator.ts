import { v4 } from "uuid"

export const idGenerator = () => {
    const id = v4();
    return id
}