import { Component, OnInit } from '@angular/core';
import { ProductosServices } from '../../productos.services';
import { Products } from '../../model/products';

@Component({
  selector: 'app-presentacion-pctos',
  templateUrl: './presentacion-pctos.component.html',
  styleUrls: ['./presentacion-pctos.component.css'],
  providers: [ProductosServices]
})

export class PresentacionPctosComponent implements OnInit {
  listaProducto: Array<Products>;
  constructor(servicio: ProductosServices) {
    this.listaProducto = servicio.getProductos();
  }

  ngOnInit() {
  }

}
