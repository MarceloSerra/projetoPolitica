import { Component, OnInit } from '@angular/core';
import { PoliticaApiService } from 'src/app/services/politica-api.service';
import { PoliticaModel } from 'src/app/services/politica-model';

@Component({
  selector: 'app-saude-saneamento',
  templateUrl: './saude-saneamento.component.html',
  styleUrls: ['./saude-saneamento.component.css']
})
export class SaudeSaneamentoComponent implements OnInit {

  listaPolitica: PoliticaModel[];

  constructor( private politicaApi: PoliticaApiService ) { }

  ngOnInit(): void {
    this.politicaApi.listPolitica().subscribe((lista) =>
    {
      this.listaPolitica = lista.filter(a => a.tags[0] === 'Saúde');
    });
  }
}

