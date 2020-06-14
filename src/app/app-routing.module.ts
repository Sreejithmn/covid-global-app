import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponentComponent } from './summary-component/summary-component.component';
import { IndiaComponentComponent } from './india-component/india-component.component';


const routes: Routes = [
  {
    path:'worldinfo',component: SummaryComponentComponent
  },
  {
    path: 'indiainfo',component:IndiaComponentComponent
  },
  {
    path:'',redirectTo:'worldinfo',pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
