//Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Internal
import { APP_ROUTES_HOME } from './app.constants';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  {
    path: APP_ROUTES_HOME,
    component: HomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: APP_ROUTES_HOME,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: APP_ROUTES_HOME,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
