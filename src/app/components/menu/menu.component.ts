import { Component, OnInit } from '@angular/core';
import { ProductosServices } from '../../productos.services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ProductosServices]
})
export class MenuComponent implements OnInit {

  listaTipoProductos: string[];
  listaMarcas: string[];
  constructor(servicio: ProductosServices) {
    this.listaTipoProductos = servicio.getTipoProductos();
    this.listaMarcas = servicio.getMarcas();
  }

  ngOnInit() {
  }

}
