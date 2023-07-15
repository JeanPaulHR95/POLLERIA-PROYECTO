import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra-insumos',
  templateUrl: './compra-insumos.component.html',
  styleUrls: ['./compra-insumos.component.css']
})
export class CompraInsumosComponent implements OnInit {
  nombreInsumo: string;
  fechaRegistro: Date;
  idProveedor: number;
  cantidad: number;

  constructor() {
    this.nombreInsumo = "";
    this.fechaRegistro = new Date();
    this.idProveedor = 0;
    this.cantidad = 0;
  }

  ngOnInit(): void {}

  guardarCompra(): void {
    // Aquí va la lógica para guardar la compra de insumos
    console.log("Compra de insumos guardada:");
    console.log("Nombre del insumo: ", this.nombreInsumo);
    console.log("Fecha de registro: ", this.fechaRegistro);
    console.log("ID del proveedor: ", this.idProveedor);
    console.log("Cantidad: ", this.cantidad);
  }

  cancelarCompra(): void {
    // Aquí va la lógica para cancelar la compra de insumos
    console.log("Compra de insumos cancelada");
  }
}