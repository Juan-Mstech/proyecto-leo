import { Injectable } from '@angular/core';

@Injectable()

export class ProductosServices {
    getProductos(): string[] {
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
}