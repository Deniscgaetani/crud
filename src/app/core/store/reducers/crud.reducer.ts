import {Action, createReducer, on} from '@ngrx/store';
import {ClienteModel} from '../../models/cliente.model';
import {
  ClienteDialogId,
  ClienteSelecionado,
  CreateCliente,
  CreateClienteError,
  CreateClienteSuccess,
  DeleteCliente,
  DeleteClienteError,
  DeleteClienteSuccess,
  LimparClienteSelecionado,
  LoadClientes,
  UpdateCliente,
  UpdateClienteError,
  UpdateClienteSuccess
} from '@core/store/actions/crud.action';

export interface CrudState {
  clientes: ClienteModel[];
  clienteSelecionado?: ClienteModel;
  loading: boolean;
  dialogId?: string;
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
  on(LimparClienteSelecionado, (state) => ({...state, clienteSelecionado: null})),
  on(CreateCliente, (state) => ({...state, loading: true})),
  on(CreateClienteSuccess, (state) => ({...state, loading: false})),
  on(CreateClienteError, (state) => ({...state, loading: false})),
  on(UpdateCliente, (state) => ({...state, loading: true})),
  on(UpdateClienteSuccess, (state) => ({...state, loading: false})),
  on(UpdateClienteError, (state) => ({...state, loading: false})),
  on(DeleteCliente, (state) => ({...state, loading: true})),
  on(DeleteClienteSuccess, (state) => ({...state, loading: false})),
  on(DeleteClienteError, (state) => ({...state, loading: false})),
  on(ClienteDialogId, (state, action) => ({...state, dialogId: action.payload}))
);

export function crudReducer(state: CrudState | undefined, action: Action) {
  return reducer(state, action);
}
