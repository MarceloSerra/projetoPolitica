import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PoliticaModel } from 'src/app/services/politica-model';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnChanges {

  @Input() listaPolitica: PoliticaModel;

  politicaApi: PoliticaModel;
  address:string;
  description:string;
  name:string;
  photo:string;
  tags: string[];

  constructor() { }

  ngOnChanges(): void {
    if(this.listaPolitica != null){
      this.address = this.listaPolitica.address;
      this.name = this.listaPolitica.name;
      this.description = this.listaPolitica.description;
      this.photo = this.listaPolitica.photo;
      this.tags = this.listaPolitica.tags;
    }
  }
}
