import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CardComponent } from './components/card/card.component';
import { ListaCardComponent } from './components/lista-card/lista-card.component';
import { MobilidadeAcessibilidadeComponent } from './components/mobilidade-acessibilidade/mobilidade-acessibilidade.component';
import { SaudeSaneamentoComponent } from './components/saude-saneamento/saude-saneamento.component';
import { EducacaoComponent } from './components/educacao/educacao.component';
import { PlanUrbanoComponent } from './components/plan-urbano/plan-urbano.component';
import { HabitacaoComponent } from './components/habitacao/habitacao.component';
import {MatInputModule} from '@angular/material/input';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    MenuPagLayoutComponent,
    SobrePageComponent,
    CardComponent,
    ListaCardComponent,
    MobilidadeAcessibilidadeComponent,
    SaudeSaneamentoComponent,
    EducacaoComponent,
    PlanUrbanoComponent,
    HabitacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // extra
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule
  ],
  providers:  [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
