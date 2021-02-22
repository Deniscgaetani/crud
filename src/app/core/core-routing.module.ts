import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientesComponent} from '@core/containers/clientes/clientes.component';

const routes: Routes = [{
  path: 'core', component: ClientesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
