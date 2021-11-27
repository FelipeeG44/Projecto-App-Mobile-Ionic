import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[] =[
    {
      icon: 'home-outline', 
      name: 'Inicio', 
      redirecTo: '/inicio'
    },
    {
      icon: 'person-circle-outline',
      name: 'Login', 
      redirecTo: '/login'
    },
 
    {
      icon: 'person-circle-outline',
      name: 'Registro', 
      redirecTo: '/registro'
    },
    {
      icon: 'grid-outline', 
      name: 'Lista', 
      redirecTo: '/lista'
    },
    {
      icon: 'grid-outline', 
      name: 'Noticias', 
      redirecTo: '/noticia'
    }
  ]

  constructor() {}

}
