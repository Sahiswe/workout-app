export class Category{

    static counter:number=100006;
    _id: number;
    categoryName: String;

    constructor(){
        Category.counter++;
        this._id=Category.counter;

    }
}