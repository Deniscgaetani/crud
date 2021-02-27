import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Action} from '@ngrx/store';
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
  @Output()
  actionEmitter = new EventEmitter<Action>();

  constructor() {
  }


  ngOnInit(): void {
    this.colunasMostradas.push('menu');

  }

  selecionar(selecao) {
    this.actionEmitter.emit(ClienteSelecionado({payload: selecao}));
  }

  delete(selecao) {
    this.actionEmitter.emit(DeleteCliente({payload: selecao}));
  }
}
