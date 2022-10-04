
export  class Product {
    public id: any;
    public name: string;
    public tag: string;

    constructor(
        id: number,
        name: string,
        tag: string,
    ){    
        this.id = id
        this.tag = tag
        this.name = name;
    }

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getTag = () => {
        return this.tag
    }
    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setTag = (newTag: string) => {
        this.tag = newTag
    }
}