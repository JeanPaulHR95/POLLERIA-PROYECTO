import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultarDniService } from 'src/app/servicios/consultar-dni/consultar-dni.service';

@Component({
  selector: 'app-personal-reg',
  templateUrl: './personal-reg.component.html',
  styleUrls: ['./personal-reg.component.css']
})
export class PersonalRegComponent implements OnInit, AfterViewInit {
  nombreTrabajador: string;
  apPaterno: string;
  apMaterno: string;
  elementoReferencia: HTMLElement | null;

  constructor(private consultaDNI: ConsultarDniService) {
    this.nombreTrabajador = "";
    this.apPaterno = "";
    this.apMaterno = "";
    this.elementoReferencia = null;
   }

   ngAfterViewInit(): void {
    this.elementoReferencia = document.getElementById("elemento-referencia") as HTMLElement;
  }

  ngOnInit(): void {
  }

  ingresarDatosTrabajador(dni: string): void{
    let datosBasicos: Observable<any> = this.consultaDNI.consultarDni(dni);
    datosBasicos.subscribe((res: any) =>{
      this.nombreTrabajador = res.nombres;
      this.apPaterno = res.apellidoPaterno;
      this.apMaterno = res.apellidoMaterno;
    })
    
  }

}
