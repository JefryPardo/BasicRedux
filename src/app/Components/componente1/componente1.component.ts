import { Component, OnInit } from '@angular/core';
import { TerminalFacade } from 'src/app/facades/terminal.facade';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IFormModel } from 'src/app/models/form-model';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class Componente1Component implements OnInit {

  form    : FormGroup;

  constructor(
    private terminalFacade: TerminalFacade,
    private fb: FormBuilder,
    ) { 

    this.form = this.inicializarFormLogin();
  }

  ngOnInit(): void {
  }

  inicializarFormLogin(): FormGroup {

    return this.fb.group({
      'correo':   new FormControl('', Validators.compose([Validators.required, ,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])),
    });
  }

  save() {

    console.log("entro: ",this.form.value.correo);
    console.log(this.form.invalid);

    if(this.form.invalid) {

      return;
    }

    console.log(this.form.value.correo);

    this.terminalFacade.setDataFormCorreo(this.form.value.correo);

  }

}
