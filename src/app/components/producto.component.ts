import { Component, Input, Output , EventEmitter} from '@angular/core';
import { Producto } from '../producto.model';

@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html'
})

export class ProductoComponent {
    @Input() producto: Producto;
    @Output() eventoCarrito: EventEmitter<any> = new EventEmitter();

    agregarCarrito(){
        console.log('click del carrito');
        this.eventoCarrito.emit(this.producto.id);
    }
}

