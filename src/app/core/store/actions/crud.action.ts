import {createAction, props} from '@ngrx/store';
import {ClienteModel} from '../../models/cliente.model';
// -------------------------------------------
// Ações para  Clientes from Firebase
// -------------------------------------------
const clientes = props<{ payload: ClienteModel[] }>();
const cliente = props<{ payload: ClienteModel }>();
const error = props<{ payload: any }>();
export const LoadClientes = createAction('[Core] Load da coleção de clientes ', clientes);
export const ClienteSelecionado = createAction('[Core] Cliente selecionado mediante a click', cliente);
export const LimparClienteSelecionado = createAction('[Core] Limpar Cliente selecionado');
export const CreateCliente = createAction('[Core] Create de um cliente', cliente);
export const CreateClienteSuccess = createAction('[Core] Create de um cliente (Success)', cliente);
export const CreateClienteError = createAction('[Core] Create de um cliente (Error)', error);
export const UpdateCliente = createAction('[Core] Update de um cliente', cliente);
export const UpdateClienteSuccess = createAction('[Core] Update de um cliente (Success)', cliente);
export const UpdateClienteError = createAction('[Core] Update de um cliente (Error)', error);
export const DeleteCliente = createAction('[Core] Delete de um cliente', cliente);
export const DeleteClienteSuccess = createAction('[Core] Delete de um cliente (Success)', cliente);
export const DeleteClienteError = createAction('[Core] Delete de um cliente (Error)', error);
export const ClienteDialog = createAction('[Core] Abrir Dialog de criação do cliente ');
export const ClienteDialogEdicao = createAction('[Core] Abrir Dialog de edição do cliente', cliente);
export const LoadClientesError = createAction('[Core] Load da coleção de clientes (Error) ', error);
