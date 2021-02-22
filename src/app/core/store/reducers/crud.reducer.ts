import {Action, createReducer, on} from '@ngrx/store';
import {ClienteModel} from '../../models/cliente.model';
import {ClienteDialog, ClienteSelecionado, LimparClienteSelecionado, LoadClientes} from '@core/store/actions/crud.action';

export interface CrudState {
  clientes: ClienteModel[];
  clienteSelecionado?: ClienteModel;
  edicao: boolean;
}

export const initialState: CrudState = {
  clientes: [{
    cpf: null,
    nome: '',
    telefone: null,
    email: ''
  }],
  edicao: false
};

const reducer = createReducer(
  initialState,
  on(LoadClientes, (state, action) => ({...state, clientes: action.payload})),
  on(ClienteSelecionado, (state, action) => ({...state, clienteSelecionado: action.payload, edicao: true})),
  on(LimparClienteSelecionado, (state, action) => ({...state, clienteSelecionado: null})),
);

export function crudReducer(state: CrudState | undefined, action: Action) {
  return reducer(state, action);
}
