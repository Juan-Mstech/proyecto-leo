import { Injectable } from '@angular/core';
import { Products } from './model/products';

@Injectable(
    {providedIn:'root'}
)

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
                id: 10,
                brand: "Intel",
                detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!",
                price: 25599.99,
                model: "i7 Core I7 8700 4.6ghz Coffee Lake Cpu",
                productType: "Procesador"
            },

            {
                id: 1,
                brand: "Amd",
                detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!",
                price: 27899.99,
                model: "RYZEN 5 2400G",
                productType: "Procesador"
            },

            {
                id: 2,
                brand: "Amd",
                detail: "Quad core 3.1Ghz/socket AM4 Radeon R7",
                price: 3605.00,
                model: "A8 9600",
                productType: "Procesador"
            },


            {
                id: 3,
                brand: "Amd",
                detail: "Socket AM4/4 nucleos/3.6Ghz Cache L3 4Mb/Radeon rx Vega 11",
                price: 5405.00,
                model: "Ryzen 5 bulk",
                productType: "Procesador"
            },
            {
                id: 4,
                brand: "Amd",
                detail: "Dual core 3.5GHZ/socket AM4 Radeon R5",
                price: 2345.00,
                model: "A6 9500",
                productType: "Procesador"
            },
            {
                id: 5,
                brand: "Amd",
                detail: "Socket AM4/Dual core/3.2Ghz Graficos Radeon Vega 3",
                price: 7605.00,
                model: "Athlon 200Ge",
                productType: "Procesador"
            },
            {
                id: 6,
                brand: "Amd",
                detail: "Socket AM4/4 nucleos/3.5Ghz Cache L2 2Mb/65W",
                price: 8410.00,
                model: "Ryzen 3 1200",
                productType: "Procesador"
            },
            {
                id: 7,
                brand: "Amd",
                detail: "Quad core 3.1Ghz/socket AM4 Radeon R7",
                price: 7005.00,
                model: "Socket AM4/4 nucleos/3.5Ghz Cache L3 4Mb/Radeon Vega 8",
                productType: "Procesador"
            },
            {
                id: 8,
                brand: "Amd",
                detail: "Quad core 3.1Ghz/socket AM4 Radeon R7",
                price: 3605.00,
                model: "A8 9600",
                productType: "Procesador"
            },
            {
                id: 11,
                brand: "Intel",
                detail: "Quad core/3.60Ghz/Smart cache 6Mb/HD Intel 630",
                price: 9055.00,
                model: "Core I3 8100",
                productType: "Procesador"
            },
            {
                id: 12,
                brand: "Intel",
                detail: "6 nucleos/2.8Ghz/9Mb smart cache/HD Intel 630",
                price: 13415.00,
                model: "Core I5 8400",
                productType: "Procesador"
            },

            {
                id: 13,
                brand: "Intel",
                detail: "6 nucleos/3.20Ghz/12Mb smart cache/HD Intel 630",
                price: 21930.00,
                model: "Core I7 8700",
                productType: "Procesador"
            },
            {
                id: 14,
                brand: "Intel",
                detail: "Socket LGA1155 / 3.0GHZ",
                price: 900.00,
                model: "G2030",
                productType: "Procesador"
            },



            {
                id: 51,
                brand: "Epsom",
                detail: "Ecotank",
                price: 11020.00,
                model: "L3110",
                productType: "Impresora"
            },
            {
                id: 52,
                brand: "Epson",
                detail: "Ecotank/Wi-Fi",
                price: 13225.00,
                model: "L3150",
                productType: "Impresora"
            },
            {
                id: 53,
                brand: "HP",
                detail: "Ink Tank/Wi-Fi Insumos:GT51/52/53/54",
                price: 10120.00,
                model: "HP 410",
                productType: "Impresora"
            },
            {
                id: 54,
                brand: "HP",
                detail: "Ink Tank/Wi-FI/Insumos:GT51/52/5354",
                price: 10445.00,
                model: "HP 415",
                productType: "Impresora"
            },
            {
                id: 55,
                brand: "Samsung",
                detail: "SL-M2885FW/Wi-Fi/Full duplex Insumo:Mlt-d116s",
                price: 16210.00,
                model: "multif Samsung",
                productType: "Impresora"
            },
            {
                id: 56,
                brand: "Brother",
                detail: "Tecnología de impresión: Tecnología láser blanco y negro Velocidad de impresión max. Negro: Hasta 21ppm Negro Resoluciones de la Impresión máxima (dpi): Hasta 2400 x 600 dpi Capacidad Estandard de Papel (hojas): Bandeja con capacidad para 150 hojas Capacidad Opcional de Papel (hojas): No Interfaz/interfaces Estandard: USB 2.0 de Velocidad Total Controlador de Impresión: Windows® Mac OS® Ciclo de Trabajo Mensual Max.: Hasta 10,000 páginas Volumen de Impresión Mensual Recomendado: 250 a 1,800 páginas Primera página impresa: Menos de 10 seg Memoria Estándar (MB): 1MB Memoria Opcional (MB): No Pantalla LCD: No Velocidad del Procesador (CPU Processor): 200 Mhz Modo Ahorro de Tóner: Sí Tipos de papel: Papel normal, papel reciclado Manejo de Papel - Bandeja para Papel: A4, Carta, Legal, Folio Alimentación Manual - Tamaño del Papel: A4, Carta, Legal, Folio Bandeja para Papel -Peso del papel: 65 a 105 g/m2 Capacidad de Papel - Salida (hojas): Hasta 50 hojas de 80 g/m2 Energy Star: Si Dimensiones de la Unidad: largo 34.0 cm x ancho 23.8 cm x 18.9 alto",
                price: 8999.00,
                model: "Hl 1200",
                productType: "Impresora"
            },

            {
                id: 50,
                brand: "Brother",
                detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!",
                price: 7899.99,
                model: "Hl-1212w",
                productType: "Impresora"
            }
        ]
    }
}