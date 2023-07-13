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
import { AdminMenuComponent } from './componentes/administrador/admin-menu/admin-menu.component';
import { PersonalMenuComponent } from './componentes/administrador/colaboradores/personal-menu/personal-menu.component';
import { PersonalDeleteComponent } from './componentes/administrador/colaboradores/personal-delete/personal-delete.component';
import { PersonalRegComponent } from './componentes/administrador/colaboradores/personal-reg/personal-reg.component';
import { PersonalUpdateComponent } from './componentes/administrador/colaboradores/personal-update/personal-update.component';
import { ProveedorDeleteComponent } from './componentes/administrador/proveedores/proveedor-delete/proveedor-delete.component';
import { ProveedorMenuComponent } from './componentes/administrador/proveedores/proveedor-menu/proveedor-menu.component';
import { ProveedorRegComponent } from './componentes/administrador/proveedores/proveedor-reg/proveedor-reg.component';
import { ProveedorUpdateComponent } from './componentes/administrador/proveedores/proveedor-update/proveedor-update.component';
import { MenuTablasComponent } from './componentes/administrador/reportes/menu-tablas/menu-tablas.component';
import { TablaComprasComponent } from './componentes/administrador/reportes/tabla-compras/tabla-compras.component';
import { TablaVentasComponent } from './componentes/administrador/reportes/tabla-ventas/tabla-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    RegistrarPedidoComponent,
    DashboardComponent,
    AdminMenuComponent,
    PersonalMenuComponent,
    PersonalDeleteComponent,
    PersonalRegComponent,
    PersonalUpdateComponent,
    ProveedorDeleteComponent,
    ProveedorMenuComponent,
    ProveedorRegComponent,
    ProveedorUpdateComponent,
    MenuTablasComponent,
    TablaComprasComponent,
    TablaVentasComponent
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
