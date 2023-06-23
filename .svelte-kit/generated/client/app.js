export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/ajuda": [3],
		"/contato": [4],
		"/dashboard-admin": [5],
		"/dashboard-admin/cursos": [6],
		"/dashboard-admin/cursos/create": [7],
		"/dashboard-admin/disciplinas": [8],
		"/dashboard-admin/disciplinas/create": [9],
		"/dashboard-admin/turmas": [10],
		"/dashboard-admin/turmas/create": [11],
		"/dashboard-admin/users": [12],
		"/dashboard-admin/users/create": [~13],
		"/esqueceu-senha": [14],
		"/login": [~15],
		"/painel-aluno": [16],
		"/primeiro-acesso": [17],
		"/sobre-nos": [18]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';