import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
  path: 'app1',
  component: TestComponent,
},
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'index'
},
{
  path: '**',
  redirectTo: 'app1'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
