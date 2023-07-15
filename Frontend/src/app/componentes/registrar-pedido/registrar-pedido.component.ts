import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultarDniService } from 'src/app/servicios/consultar-dni/consultar-dni.service';


@Component({
  selector: 'app-registrar-pedido',
  templateUrl: './registrar-pedido.component.html',
  styleUrls: ['./registrar-pedido.component.css']
})
export class RegistrarPedidoComponent implements OnInit, AfterViewInit {
  nombreCliente: string;
  apPaterno: string;
  apMaterno: string;
  elementoReferencia: HTMLElement | null;

  constructor(private consultaDNI: ConsultarDniService) {
    this.nombreCliente = "";
    this.apPaterno = "";
    this.apMaterno = "";
    this.elementoReferencia = null;
  }

  ngAfterViewInit(): void {
    this.elementoReferencia = document.getElementById("elemento-referencia") as HTMLElement;
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

  agregarPlato(): void{
    const platosPedidos = document.getElementById("platos-pedidos");
    let divCol = document.createElement("div");
    divCol.setAttribute("class", "col-12");
    divCol.setAttribute("id", "platos-pedidos");
    if(platosPedidos == null){
      let divSubTitulo = document.createElement("div");
      divSubTitulo.innerHTML = `<hr>
                                <div>
                                    <h5>Platos pedidos</h5>
                                </div>`;
      divCol.appendChild(divSubTitulo);
    }
    divCol.innerHTML += `<div class="row">
                            <label class="col-2">Plato</label>
                            <div class="col">
                                <input type="text" class="w-100">
                            </div>
                            <label class="col-2">Precio</label>
                            <div class="col">
                                <input type="text" class="w-100">
                            </div>
                        </div>`

      this.elementoReferencia?.insertAdjacentElement('beforebegin', divCol);
    
  }
}
