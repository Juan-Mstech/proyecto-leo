import { Injectable } from '@angular/core';
import { Products } from './model/products';

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
        ];
    }

    getProductos(): Products[] {
        return [
            {
                id: 1,
                brand: "Intel",
                detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!",
                price: 25599.99,
                model: "i7 Core I7 8700 4.6ghz Coffee Lake Cpu",
                productType: "Procesador"
            },

            {
                id: 2,
                brand: "Amd",
                detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!",
                price: 27899.99,
                model: "RYZEN 5 2400G",
                productType: "Procesador"
            },

            {

                id: 3,
                brand: "Brother",
                detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!",
                price: 7899.99,
                model: "Hl-1212w",
                productType: "Impresora"
            }
        ]
    }
}