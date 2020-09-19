import { Component, OnInit } from '@angular/core';
import { PoliticaApiService } from 'src/app/services/politica-api.service';
import { PoliticaModel } from 'src/app/services/politica-model';

@Component({
  selector: 'app-educacao',
  templateUrl: './educacao.component.html',
  styleUrls: ['./educacao.component.css']
})
export class EducacaoComponent implements OnInit {

  listaPolitica: PoliticaModel[];

  constructor( private politicaApi: PoliticaApiService ) { }

  ngOnInit(): void {
    this.politicaApi.listPolitica().subscribe((lista) =>
    {
      this.listaPolitica = lista.filter(a => a.tags[0] === 'Educação');
    });
  }
}



