
// Interfaces in TypeScript. This interface is being implemented in the classes in app.ts.
export default interface IUser {
    name: string;
    age?: number;
    address?: string;  // An optional variable in TypeScript.
    [property: string]: any 
}
