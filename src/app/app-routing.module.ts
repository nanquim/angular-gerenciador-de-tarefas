import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/tarefas/listar',
		pathMatch: 'full'
	},
	...TarefaRoutes
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],// garante q o modulo de rotas seja unico no app (singleton)
	exports: [ RouterModule ] //disponibiliza o modulo de rotas para o modulo principal
})
export class AppRoutingModule {}