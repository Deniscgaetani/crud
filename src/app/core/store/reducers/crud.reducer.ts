import {Action, createReducer, on} from '@ngrx/store';
import {ClienteModel} from '../../models/cliente.model';
import {
  ClienteSelecionado,
  CreateCliente,
  CreateClienteError,
  CreateClienteSuccess, DeleteCliente, DeleteClienteError, DeleteClienteSuccess,
  LimparClienteSelecionado,
  LoadClientes, UpdateCliente, UpdateClienteError, UpdateClienteSuccess
} from '@core/store/actions/crud.action';

export interface CrudState {
  clientes: ClienteModel[];
  clienteSelecionado?: ClienteModel;
  loading: boolean;
}

export const initialState: CrudState = {
  clientes: [{
    cpf: null,
    nome: '',
    telefone: null,
    email: ''
  }],
  loading: false
};

const reducer = createReducer(
  initialState,
  on(LoadClientes, (state, action) => ({...state, clientes: action.payload})),
  on(ClienteSelecionado, (state, action) => ({...state, clienteSelecionado: action.payload})),
  on(LimparClienteSelecionado, (state, action) => ({...state, clienteSelecionado: null})),
  on(CreateCliente, (state, action) => ({...state, loading: true})),
  on(CreateClienteSuccess, (state, action) => ({...state, loading: false})),
  on(CreateClienteError, (state, action) => ({...state, loading: false})),
  on(UpdateCliente, (state, action) => ({...state, loading: true})),
  on(UpdateClienteSuccess, (state, action) => ({...state, loading: false})),
  on(UpdateClienteError, (state, action) => ({...state, loading: false})),
  on(DeleteCliente, (state, action) => ({...state, loading: true})),
  on(DeleteClienteSuccess, (state, action) => ({...state, loading: false})),
  on(DeleteClienteError, (state, action) => ({...state, loading: false})),
);

export function crudReducer(state: CrudState | undefined, action: Action) {
  return reducer(state, action);
}
