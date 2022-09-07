import { createAction, props } from "@ngrx/store";
import { IFormModel } from "../models/form-model";


export const formCorreoAction = createAction(
    '[Form] Form Action correo',
    props<{
        correo: string;
    }>()
);
export const formPasswordAction = createAction(
    '[Form] Form Action password',
    props<{
        password: string;
    }>()
);