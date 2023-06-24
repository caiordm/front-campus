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
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28')
];

export const server_loads = [];

export const dictionary = {
		"/": [7],
		"/ajuda": [8],
		"/contato": [9],
		"/dashboard-admin": [10],
		"/dashboard-admin/cursos": [11],
		"/dashboard-admin/cursos/create": [12],
		"/dashboard-admin/disciplinas": [13],
		"/dashboard-admin/disciplinas/create": [14],
		"/dashboard-admin/turmas": [15],
		"/dashboard-admin/turmas/create": [16],
		"/dashboard-admin/users": [17],
		"/dashboard-admin/users/create": [~18],
		"/esqueceu-senha": [19],
		"/login": [~20],
		"/painel-aluno": [21],
		"/painel-aluno/avisos": [22,[2]],
		"/painel-aluno/boletim": [23,[3]],
		"/painel-aluno/diarios": [24,[4]],
		"/painel-aluno/registros": [25,[5]],
		"/painel-aluno/requerimentos": [26,[6]],
		"/primeiro-acesso": [27],
		"/sobre-nos": [28]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';