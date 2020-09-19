import { Component, OnInit } from '@angular/core';
import { PoliticaApiService } from 'src/app/services/politica-api.service';
import { PoliticaModel } from 'src/app/services/politica-model';

@Component({
  selector: 'app-plan-urbano',
  templateUrl: './plan-urbano.component.html',
  styleUrls: ['./plan-urbano.component.css']
})
export class PlanUrbanoComponent implements OnInit {

  listaPolitica: PoliticaModel[];

  constructor( private politicaApi: PoliticaApiService ) { }

  ngOnInit(): void {
    this.politicaApi.listPolitica().subscribe((lista) =>
    {
      this.listaPolitica = lista.filter(a => a.tags[1] === "Planejamento Urbano",);
    });
  }
}


