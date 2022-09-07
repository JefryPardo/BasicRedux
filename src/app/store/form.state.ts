import { IFormModel } from "../models/form-model";

export interface FormState {

    status          : number | null;
    loginFormData   : IFormModel;
    isLoading       : boolean;
    isError         : any;
}