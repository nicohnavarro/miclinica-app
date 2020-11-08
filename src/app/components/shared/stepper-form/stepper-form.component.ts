import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.scss']
})
export class StepperFormComponent implements OnInit {

//#region  FormControls
nombreFormCtrl:FormControl;
apellidoFormCtrl:FormControl;
edadFormCtrl:FormControl;
domicilioFormCtrl:FormControl;

emailFormCtrl:FormControl;
claveFormCtrl:FormControl;

especialidadFormCtrl:FormControl= new FormControl();
//#endregion

tipoUsuario: string;
tiposUsuarios: string[]= ['Paciente','Medico'];
especialidades: string[]= ['Cardiologia','Clinica','Traumatologia'];
hide = true;
cargando = false;  
camposVacios : boolean = true;
usuario:any = null;
imagen1:string = '../../../../assets/user.png';
imagen2:string = '../../../../assets/user.png';
imagen1Subir;
imagen2Subir;

datosPersonalesFormGroup: FormGroup;
datosCuentaFormGroup: FormGroup;
  constructor() { 
    this.datosPersonalesFormGroup = new FormGroup({});
    this.nombreFormCtrl = new FormControl('', [Validators.required]);
    this.apellidoFormCtrl = new FormControl('', [Validators.required]);
    this.edadFormCtrl = new FormControl('', [Validators.required]);
    this.domicilioFormCtrl = new FormControl('', [Validators.required]);
    this.datosPersonalesFormGroup.addControl('nombre',this.nombreFormCtrl);
    this.datosPersonalesFormGroup.addControl('apellido',this.apellidoFormCtrl);
    this.datosPersonalesFormGroup.addControl('edad',this.edadFormCtrl);
    this.datosPersonalesFormGroup.addControl('domicilio',this.domicilioFormCtrl);

    this.datosCuentaFormGroup= new FormGroup({});
    this.emailFormCtrl = new FormControl('', [Validators.required,Validators.email]);
    this.claveFormCtrl = new FormControl('', [Validators.required,Validators.minLength(6)]);
    this.datosCuentaFormGroup.addControl('email',this.emailFormCtrl);
    this.datosCuentaFormGroup.addControl('clave',this.claveFormCtrl);
  }

  ngOnInit(): void {
   
  }

  EnviarRegistro(){
    setTimeout(() => {
      alert('apopsa')
    }, 4000);
    console.log(this.datosPersonalesFormGroup);
    console.log(this.datosCuentaFormGroup);
  }

  MostrarDatos(){

  }
}
