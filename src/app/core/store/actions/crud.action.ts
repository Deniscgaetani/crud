import {createAction, props} from '@ngrx/store';
import {ClienteModel} from '../../models/cliente.model';
// -------------------------------------------
// Ações para  Clientes from Firebase
// -------------------------------------------
const clientes = props<{ payload: ClienteModel[] }>();
const cliente = props<{ payload: ClienteModel }>();
const dialogId = props<{ payload: string }>();
const error = props<{ payload: any }>();

// acões de load
export const LoadClientes = createAction('[Core] Load da coleção de clientes ', clientes);
export const LoadClientesError = createAction('[Core] Load da coleção de clientes (Error) ', error);

// acões de seleção

export const ClienteSelecionado = createAction('[Core] Cliente selecionado mediante a click', cliente);
export const LimparClienteSelecionado = createAction('[Core] Limpar Cliente selecionado');

// acões de create

export const CreateCliente = createAction('[Core] Create de um cliente', cliente);
export const CreateClienteSuccess = createAction('[Core] Create de um cliente (Success)', cliente);
export const CreateClienteError = createAction('[Core] Create de um cliente (Error)', error);

// acões de update

export const UpdateCliente = createAction('[Core] Update de um cliente', cliente);
export const UpdateClienteSuccess = createAction('[Core] Update de um cliente (Success)', cliente);
export const UpdateClienteError = createAction('[Core] Update de um cliente (Error)', error);

// acões de delete

export const DeleteCliente = createAction('[Core] Delete de um cliente', cliente);
export const DeleteClienteSuccess = createAction('[Core] Delete de um cliente (Success)', cliente);
export const DeleteClienteError = createAction('[Core] Delete de um cliente (Error)', error);

// acões de dialog

export const ClienteDialog = createAction('[Core] Abrir Dialog de criação do cliente ');
export const ClienteDialogId = createAction('[Core] Id do Dialog aberto', dialogId);
export const ClienteDialogClose = createAction('[Core] Fechar Dialog aberto', dialogId);
