import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-personal-delete',
  templateUrl: './personal-delete.component.html',
  styleUrls: ['./personal-delete.component.css']
})
export class PersonalDeleteComponent implements OnInit {
  @ViewChild('codigoInput', { static: true }) codigoInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  buscarTrabajador() {
    const codigo = this.codigoInput.nativeElement.value;
    // Realizar la lógica para buscar los datos del trabajador y llenar los campos correspondientes
    // utilizando el código ingresado
  }
}
