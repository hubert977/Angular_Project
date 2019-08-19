import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '',   redirectTo: '/data-table/1', pathMatch: 'full' },
  {path: 'data-table/:id', component: TablePaginationComponent,pathMatch: 'full'},
  {path: 'data-table', redirectTo: '/data-table/1'},
  {path: 'about', component: AboutComponent, pathMatch: 'full'},
  {path: '404', component: PageNotFoundComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/404'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
