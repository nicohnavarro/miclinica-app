import { IUser } from './user';

export interface IMedico extends IUser{
    type:string,
    especialidades:string[],
}