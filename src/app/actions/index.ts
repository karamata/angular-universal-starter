import { Action } from '@ngrx/store';
export const LOAD_HOME = 'LOAD_HOME';
export const LOAD_LAZY = 'LOAD_LAZY';

export class LoadHomeAction implements Action {
    readonly type = LOAD_HOME

    constructor(public data: any) {

    }
}

export class LoadLazyAction implements Action {
    readonly type = LOAD_LAZY

    constructor(public data: any) {

    }
}

export type Actions = LoadHomeAction | LoadLazyAction;