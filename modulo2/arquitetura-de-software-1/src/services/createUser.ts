import { User } from '../model/User';
import connection from '../database/connection'

 export const criarUsuario = async (name: string, email: string, password: string ) => {

    const user = new User(name, email, password )

    await connection.insert(
        {   id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
        }
    ).into('Arq_Users')
}
