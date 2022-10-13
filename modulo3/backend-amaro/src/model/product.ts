
export  class Product {

    public name: string;
    public tag: string;
    public url: string;

    constructor(

        name: string,
        tag: string,
        url: string,
    ){    
        this.tag = tag
        this.name = name;
        this.url = url;
    }

    public getName = () => {
        return this.name
    }

    public getTag = () => {
        return this.tag
    }
    public getUrl = () => {
        return this.url
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setTag = (newTag: string) => {
        this.tag = newTag
    }
}