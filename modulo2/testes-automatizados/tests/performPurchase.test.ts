import { performPurchase, User } from "../src"
describe("Testando a função performPurchase", () => {
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Maria ",
            balance: 100
        }
    
        const result = performPurchase(user, 40)
        
        expect(result).toEqual({
            name: "Astrodev",
            balance: 60
        })
    })

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Lorran",
            balance: 50
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Fernanda",
            balance: 30
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).not.toBeDefined()
    })
})
