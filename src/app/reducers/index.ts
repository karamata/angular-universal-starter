import { combineReducers } from '@ngrx/store';
import * as actions from '../actions';
export function reducers(state = {}, action: actions.Actions): any {
    
    console.log('=======================');

    switch (action.type) {
        case actions.LOAD_HOME:
            console.log(action);

            return action.data;

            case actions.LOAD_LAZY:
            console.log(action);

            return action.data;
    }

    return state;
}