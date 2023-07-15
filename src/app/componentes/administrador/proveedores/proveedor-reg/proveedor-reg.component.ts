import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-proveedor-reg',
  templateUrl: './proveedor-reg.component.html',
  styleUrls: ['./proveedor-reg.component.css']
})
export class ProveedorRegComponent implements OnInit {

  @ViewChild('nombreInsumo') nombreInsumoRef!: ElementRef;
  @ViewChild('tablaInsumos') tablaInsumosRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  agregarInsumo() {
    const insumoSeleccionado = this.nombreInsumoRef.nativeElement.value;
    if (insumoSeleccionado) {
      const codigoInsumo = this.obtenerCodigoInsumo(insumoSeleccionado);
      if (codigoInsumo) {
        const tablaInsumos = this.tablaInsumosRef.nativeElement;
        const fila = document.createElement("tr");
        const columnaInsumo = document.createElement("td");
        columnaInsumo.textContent = insumoSeleccionado;
        const columnaCodigo = document.createElement("td");
        columnaCodigo.textContent = codigoInsumo;
        fila.appendChild(columnaInsumo);
        fila.appendChild(columnaCodigo);
        tablaInsumos.appendChild(fila);
      } else {
        alert("No se encontró el código para el insumo seleccionado.");
      }
    } else {
      alert("Seleccione un insumo válido.");
    }
  }
  
  obtenerCodigoInsumo(insumo: string): string | null {
    // implementar la lógica para obtener el código del insumo desde la base de datos
    // Retorná el código del insumo si se encuentra, o null si no se encuentra.
    return null;
  }
}
