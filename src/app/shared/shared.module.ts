import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {TabelaComponent} from './tabela/tabela.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatTooltipModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        TabelaComponent,
        LoadingComponent,
    ],
  declarations: [TabelaComponent, LoadingComponent],
  entryComponents: []
})
export class SharedModule {
}
