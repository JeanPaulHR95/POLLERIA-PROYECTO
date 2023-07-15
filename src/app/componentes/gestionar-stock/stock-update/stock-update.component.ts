import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.css']
})
export class StockUpdateComponent {
  seleccionarInsumo: string;
  cantidad: number;
  historial: string;

  constructor() {
    this.seleccionarInsumo = '';
    this.cantidad = 0;
    this.historial = '';
  }

  agregar(): void {
    if (this.seleccionarInsumo && this.cantidad > 0) {
      this.historial += `Agregar ${this.cantidad} unidades de ${this.seleccionarInsumo}\n`;
      // Lógica adicional para realizar las operaciones de agregar al stock
      this.limpiarCampos();
    }
  }

  quitar(): void {
    if (this.seleccionarInsumo && this.cantidad > 0) {
      this.historial += `Quitar ${this.cantidad} unidades de ${this.seleccionarInsumo}\n`;
      // Lógica adicional para realizar las operaciones de quitar del stock
      this.limpiarCampos();
    }
  }

  guardar(): void {
    // Lógica adicional para guardar los cambios en el stock
    console.log('Cambios guardados');
  }

  cancelar(): void {
    this.limpiarCampos();
    console.log('Edición cancelada');
  }

  private limpiarCampos(): void {
    this.seleccionarInsumo = '';
    this.cantidad = 0;
  }
}