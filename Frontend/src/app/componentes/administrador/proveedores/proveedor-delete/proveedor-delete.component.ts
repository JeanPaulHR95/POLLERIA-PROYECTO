import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-proveedor-delete',
  templateUrl: './proveedor-delete.component.html',
  styleUrls: ['./proveedor-delete.component.css']
})
export class ProveedorDeleteComponent implements OnInit {
  @ViewChild('rucInput', { static: true }) rucInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  buscarProveedor() {
    const ruc = this.rucInput.nativeElement.value;
    // Realiza la lógica para buscar los datos del proveedor y llenar los campos correspondientes
    // utilizando el RUC ingresado
  }
}
