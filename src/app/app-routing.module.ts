import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducacaoComponent } from './components/educacao/educacao.component';
import { HabitacaoComponent } from './components/habitacao/habitacao.component';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { MobilidadeAcessibilidadeComponent } from './components/mobilidade-acessibilidade/mobilidade-acessibilidade.component';
import { PlanUrbanoComponent } from './components/plan-urbano/plan-urbano.component';
import { SaudeSaneamentoComponent } from './components/saude-saneamento/saude-saneamento.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';


const routes: Routes = [
  {
    path: '', component: MenuPagLayoutComponent,
  },
  {
    path: 'educacao', component: EducacaoComponent,
  },
  {
    path: 'habitacao', component: HabitacaoComponent,
  },
  {
    path: 'mobacsss', component: MobilidadeAcessibilidadeComponent,
  },
  {
    path: 'planurbano', component: PlanUrbanoComponent,
  },
  {
    path: 'saudesanem', component: SaudeSaneamentoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
