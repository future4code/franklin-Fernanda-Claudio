//exercicio 1

// a - o new chama a funcao construtora. 
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getName():void{
     console.log(this.name)
    }
    
    public setterName( newName:string ):void{
    this.name = newName
    }

    public setTransaction(newTransaction:Transaction):void{
        this.transactions.push(newTransaction)
    }
    public getTransaction():void{
        console.log(this.transactions)
    }
  }

// b - crie uma instância dessa classe 
//r: foi chamado somente 1 vez.
const fernanda = new UserAccount("88079930049", "Fernanda",21)

//c - para ter acesso a propriedades privadas temos os métodos getters(pegar) e setters(modificar) 

// pega nome
fernanda.getName()
//modifica
fernanda.setterName("Fernanda da Silva")
//verifica se foi alterado chamando novamente
fernanda.getName()
fernanda.getTransaction()

//exercicio 2

class Transaction {
    private description: string;
    private value: number;
    private date: string;
    constructor(
        description: string,
        value: number,
        date: string,
     ) {
        this.description = description;
        this.value = value;
        this.date = date;
     }
        public getValue():void{
        console.log(this.value)
    }
    public getDescription():void{
        console.log(this.description)
    }
       
        public setterDescription( newDescription:string )     :void  {
       this.description = newDescription
    }
    
  }

  const newTransaction = new Transaction("primeira", 50,"22-5-2022")
  fernanda.setTransaction(newTransaction)
  newTransaction.getValue()
  newTransaction.setterDescription("primeira transicao")

//exercicio 3

class Bank {
    private accounts: UserAccount[] = [];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    public getAcconts(): void {
        console.log(this.accounts)
    }
    public setAcconts(newAccount:UserAccount):void{
        this.accounts.push(newAccount)
    }
}

const contaFernanda = new Bank([])
contaFernanda.getAcconts()




