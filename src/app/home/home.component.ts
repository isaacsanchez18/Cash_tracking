import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  total = 0;
  entra = '';
  sale = '';
  resultados = [

  ];

  constructor() { }

  ngOnInit() {
  }

  ingreso(elemento: HTMLInputElement) {

    if(elemento.value === null) {
      alert('No hay ningn valor.');
    }
    else {
      this.entra = elemento.value;
      const numero1 = Number(this.entra);
      this.total += numero1;
      this.resultados.push(numero1);
    }
  }

  egreso(elemento: HTMLInputElement) {

    if(elemento.value === null) {
      alert('No hay ningn valor.');
    }
    else {
      this.sale = elemento.value;
      const numero2 = Number(this.sale);
      this.total -= numero2;
      this.resultados.push(numero2);
    }

  }

}
