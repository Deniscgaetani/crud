import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {TabelaComponent} from './tabela/tabela.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    TabelaComponent,
  ],
  declarations: [TabelaComponent],
  entryComponents: []
})
export class SharedModule {
}
