import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {

  miFormulario: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.miFormulario = this.crearFormulario();
  }

  guardarDatos() {
    console.log(this.miFormulario.value)
  }

  private crearFormulario() {
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
  }
}