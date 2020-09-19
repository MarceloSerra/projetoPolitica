import { Component, OnInit } from '@angular/core';
import { PoliticaApiService } from 'src/app/services/politica-api.service';
import { PoliticaModel } from 'src/app/services/politica-model';

@Component({
  selector: 'app-lazer',
  templateUrl: './lazer.component.html',
  styleUrls: ['./lazer.component.css']
})
export class LazerComponent implements OnInit {

  listaPolitica: PoliticaModel[];

  constructor( private politicaApi: PoliticaApiService ) { }

  ngOnInit(): void {
    this.politicaApi.listPolitica().subscribe((lista) =>
    {
      this.listaPolitica = lista.filter(a => a.tags[0] === "Lazer",);
    });
  }
}
