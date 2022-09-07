import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { RootState } from "../store";
import { FormState } from "../store/form.state";

import * as formSelectors from "../store/form.selectors";
import { IFormModel } from "../models/form-model";

import * as actions from "../store/form-actions";

@Injectable({ providedIn: 'root' })
export class TerminalFacade {

    terminal$: Observable<FormState>;

    constructor(
        private readonly store: Store<RootState>
    ) {

        this.terminal$ = this.store.select(formSelectors.selectForm);
    }

    setDataFormCorreo( correo: string ) {

        this.store.dispatch(actions.formCorreoAction({ correo }));
    }
    
    setDataFormPassword( password: string ) {

        this.store.dispatch(actions.formPasswordAction({ password }));
    }

}