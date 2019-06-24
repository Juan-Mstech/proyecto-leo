import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductosServices } from 'src/app/productos.services';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  products: Products[];
  cols: any[];
  listaTipoProductos: string[];
  listaMarcas: string[];


  constructor(private productosServices: ProductosServices) {
    this.listaTipoProductos = productosServices.getTipoProductos();
    this.listaMarcas = productosServices.getMarcas();
  }

  ngOnInit() {
    this.productosServices.getProductos();

    this.cols = [
      { field: 'productType', header: 'Tipo de producto' },
      { field: 'brand', header: 'Marca' },
      { field: 'price', header: 'Precio' },
      { field: 'detail', header: 'Detalle' }
    ];
  }
  /*
    onYearChange(event, dt) {
        if (this.yearTimeout) {
            clearTimeout(this.yearTimeout);
        }
  
        this.yearTimeout = setTimeout(() => {
            dt.filter(event.value, 'year', 'gt');
        }, 250);
    }*/
}