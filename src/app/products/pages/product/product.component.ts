import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'product-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // Vamos a reaccionar con un cambio para que se dispare el Onchange
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  // Implementamos todos los ciclos de vida de los componentes.
  // OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
  // constructor: se usa para incializaciones, no se deben de usar peticiones Http acá.
  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    // Utilizado para hacer la primera petición Http, para hacer los subscribe o escuchar websocket, o implememtar timer.
    console.log('ngOnInit');
  }

  // Se usa si necesitamos estar pendientes de los cambios de las propiedades de los @Input
  ngOnChanges(changes: SimpleChanges): void {
    // Aca se pueden identifica los cambios que han pasado.
    console.log('ngOnChanges');
    console.log({ changes });
  }

  // ngDoCheck,ngAfterContentInit, ngAfterViewInit, ngAfterViewChecked : Se usan para cuando suceden cambios en @Inputs,
  // se usan mas que todo por ejemplo en un sistema de graficos, cuando se recalcula por ejemplo la pantalla.
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }


  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  //
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  increasePrice() {
    this.currentPrice++;
  }

}
