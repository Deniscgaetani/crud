import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ClienteModel} from '@core/models/cliente.model';
import {Action, select, Store} from '@ngrx/store';
import {CrudState} from '@core/store/reducers/crud.reducer';
import {getClientes, getLoading} from '@core/store/selectors/crud.selectors';
import {ClienteDialog} from '@core/store/actions/crud.action';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  /**
   * Observação do extrato do participante no premmia.
   */
  public clientes$: Observable<ClienteModel[]>;
  /**
   * Observação do loading.
   */
  public loading$: Observable<boolean>;
  displayedColumns =
    ['cpf', 'nome', 'telefone', 'email', 'menu'];

  constructor(private store: Store<CrudState>) {
  }

  ngOnInit(): void {
    this.clientes$ = this.store.pipe(select(getClientes));
    this.loading$ = this.store.pipe(select(getLoading));
  }

  abrirDialog() {
    this.store.dispatch(ClienteDialog());
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
