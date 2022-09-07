import { formReducer } from "./form.reducers";
import { FormState } from "./form.state";

export interface RootState {
    
    form        : FormState;
}

export const appReducer = {
    
    form        : formReducer,
};
