import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {globalReducers} from '@core/store/reducers/global.reducers';
import {CoreEffects} from '@core/store/effects/crud.effects';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {ClientesComponent} from './containers/clientes/clientes.component';
import {ClientesTabelaComponent} from './components/clientes-tabela/clientes-tabela.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from '@shared/shared.module';
import {ClienteDialogComponent} from './containers/cliente-dialog/cliente-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [ClientesComponent, ClientesTabelaComponent, ClienteDialogComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    StoreModule.forFeature('core', globalReducers),
    EffectsModule.forFeature([
      CoreEffects,
    ]),
    SharedModule,
    FlexLayoutModule,
    MatTooltipModule,
  ],
  entryComponents: [ClienteDialogComponent],
})
export class CoreModule {
}
