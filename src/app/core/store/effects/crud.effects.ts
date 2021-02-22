import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ClienteModel} from '@core/models/cliente.model';
import {catchError, map, pluck, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {
  ClienteDialog, ClienteDialogEdicao, ClienteSelecionado,
  CreateCliente,
  CreateClienteError,
  CreateClienteSuccess, DeleteCliente, DeleteClienteError, DeleteClienteSuccess,
  LoadClientes,
  LoadClientesError, UpdateCliente, UpdateClienteError, UpdateClienteSuccess
} from '@core/store/actions/crud.action';
import {Store} from '@ngrx/store';
import {CrudState} from '@core/store/reducers/crud.reducer';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';
import {ClienteDialogComponent} from '@core/containers/cliente-dialog/cliente-dialog.component';
import {AngularFireFunctions} from '@angular/fire/functions';
import {ClienteEdicaoDialogComponent} from '@core/containers/cliente-edicao-dialog/cliente-edicao-dialog.component';


@Injectable()
export class CoreEffects {
  // criarCliente = (cliente: ClienteModel) => this.fns.httpsCallable('appCriarCliente')({cliente});

  // selecionarFormaPagamento = (id: string) => this.fns.httpsCallable('mpgSelecionarFormaPagamento')({id});
  //
  // deletarFormaPagamento = (id: string) => this.fns.httpsCallable('mpgDeletarFormaPagamento')({id});
  //

  loadClientes$ = createEffect(() => this.db.collection<ClienteModel>(`clientes/`).valueChanges().pipe(
    map((cliente) => LoadClientes(
      {payload: cliente})),
    catchError((err => of(LoadClientesError(err))))
    )
  );

  conteudoDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClienteDialog),
      switchMap((conteudo) => this.dialog.open(ClienteDialogComponent, {
        data: {conteudo},
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
      }).afterClosed()),
    ), {dispatch: false}
  );
  conteudoDialogEdicao$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClienteSelecionado),
      pluck('payload'),
      switchMap((data) => this.dialog.open(ClienteEdicaoDialogComponent, {
        data: data,
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
      }).afterClosed()),
    ), {dispatch: false}
  );
  createCliente$ = createEffect(() => this.actions$.pipe(
    ofType(CreateCliente),
    pluck('payload'),
    switchMap(cliente => this.fns.httpsCallable('appCriarCliente')(cliente)
      .pipe(
        map((res) => CreateClienteSuccess({payload: res})),
        catchError((err => of(CreateClienteError({payload: err}))))
      )
    )
  ));
  updateCliente$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateCliente),
    pluck('payload'),
    switchMap(cliente => this.fns.httpsCallable('appAtualizarCliente')(cliente)
      .pipe(
        map((res) => UpdateClienteSuccess({payload: res})),
        catchError((err => of(UpdateClienteError({payload: err}))))
      )
    )
  ));
  deleteCliente$ = createEffect(() => this.actions$.pipe(
    ofType(DeleteCliente),
    pluck('payload'),
    switchMap(cliente => this.fns.httpsCallable('appRemoverCliente')(cliente)
      .pipe(
        map((res) => DeleteClienteSuccess({payload: res})),
        catchError((err => of(DeleteClienteError({payload: err}))))
      )
    )
  ));
  constructor(private actions$: Actions,
              private db: AngularFirestore,
              private fns: AngularFireFunctions,
              private store: Store<CrudState>,
              private dialog: MatDialog,
  ) {
  }
}
