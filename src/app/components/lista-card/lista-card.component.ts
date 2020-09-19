import { Component, OnInit } from '@angular/core';
import { PoliticaApiService } from 'src/app/services/politica-api.service';
import { PoliticaModel } from 'src/app/services/politica-model';

@Component({
  selector: 'app-lista-card',
  templateUrl: './lista-card.component.html',
  styleUrls: ['./lista-card.component.css']
})

export class ListaCardComponent implements OnInit {

  listaPolitica: PoliticaModel[];

  constructor( private politicaApi: PoliticaApiService) { }

  ngOnInit(): void {

    this.politicaApi.listPolitica().subscribe((lista) =>
    {
      this.listaPolitica = lista;
    });
  }


}
