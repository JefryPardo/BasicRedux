import { FormState } from "./form.state";
import { createReducer, on, Action } from "@ngrx/store";
import * as formActions from "./form-actions";
import { IFormModel } from "../models/form-model";

export const formInitialState: FormState = {
    status          : null,
    loginFormData   : new IFormModel(),
    isLoading       : false,
    isError         : null
}

export const formReducerInternal = createReducer(
    
    formInitialState,
    
    on( formActions.formCorreoAction, (state, {correo} ) => ({
        ...state,
        loginFormData   : {...state.loginFormData, correo: correo},
        isLoading       : true,
    })),
    
    on( formActions.formPasswordAction, (state, {password} ) => ({
        ...state,
        loginFormData   : {...state.loginFormData, password: password},
        isLoading       : false,
    }))
);

export function formReducer( state: FormState | undefined, action: Action ) {
    return formReducerInternal( state, action );
}