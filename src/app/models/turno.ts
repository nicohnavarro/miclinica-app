import { IMedico } from './medico';
import { IPaciente } from './paciente';

export interface ITurno {
    id?:string,
    paciente:IPaciente,
    medico:IMedico,
    fecha:Date,
    resena:string,
    encuesta:string

    
}