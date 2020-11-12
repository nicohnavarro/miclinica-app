import { Especialidades } from '../utils/especialidades.enum';
import { IMedico } from './medico';
import { IPaciente } from './paciente';

export interface ITurno {
    id?:string,
    paciente?:IPaciente,
    medico:IMedico,
    fecha:string,
    hora:string,
    resena?:string,
    encuesta?:string,
    especialidad:Especialidades

    
}