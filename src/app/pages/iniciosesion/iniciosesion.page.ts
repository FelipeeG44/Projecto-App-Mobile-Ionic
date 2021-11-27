import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicedatosService, Datos } from 'src/app/services/servicedatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {

  datos: Datos[] = [];
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList:IonList;


  constructor(private storageService: ServicedatosService, 
    private plt:Platform,private toastController: ToastController){
      this.plt.ready() .then(()=>{
        this.loadDatos();
      });
    }

    ngOnInit(){

    }

      //get
  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

   //create
   addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('Usuario Registrado Exitosamente');
      this.loadDatos();
    });
  }
  
  
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 1000
    });
    toast.present();
  }


}