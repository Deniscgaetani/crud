import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CrudState} from '@core/store/reducers/crud.reducer';
import {ClienteSelecionado, DeleteCliente} from '@core/store/actions/crud.action';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  @Input()
  datasource: any[];
  @Input()
  colunasMostradas: string[];

  constructor(private store: Store<CrudState>) {
  }


  ngOnInit(): void {
    this.colunasMostradas.push('menu');

  }

  selecionar(selecao) {
    this.store.dispatch(ClienteSelecionado({payload: selecao}));
  }

  delete(selecao) {
    this.store.dispatch(DeleteCliente({payload: selecao}));
  }
}
