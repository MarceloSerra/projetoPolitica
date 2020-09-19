import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-page',
  templateUrl: './sobre-page.component.html',
  styleUrls: ['./sobre-page.component.css']
})
export class SobrePageComponent implements OnInit {

  title = 'Faça seu reporte!';
  imgUrl = "https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kifOGrh5LnhfIwXs1M3EMoAJtliAtg...Zq8...Qz"

  constructor() { }

  ngOnInit(): void {
  }

}
