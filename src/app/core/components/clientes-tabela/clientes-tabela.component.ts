import {Component, Input, OnInit} from '@angular/core';
import {ClienteModel} from '@core/models/cliente.model';

@Component({
  selector: 'app-clientes-tabela',
  templateUrl: './clientes-tabela.component.html',
  styleUrls: ['./clientes-tabela.component.css']
})
export class ClientesTabelaComponent implements OnInit {


  @Input()
  clientes: ClienteModel[];
  @Input()
  colunasMostradas: [];

  constructor() { }

  ngOnInit(): void {
  }

}
