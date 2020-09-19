import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoliticaModel } from './politica-model';

@Injectable({
  providedIn: 'root'
})
export class PoliticaApiService {

  constructor(private httpClient: HttpClient) { }

  public listPolitica ():Observable<PoliticaModel[]> //Observale: Reatividade , Lib RXJS - Fluxo de Dados
  {
    return this.httpClient.get<PoliticaModel[]>("https://https://it3yui.firebaseio.com/problemas.json?print=pretty"); //Retorno de um observable de array ImagemModel
  }

}
