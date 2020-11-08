export interface IUser {
    id?:string,
    mail:string,
    password:string,
    address:string,
    name:string,
    surname:string,
    first_image:string,
    second_image:string,
    age:number,
}

export class User implements IUser {
    id: string;
    mail: string;
    password: string;
    address: string;
    name: string;
    surname: string;
    first_image: string;
    second_image: string;
    age: number;
    type:string;
    especializaciones?:string[];

    constructor(){
        this.especializaciones=[];
    }
}