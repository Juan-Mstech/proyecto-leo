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
  listaTipoProductos;
  listaMarcas: string[];
  
  constructor(private productosServices: ProductosServices) {
    this.listaTipoProductos = productosServices.getTipoProductos();
    this.listaMarcas = productosServices.getMarcas();
    this.products = productosServices.getProductos();
  }

  ngOnInit() {

    this.cols = [
      { field: 'productType', header: 'Tipo de producto' },
      { field: 'brand', header: 'Marca' },
      { field: 'price', header: 'Precio' },
      { field: 'detail', header: 'Detalle' }
    ];
  }
}