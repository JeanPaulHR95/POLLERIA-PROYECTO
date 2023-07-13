import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { RegistrarPedidoComponent } from './componentes/registrar-pedido/registrar-pedido.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ConsultarDniService } from './servicios/consultar-dni/consultar-dni.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    RegistrarPedidoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConsultarDniService],
  bootstrap: [AppComponent]
})
export class AppModule { }
