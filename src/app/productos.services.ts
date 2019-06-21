import { Injectable } from '@angular/core';

@Injectable()

export class ProductosServices {
    getProductos(): string[] {
        return [
            'procesadores',
            'teclado',
            'mouse',
            'monitor',
            'impresora',
            'disco rigido',
            'placa de video',
            'funete de alimentacion',
            'estabilizador de tension',
            'webcam'];
    }

    getMarcas(): string[] {
        return [
            'intel',
            'amd',
            'genius',
            'logitech',
            'samsung',
            'lg',
            'hp',
            'brother',
            'epson',
            'toshiba',
            'western digital',
            'hitachi',
            'nvidia',
            'radeon',
            'antec',
            'corsair',
            'thermaltake',
            'creative',
            'papalook'
        ]
    }
}