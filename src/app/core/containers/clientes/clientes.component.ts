import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ClienteModel} from '@core/models/cliente.model';
import {CoreState} from '@core/store/reducers/global.reducers';
import {select, Store} from '@ngrx/store';
import {CrudState} from '@core/store/reducers/crud.reducer';
import {getClientes} from '@core/store/selectors/crud.selectors';
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
  displayedColumns =
    ['cpf', 'nome', 'telefone', 'email', 'menu'];
  constructor(private store: Store<CrudState>) { }

  ngOnInit(): void {
    this.clientes$ = this.store.pipe(select(getClientes));
  }

  abrirDialog() {
    this.store.dispatch(ClienteDialog());
  }

}
