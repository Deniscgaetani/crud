import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CoreModule} from '@core/core.module';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import {AngularFireModule} from '@angular/fire';
import {environment} from '@env/environment';
import {AppRoutingModule} from '@app/app-routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    CoreModule,
    RouterModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({name: 'crud redux', logOnly: environment.production}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
