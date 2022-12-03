// importing modules
import IUser from './iuser';


/*
* Abstract class: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class). 
* Abstract method: can only be used in an abstract class, and it does not have a body. 
* The body is provided by the subclass (inherited from).
*/

export default abstract class Human implements IUser{
    public name: string;
    public age?: number;
    constructor(name: string){
        this.name = name;
    }

    abstract addPower(power: string): void;

    abstract listPowers(): string[];
}