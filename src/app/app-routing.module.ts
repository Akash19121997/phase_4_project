import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';


const routes: Routes = [
  {path: '', redirectTo: 'mainpage', pathMatch: 'full'},
  {path: 'mainpage', component:FirstpageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
