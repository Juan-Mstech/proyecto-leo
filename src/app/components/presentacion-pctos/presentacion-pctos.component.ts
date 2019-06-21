import { Component, OnInit } from '@angular/core';
import {ProductosServices} from '../../productos.services';

@Component({
  selector: 'app-presentacion-pctos',
  templateUrl: './presentacion-pctos.component.html',
  styleUrls: ['./presentacion-pctos.component.css'],
  providers: [ProductosServices]
})
export class PresentacionPctosComponent implements OnInit {
  listaProductos: string[];
  listaMarcas: string[];
  constructor(servicio:ProductosServices) {
    this.listaProductos=servicio.getProductos();
    this.listaMarcas=servicio.getMarcas();
   }

  ngOnInit() {
  }

}
