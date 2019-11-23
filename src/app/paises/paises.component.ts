import { Component, OnInit } from '@angular/core';
import {PaisesService} from '../services/paises.service';
import {Pais} from '../models/pais.model';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  title = 'Pesquise por países';
  listaPaises: Pais[];
  constructor(private paisesService: PaisesService) { }

  ngOnInit() {
    this.getPaises();
  }

  getPaises() {
    this.paisesService.getPaises()
        .subscribe(dados => {
          this.listaPaises = dados;
          console.log(this.listaPaises);
        });
  }

}
