import { Injectable } from '@angular/core';
import { Products } from './model/products';
import { SelectItem } from 'primeng/api';


@Injectable(
    { providedIn: 'root' }
)

export class ProductosServices {

    

    getTipoProductos(): SelectItem[] {
        return [
            { label: '-Seleccione-', value: 0 },
            { label: 'Procesadores', value: 10 },
            { label: 'Teclado', value: 20 },
            { label: 'Mouses', value: 30 },
            { label: 'Monitores', value: 40 },
            { label: 'Parlantes', value: 50 },
            { label: 'Impresoras', value: 60 },
            { label: 'Discos rígidos', value: 70 },
            { label: 'Placas de video', value: 80 },
            { label: 'Fuentes de alimentación', value: 90 },
            { label: 'Webcam', value: 100 }
        ];
    }

    getMarcas(): SelectItem[] {
        return [
            { label: '-Seleccione-', value: 200 },
            { label: 'Intel', value: 210 },
            { label: 'Amd', value: 220 },
            { label: 'Genius', value: 230 },
            { label: 'Sound Blaster', value: 240 },
            { label: 'Logitech', value: 250 },
            { label: 'Samsung', value: 260 },
            { label: 'Lg', value: 270 },
            { label: 'HP', value: 280 },
            { label: 'Brother', value: 290 },
            { label: 'Epson', value: 300 },
            { label: 'Toshiba', value: 310 },
            { label: 'Western Digital', value: 320 },
            { label: 'Hitachi', value: 330 },
            { label: 'Nvidia', value: 340 },
            { label: 'Radeon', value: 350 },
            { label: 'Antec', value: 360 },
            { label: 'Corsair', value: 370 },
            { label: 'Thermaltake', value: 380 },
            { label: 'Creative', value: 390 },
            { label: 'Papalook', value: 400 }
        ];
    }

    getProductos(): Products[] {
        return [
            {
                id: 10,
                brand: 210,
                detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!",
                price: "25599.99",
                model: "i7 Core I7 8700 4.6ghz Coffee Lake Cpu",
                productType: 10,

            },

            {
                id: 1,
                brand: 220,
                detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!",
                price: "27899.99",
                model: "RYZEN 5 2400G",
                productType: 10
            },

          {
                id: 2,
                brand: 220,
                detail: "Quad core 3.1Ghz/socket AM4 Radeon R7",
                price: "3605.00",
                model: "A8 9600",
                productType: 10
            },

            {
                id: 3,
                brand: 220,
                detail: "Socket AM4/4 nucleos/3.6Ghz Cache L3 4Mb/Radeon rx Vega 11",
                price: "5405.00",
                model: "Ryzen 5 bulk",
                productType: 10
            },

            {
                id: 4,
                brand: 220,
                detail: "Dual core 3.5GHZ/socket AM4 Radeon R5",
                price: "2345.00",
                model: "A6 9500",
                productType: 10
            },

            {
                id: 5,
                brand: 220,
                detail: "Socket AM4/Dual core/3.2Ghz Graficos Radeon Vega 3",
                price: "7605.00",
                model: "Athlon 200Ge",
                productType: 10
            },

            {
                id: 6,
                brand: 220,
                detail: "Socket AM4/4 nucleos/3.5Ghz Cache L2 2Mb/65W",
                price: "8410.00",
                model: "Ryzen 3 1200",
                productType: 10
            },

            {
                id: 7,
                brand: 220,
                detail: "Quad core 3.1Ghz/socket AM4 Radeon R7",
                price: "7005.00",
                model: "Socket AM4/4 nucleos/3.5Ghz Cache L3 4Mb/Radeon Vega 8",
                productType: 10
            },

            {
                id: 8,
                brand: 220,
                detail: "Quad core 3.1Ghz/socket AM4 Radeon R7",
                price: "3605.00",
                model: "A8 9600",
                productType: 10
            },

            {
                id: 11,
                brand: 210,
                detail: "Quad core/3.60Ghz/Smart cache 6Mb/HD Intel 630",
                price: "9055.00",
                model: "Core I3 8100",
                productType: 10
            },

            {
                id: 12,
                brand:  220,
                detail: "6 nucleos/2.8Ghz/9Mb smart cache/HD Intel 630",
                price: "13415.00",
                model: "Core I5 8400",
                productType: 10
            },

            {
                id: 13,
                brand:  220,
                detail: "6 nucleos/3.20Ghz/12Mb smart cache/HD Intel 630",
                price: "21930.00",
                model: "Core I7 8700",
                productType: 10
            },

            {
                id: 14,
                brand:  220,
                detail: "Socket LGA1155 / 3.0GHZ",
                price: "900.00",
                model: "G2030",
                productType: 10
            },

            {
                id: 51,
                brand: 300,
                detail: "Ecotank",
                price: "11020.00",
                model: "L3110",
                productType: 60
            },

            {
                id: 52,
                brand: 300,
                detail: "Ecotank/Wi-Fi",
                price: "13225.00",
                model: "L3150",
                productType: 60
            },

            {
                id: 53,
                brand: 20,
                detail: "Ink Tank/Wi-Fi Insumos:GT51/52/53/54",
                price: "10120.00",
                model: "HP 410",
                productType: 60
            },

            {
                id: 54,
                brand: 20,
                detail: "Ink Tank/Wi-FI/Insumos:GT51/52/5354",
                price: "10445.00",
                model: "HP 415",
                productType: 60
            },

            {
                id: 55,
                brand: 260,
                detail: "SL-M2885FW/Wi-Fi/Full duplex Insumo:Mlt-d116s",
                price: "16210.00",
                model: "multif Samsung",
                productType: 60
            },

            {
                id: 56,
                brand: 290,
                detail: "Tecnología de impresión: Tecnología láser blanco y negro Velocidad de impresión max. Negro: Hasta 21ppm Negro Resoluciones de la Impresión máxima (dpi): Hasta 2400 x 600 dpi Capacidad Estandard de Papel (hojas): Bandeja con capacidad para 150 hojas Capacidad Opcional de Papel (hojas): No Interfaz/interfaces Estandard: USB 2.0 de Velocidad Total Controlador de Impresión: Windows® Mac OS® Ciclo de Trabajo Mensual Max.: Hasta 10,000 páginas Volumen de Impresión Mensual Recomendado: 250 a 1,800 páginas Primera página impresa: Menos de 10 seg Memoria Estándar (MB): 1MB Memoria Opcional (MB): No Pantalla LCD: No Velocidad del Procesador (CPU Processor): 200 Mhz Modo Ahorro de Tóner: Sí Tipos de papel: Papel normal, papel reciclado Manejo de Papel - Bandeja para Papel: A4, Carta, Legal, Folio Alimentación Manual - Tamaño del Papel: A4, Carta, Legal, Folio Bandeja para Papel -Peso del papel: 65 a 105 g/m2 Capacidad de Papel - Salida (hojas): Hasta 50 hojas de 80 g/m2 Energy Star: Si Dimensiones de la Unidad: largo 34.0 cm x ancho 23.8 cm x 18.9 alto",
                price: "8999.00",
                model: "Hl 1200",
                productType: 60
            },

            {
                id: 50,
                brand: 290,
                detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!",
                price: "7899.99",
                model: "Hl-1212w",
                productType: 60
            }
        ]
    }
}