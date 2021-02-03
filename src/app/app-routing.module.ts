import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTreeComponent } from './components/list-tree/list-tree.component';
import { TreeComponent } from './components/tree/tree.component';

const routes: Routes = [
  { path: 'list-tree', component: ListTreeComponent },
  { path: 'tree', component: TreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
