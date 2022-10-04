import { Product } from '../model/product'
import connection from '../database/connection'

 export const criarProduto = async (id: number, name: string, tag: string ) => {

    const product = new Product(id, name, tag )

    return await connection('Products').insert(
        {   id: product.id,
           name: product.name,
            tag: product.tag,
        }
    )
}
