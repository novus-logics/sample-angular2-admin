import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';
import { DashboardNew } from './dashboard-new';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'new',
    component: DashboardNew
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
