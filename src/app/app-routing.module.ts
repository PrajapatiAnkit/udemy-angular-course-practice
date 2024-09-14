import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserOneDashboardComponent } from './components/dashboard/user-one-dashboard/user-one-dashboard.component';
import { UserTwoDashboardComponent } from './components/dashboard/user-two-dashboard/user-two-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'user-one',
            component: UserOneDashboardComponent,
          },
          {
            path: 'user-two',
            canDeactivate: [CanDeactivateGuard],
            component: UserTwoDashboardComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'not-found',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
