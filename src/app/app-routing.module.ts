import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { JouerComponent } from './jouer/jouer.component';
import { MainComponent } from './main/main.component'


const routes: Routes = [

  {path:'',component: MainComponent},
  {path:'jouer',component:JouerComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[MainComponent,JouerComponent,ContactComponent]
