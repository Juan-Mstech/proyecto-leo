import { Injectable } from '@angular/core';
import {Products} from './model/products';

@Injectable()

export class ProductosServices {
    getTipoProductos(): string[] {
        return [
            'Procesadores',
            'Teclados',
            'Mouses',
            'Monitores',
            'Parlantes',
            'Impresoras',
            'Discos rigidos',
            'Placas de video',
            'Funetes de alimentacion',
            'Webcam'];
    }

    getMarcas(): string[] {
        return [
            'Intel',
            'Amd',
            'Genius',
            'Sound Blaster',
            'Logitech',
            'Samsung',
            'Lg',
            'HP',
            'Brother',
            'Epson',
            'Toshiba',
            'Western Digital',
            'Hitachi',
            'Nvidia',
            'Radeon',
            'Antec',
            'Corsair',
            'Thermaltake',
            'Creative',
            'Papalook'
        ]
    }

    getProductos(): Array<Products>{
        var productos: Array<Products>;
        productos = new Array<Products>();
        var unProducto: Products;
      /*  
        unProducto.id=1;
        unProducto.brand="Intel";
        unProducto.detail="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!";
        unProducto.price=25599.99;
        unProducto.model="i7 Core I7 8700 4.6ghz Coffee Lake Cpu";
        unProducto.productType="Procesador";

        productos.push(unProducto);

        unProducto.id=2;
        unProducto.brand="Amd";
        unProducto.detail="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!";
        unProducto.price=27899.99;
        unProducto.model="RYZEN 5 2400G";
        unProducto.productType="Procesador";

        productos.push(unProducto);

        unProducto.id=3;
        unProducto.brand="Brother";
        unProducto.detail="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!";
        unProducto.price=7899.99;
        unProducto.model="Hl-1212w";
        unProducto.productType="Impresora";

        productos.push(unProducto);
*/
        return productos;
    }
}