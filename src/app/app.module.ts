import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { PaisesComponent } from './paises/paises.component';
import { ExportAsModule } from 'ngx-export-as';

@NgModule({
    declarations: [
        AppComponent,
        CabecalhoComponent,
        PaisesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MDBBootstrapModule.forRoot(),
        ExportAsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
