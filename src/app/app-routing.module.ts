import { Micro1Component } from './micro1/micro1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Micro2Component } from './micro2/micro2.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'micro1', component: Micro1Component },
  { path: 'micro2', component: Micro2Component },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
