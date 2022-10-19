import { Product } from '../model/product'
import connection from '../database/connection'

 export const createProduct = async (name: string, tag: string, url: string ) => {

    const product = new Product(name, tag, url)

    return await connection('Products').insert(
        { 
           name: product.name,
            tag: product.tag,
            url: product.url,
        }
    )
}


