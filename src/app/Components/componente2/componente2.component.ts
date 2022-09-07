import { Component, OnInit } from '@angular/core';
import { TerminalFacade } from 'src/app/facades/terminal.facade';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IFormModel } from 'src/app/models/form-model';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss']
})
export class Componente2Component implements OnInit {

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
      'password':   new FormControl('', Validators.compose([Validators.required])),
    });
  }

  save() {

    console.log("entro: ",this.form.value.password);
    console.log(this.form.invalid);

    if(this.form.invalid) {

      return;
    }

    

    console.log(this.form.value.password);

    this.terminalFacade.setDataFormPassword(this.form.value.password);

  }
}
