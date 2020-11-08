import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.scss']
})
export class StepperFormComponent implements OnInit {

  @Output() usuario_registrado:EventEmitter<User> = new EventEmitter<User>();
  imagen_uno: string = '../../../assets/img/user.png';
  subirImagen_uno;

  obtieneImagen_uno(e) {
    this.imagen_uno = e.result;
  }
  archivoSubir_uno(e) {
    this.subirImagen_uno = e;
  }
  imagen_dos: string = '../../../assets/img/user.png';
  subirImagen_dos;

  obtieneImagen_dos(e) {
    this.imagen_dos = e.result;
  }
  archivoSubir_dos(e) {
    this.subirImagen_dos = e;
  }
  //#region  FormControls
  nombreFormCtrl: FormControl;
  apellidoFormCtrl: FormControl;
  edadFormCtrl: FormControl;
  domicilioFormCtrl: FormControl;

  emailFormCtrl: FormControl;
  claveFormCtrl: FormControl;

  especialidadFormCtrl: FormControl;
  //#endregion

  tipoUsuario: string;
  tiposUsuarios: string[] = ['Paciente', 'Medico'];
  especialidades: string[] = ['Cardiologia', 'Clinica', 'Traumatologia', 'Neurologia', 'Urologia', 'Pediatria', 'Odontologia', 'Reumatologia', 'Neonatologia', 'Psiquiatria'];
  hide = true;
  cargando = false;
  usuario: User;

  datosPersonalesFormGroup: FormGroup;
  datosCuentaFormGroup: FormGroup;
  datosTipoFormGroup: FormGroup;
  constructor() {
    this.usuario = new User();
    this.datosPersonalesFormGroup = new FormGroup({});
    this.datosTipoFormGroup = new FormGroup({});
    this.datosCuentaFormGroup = new FormGroup({});
    this.nombreFormCtrl = new FormControl('', [Validators.required]);
    this.apellidoFormCtrl = new FormControl('', [Validators.required]);
    this.edadFormCtrl = new FormControl('', [Validators.required]);
    this.domicilioFormCtrl = new FormControl('', [Validators.required]);
    this.datosPersonalesFormGroup.addControl('nombre', this.nombreFormCtrl);
    this.datosPersonalesFormGroup.addControl('apellido', this.apellidoFormCtrl);
    this.datosPersonalesFormGroup.addControl('edad', this.edadFormCtrl);
    this.datosPersonalesFormGroup.addControl('domicilio', this.domicilioFormCtrl);

    this.emailFormCtrl = new FormControl('', [Validators.required, Validators.email]);
    this.claveFormCtrl = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.datosCuentaFormGroup.addControl('email', this.emailFormCtrl);
    this.datosCuentaFormGroup.addControl('clave', this.claveFormCtrl);
    this.especialidadFormCtrl = new FormControl('');
    this.datosTipoFormGroup.addControl('especialidad', this.especialidadFormCtrl);
  }

  ngOnInit(): void {

  }

  EnviarRegistro() {
    this.CrearUsuario();
    this.usuario_registrado.emit(this.usuario);
  }

  LimpiarCampos() {
    this.datosPersonalesFormGroup.reset();
    //this.datosCuentaFormGroup.reset();
    this.claveFormCtrl.setValue('');
    this.emailFormCtrl.setValue('');
    this.datosTipoFormGroup.reset();
    this.imagen_uno = '../../../assets/img/user.png';
    this.imagen_dos = '../../../assets/img/user.png';
    this.tipoUsuario = '';
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  CrearUsuario() {
    this.usuario.name = this.nombreFormCtrl.value;
    this.usuario.surname = this.apellidoFormCtrl.value;
    this.usuario.age = this.edadFormCtrl.value;
    this.usuario.mail = this.emailFormCtrl.value;
    this.usuario.password = this.claveFormCtrl.value;
    this.usuario.address = this.domicilioFormCtrl.value;
    this.usuario.first_image = this.subirImagen_uno;
    this.usuario.second_image = this.imagen_dos;
  }
}
