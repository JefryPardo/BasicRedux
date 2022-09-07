import { RootState } from ".";
import { createSelector } from "@ngrx/store";
import { FormState } from "./form.state";

export const selectFormFeatureState = (state: RootState) => state.form;

export const selectForm = createSelector(

    selectFormFeatureState,
    (state: FormState) => state
);