import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioLista } from '../../servicios/servicio.lista';

/**
 * Generated class for the ListasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listas',
  templateUrl: 'lista.html',
})
export class ListaPage {
  listas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public servicioListas: ServicioLista) {
      this.listas = this.servicioListas.getLista();
     
       }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

  public goToPageDetalle(id){
    this.navCtrl.push('DetallePage', {id: id});
  }

}
