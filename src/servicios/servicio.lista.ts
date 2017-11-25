import {Injectable} from '@angular/core';

@Injectable()

export class ServicioLista{
    listas = [
        { id: 1, nombre: "Lenovo", procesador: "AMD E-Series E-350 (Dual-core / 1600 MHz)", ram: "2GB DDR3 (1066 MHz)", pantalla: "LED 14.0 (1366x768)", almacenamiento: "HDD 320GB (5400rpm)", tarjetas_de_video: "AMD Radeon HD 6310 (Integrada)", img:"https://solotodo.s3.amazonaws.com/cache/63/60/63608e3de476c06e6566cfee4c247444.png", },
        { id: 2, nombre: "HP", procesador: "AMD Sempron V160 (Single-core / 2400 MHz)", ram: "2GB DDR3 (1333 MHz)", pantalla: "LED 14.0 (1366x768)", almacenamiento: "HDD 320GB (7200rpm)", tarjetas_de_video: "AMD Radeon HD 4250 (Integrada)", img:"https://solotodo.s3.amazonaws.com/cache/9b/c1/9bc14e9425b630736bf20c7b14e29a3c.png", },
        { id: 3, nombre: "Acer", procesador: "Intel Core i5 7200U (Dual-core / 2500 MHz - 3100 MHz)", ram: "4GB DDR4 (2133 MHz)", pantalla: "LED 15.6 (1366x768)", almacenamiento: "HDD 1TB (5400rpm)", tarjetas_de_video: "NVIDIA GeForce 940MX (1GB)", img:"https://solotodo.s3.amazonaws.com/cache/43/9e/439e915e5ff603034280a5bbc7285e52.png", }
    ];

    public getLista(){
        return this.listas;
    }

    public getListas(id) {
        return this.listas.filter(function (e, i) {
            return e.id == id
        })[0] || { id: null, nombre: null, procesador: null, ram: null, pantalla: null, almacenamiento: null, tarjetas_de_video: null, img: null };

    }
  


}