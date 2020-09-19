import { LOAD_SPINNER } from './action';
import { Runner } from 'protractor';

export interface AppState{
    loading : boolean;
}
export const APP_INITIALSTATE = {
    loading : false,
}
export function appReducer(state=APP_INITIALSTATE, action){
    switch (action.type){
        case LOAD_SPINNER: return{...state,action.payload} 
        break;

        default: return state;
        break;
    }
}