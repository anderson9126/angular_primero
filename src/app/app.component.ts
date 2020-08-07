import { Component } from '@angular/core';
import { Producto } from './producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-platzi';

  nombres = ['anderson', 'nicolas', 'jairo'];

  productos: Producto[] = [
    {
      id: '1',
      image: 'assets/imagenes/kid.png',
      titulo: 'kid',
      pricio: 10000,
      description: 'descripcion 1'
    },
    {
      id: '2',
      image: 'assets/imagenes/foto2.png',
      titulo: 'foto 2',
      pricio: 20000,
      description: 'descripcion 2'
    }, {
      id: '3',
      image: 'assets/imagenes/foto33.png',
      titulo: 'foto 3',
      pricio: 30000,
      description: 'descripcion 3'
    }, {
      id: '4',
      image: 'assets/imagenes/foto4.png',
      titulo: 'foto 4',
      pricio: 40000,
      description: 'descripcion 4'
    }, {
      id: '5',
      image: 'assets/imagenes/foto5.png',
      titulo: 'foto 5',
      pricio: 50000,
      description: 'descripcion 5'
    }, {
      id: '6',
      image: 'assets/imagenes/foto6.png',
      titulo: 'foto 6',
      pricio: 60000,
      description: 'descripcion 6'
    }
  ];

  agregarNombre() {
    this.nombres.push('nuevo_nombre');
  }

  eliminar(indice: number) {
    this.nombres.splice(indice, 1);
  }
}
