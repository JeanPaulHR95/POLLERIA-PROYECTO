import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultarDniService } from 'src/app/servicios/consultar-dni/consultar-dni.service';


@Component({
  selector: 'app-registrar-pedido',
  templateUrl: './registrar-pedido.component.html',
  styleUrls: ['./registrar-pedido.component.css']
})
export class RegistrarPedidoComponent implements OnInit {
  nombreCliente: string;
  apPaterno: string;
  apMaterno: string;

  constructor(private consultaDNI: ConsultarDniService) {
    this.nombreCliente = "";
    this.apPaterno = "";
    this.apMaterno = "";
  }

  ngOnInit(): void {
  }


  ingresarDatosCliente(dni: string): void{
    let datosBasicos: Observable<any> = this.consultaDNI.consultarDni(dni);
    datosBasicos.subscribe((res: any) =>{
      this.nombreCliente = res.nombres;
      this.apPaterno = res.apellidoPaterno;
      this.apMaterno = res.apellidoMaterno;
    })
    
  }
}
