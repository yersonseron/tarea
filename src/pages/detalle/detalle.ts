import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioLista } from '../../servicios/servicio.lista';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
   id=null;
 
  lista = { id: null, nombre: null, procesador: null, ram: null, pantalla: null, almacenamiento: null, tarjetas_de_video: null, img: null  }
  constructor(public ServicioLista: ServicioLista, public navCtrl: NavController, public navParams: NavParams) {
  this.id = this.navParams.get('id');
  this.lista =  this.ServicioLista.getListas(this.id);
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
