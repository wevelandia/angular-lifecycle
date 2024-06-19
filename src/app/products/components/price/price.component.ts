import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscribable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  // Se coloca el signo $ para identificar que esto es un observable
  public interval$?: Subscription;

  constructor() {}

  // En este ejemplo podemos observar en el log que primero se ejecuta el evento ngOnChanges y después el onInit,
  // con ellos se pueden usar propiedades en e Input que vienen en el OnInit.

  ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');

    // Este interval me va a emitir un numero cada segundo cuando se crea el componente.
    // Así como esta definida podemos cometer el error de que esto no se destruye y asi se cierre el componente sigue mostrando valores.
    //interval(1000).subscribe( value => console.log(`Tick: ${value}`) );
    this.interval$ = interval(1000).subscribe( value => console.log(`Tick: ${value}`) );

    // Cuando se usen los eventos de addEventListener tambien se deben de destruir.
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({ changes });
  }

  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
    this.interval$?.unsubscribe(); // Esto me caancela la subscripion del interval.
  }

}
