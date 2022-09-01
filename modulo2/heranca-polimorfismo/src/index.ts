import e from "cors";

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): void {
		console.log(this.id)
	}

	public getEmail(): void {
		console.log(this.email)
	}

	public getName(): void {
		console.log(this.name)
	}
}

const user1 = new User ('1','nanda@gmail.com','fernanda','1234')

// user1.getEmail()
// user1.getName()
// user1.getId()

// a) Seria possível imprimir a senha (password) atrelada a essa instância?
// nao, pois nao há funcoes de pegar a senha. 

// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// somente uma vez.

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): void {
    console.log(this.creditCard)
  }
}
const costumer1 = new Customer ('1','nanda@gmail.com','fernanda','1234','1.200')
const costumer2 = new Customer ('2','n@gmail.com','fer','12','5.200')

// a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
// somente 1 vez. 

// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
//uma vez. 
//1 vez, como tem o extends ele utiliza o construtor da classe User.

costumer1.getCreditCard()
costumer1.getEmail()
costumer1.getId()
costumer1.getName()



