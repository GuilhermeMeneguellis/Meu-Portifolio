import type { StaticImageData } from 'next/image';

import governoPresenteImage from '@/assets/image.png';
import saudeProMaisImage from '@/assets/imagem2.png';
import parabellumImage from '@/assets/imagem3.png';

export const siteConfig = {
	name: 'Portfólio de Engenharia',
	description:
		'Um modelo profissional de site de portfólio para estudantes de engenharia.',
	mainNav: [
		{
			title: 'Início',
			href: '/',
		},
		{
			title: 'Sobre',
			href: '/about',
		},
		{
			title: 'Formação',
			href: '/education',
		},
		{
			title: 'Habilidades',
			href: '/skills',
		},
		{
			title: 'Experiência',
			href: '/experience',
		},
		{
			title: 'Projetos',
			href: '/projects',
		},
		{
			title: 'Certificados',
			href: '/certificates',
		},
		{
			title: 'Blog',
			href: '/blog',
		},
		{
			title: 'Contato',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/GuilhermeMeneguellis',
		linkedin: 'https://www.linkedin.com/in/guilherme-de-souza-nunes-meneguelli-065021316/',
		twitter: 'https://twitter.com/yourusername',
		facebook: 'https://facebook.com/yourusername',
		instagram: 'https://instagram.com/yourusername',
		whatsapp: 'https://wa.me/5524999638117',
		email: 'mailto:engenhariadesoftwareguilherme@gmail.com',
		phone: 'tel:+5524999638117',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Estagiário de Engenharia',
		company: 'Empresa de Tecnologia',
		location: 'Cidade, País',
		startDate: 'mai. 2023',
		endDate: 'ago. 2023',
		description: [
			'Atuei no desenvolvimento e nos testes de componentes de software para sistemas embarcados',
			'Colaborei com engenheiros seniores no planejamento e na execução de projetos',
			'Implementei procedimentos de teste para garantir a qualidade das entregas',
		],
		technologies: ['C++', 'Python', 'MATLAB', 'Git'],
	},
	{
		title: 'Assistente de Pesquisa',
		company: 'Laboratório Universitário',
		location: 'Cidade, País',
		startDate: 'jan. 2023',
		endDate: 'abr. 2023',
		description: [
			'Auxiliei em pesquisas focadas em materiais avançados para aplicações mecânicas',
			'Realizei revisões bibliográficas e organizei os principais achados da pesquisa',
			'Executei análises de dados e visualizei resultados experimentais',
		],
		technologies: ['MATLAB', 'CAD', 'Análise de Dados', 'Python'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string | StaticImageData;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Saude Pro Mais',
		description:
			'Plataforma web desenvolvida com TypeScript, Node.js, Next.js, Nest.js e React, utilizando Neon PostgreSQL como base de dados para sustentar uma aplicação moderna, escalável e orientada a performance.',
		image: saudeProMaisImage,
		tags: ['TypeScript', 'Node.js', 'Next.js', 'Nest.js', 'React', 'Neon PostgreSQL'],
		link: 'https://www.saudepromais.com.br/',
	},
	{
		title: 'Governo Presente',
		description:
			'Aplicativo mobile desenvolvido com React Native e Expo, distribuído para Play Store e App Store para ampliar o acesso da população a serviços e funcionalidades institucionais.',
		image: governoPresenteImage,
		tags: ['React Native', 'Expo', 'Play Store', 'App Store'],
		link: 'https://appbarramansa.com.br/',
	},
	{
		title: 'Parabellum Club',
		description:
			'Plataforma full stack desenvolvida com Next.js e Nest.js, utilizando Docker, MongoDB, PostgreSQL e VPS Ubuntu, com integração à AWS Rekognition para reconhecimento facial.',
		image: parabellumImage,
		tags: ['Next.js', 'Nest.js', 'Docker', 'MongoDB', 'PostgreSQL', 'AWS Rekognition'],
		link: 'https://parabellumclub.com.br/',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bacharelado',
		field: 'Engenharia de Software',
		institution: 'UBM',
		location: 'Cidade, País',
		startDate: '2024',
		endDate: 'Atual',
		achievements: [
			'Lista de Honra da Faculdade (todos os semestres)',
			'Bolsa de Excelência Acadêmica',
			'Prêmio de Projeto Final de Curso',
		],
	},
	{
		degree: 'Ensino Médio',
		field: 'Ciências e Matemática',
		institution: 'Nome da Escola',
		location: 'Cidade, País',
		startDate: 'set. 2016',
		endDate: 'jun. 2020',
		gpa: '4.0/4.0',
		achievements: [
			'Orador da turma',
			'Finalista da Competição Nacional de Matemática',
			'Medalha de Ouro na Feira de Ciências',
		],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Certificação Profissional em Engenharia',
		issuer: 'Associação Profissional de Engenharia',
		date: 'nov. 2023',
		id: 'CERT-12345',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'Especialista em Projeto CAD',
		issuer: 'Autodesk',
		date: 'jun. 2023',
		id: 'CERT-67890',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'Fundamentos de Gestão de Projetos',
		issuer: 'Project Management Institute',
		date: 'mar. 2023',
		id: 'CERT-24680',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
	description?: string;
	highlight?: string;
};

export const skills: Skill[] = [
	// Technical Skills
	{
		name: 'Desenvolvimento Mobile (React Native & Expo)',
		level: 8,
		category: 'technical',
		description: 'Desenvolvimento de aplicações mobile com foco em performance, usabilidade e integração com APIs.',
		highlight: 'Entrega de aplicações mobile integradas a sistemas completos, com backend, banco de dados e autenticação.',
	},
	{
		name: 'Desenvolvimento Completo (Web + Backend)',
		level: 8,
		category: 'technical',
		description: 'Construção de aplicações completas, desde interfaces modernas até APIs escaláveis e seguras.',
		highlight: 'Atuação end-to-end, do protótipo ao deploy em produção.',
	},
	{
		name: 'Arquitetura de Software & APIs',
		level: 7,
		category: 'technical',
		description: 'Estruturação de sistemas backend com REST APIs, organização de código, separação de responsabilidades e boas práticas.',
		highlight: 'Foco em escalabilidade desde o início, mesmo em projetos de pequeno porte.',
	},
	{
		name: 'Modelagem de Banco de Dados (SQL/NoSQL)',
		level: 7,
		category: 'technical',
		description: 'Criação de estruturas eficientes e normalizadas, com foco em performance e escalabilidade.',
		highlight: 'Modelagem orientada ao domínio do negócio, e não apenas à camada técnica.',
	},
	{
		name: 'Integração de Sistemas (APIs, Serviços e IA)',
		level: 7,
		category: 'technical',
		description: 'Integração com serviços externos, como Azure, AWS e APIs REST, incluindo soluções com inteligência artificial.',
		highlight: 'Aplicação prática de IA em cenários reais, como reconhecimento facial e identificação de usuários.',
	},
	{
		name: 'DevOps e Infraestrutura (VPS & Deploy)',
		level: 6,
		category: 'technical',
		description: 'Configuração de ambientes em VPS, uso de Docker, Nginx e práticas básicas de CI/CD.',
		highlight: 'Autonomia para colocar sistemas completos em produção sem dependência de terceiros.',
	},

	// Software Skills
	{ name: 'TypeScript / JavaScript', level: 9, category: 'software' },
	{ name: 'Node.js', level: 8, category: 'software' },
	{ name: 'React Native & Expo', level: 8, category: 'software' },
	{ name: 'Next.js', level: 7, category: 'software' },
	{ name: 'React + Vite', level: 8, category: 'software' },
	{ name: 'Nest.js', level: 7, category: 'software' },
	{ name: 'Prisma ORM', level: 7, category: 'software' },
	{ name: 'REST APIs', level: 8, category: 'software' },
	{ name: 'PostgreSQL', level: 7, category: 'software' },
	{ name: 'MongoDB', level: 7, category: 'software' },
	{ name: 'Redis', level: 6, category: 'software' },
	{ name: 'Docker', level: 6, category: 'software' },
	{ name: 'Nginx', level: 6, category: 'software' },
	{ name: 'VPS (Deploy e Configuração)', level: 7, category: 'software' },
	{ name: 'Integração com APIs de IA (Reconhecimento Facial)', level: 7, category: 'software' },
	{ name: 'SCORM & LTI (Educação Digital)', level: 7, category: 'software' },
	{ name: 'Git & GitHub (Versionamento)', level: 8, category: 'software' },

	// Soft Skills
	{
		name: 'Pensamento Analítico & Resolução de Problemas',
		level: 9,
		category: 'soft',
		description: 'Capacidade de transformar problemas complexos em soluções práticas e funcionais.',
		highlight: 'Forte orientação à entrega e não apenas à teoria.',
	},
	{
		name: 'Adaptabilidade & Resiliência',
		level: 9,
		category: 'soft',
		description: 'Capacidade comprovada de evolução rápida, inclusive em contexto de transição de carreira.',
		highlight: 'Aprendizado acelerado com aplicação prática imediata.',
	},
	{
		name: 'Comunicação & Didática',
		level: 9,
		category: 'soft',
		description: 'Experiência em ensino, condução de grupos e explicação de conceitos técnicos.',
		highlight: 'Consigo traduzir tecnologia para clientes não técnicos com clareza.',
	},
	{
		name: 'Visão de Produto & Negócio',
		level: 8,
		category: 'soft',
		description: 'Capacidade de alinhar desenvolvimento técnico com valor real para o cliente.',
		highlight: 'Penso como desenvolvedor e também como dono do produto.',
	},
	{
		name: 'Trabalho em Equipe & Liderança Técnica',
		level: 8,
		category: 'soft',
		description: 'Atuação colaborativa em times, com organização e foco em entrega.',
		highlight: 'Já atuei tanto em equipe quanto de forma independente, liderando soluções.',
	},
	{
		name: 'Aprendizado Contínuo & Curiosidade Técnica',
		level: 9,
		category: 'soft',
		description: 'Evolução constante com novas tecnologias, IA e boas práticas de desenvolvimento.',
		highlight: 'Exploração ativa de IA como acelerador de produtividade em engenharia de software.',
	},

	// Languages
	{ name: 'Português (Nativo)', level: 10, category: 'language' },
	{ name: 'Inglês Técnico (Leitura e Documentação)', level: 7, category: 'language' },
];

export const strategicDifferentials = [
	'Desenvolvimento de sistemas completos (web, mobile, backend e infraestrutura).',
	'Experiência com cliente real e entrega em produção.',
	'Aplicação prática de Inteligência Artificial em produtos.',
	'Capacidade de atuar como desenvolvedor de ciclo completo, do zero ao deploy.',
	'Experiência com educação e formação de pessoas como professor e instrutor.',
	'Uso de IA como acelerador de produtividade em engenharia de software.',
	'Perfil híbrido: técnico, com visão de negócio e comunicação com o cliente.',
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Avanços nas Tecnologias de Energia Renovável',
		excerpt: 'Uma análise das inovações mais recentes em energia renovável e de seu impacto no desenvolvimento sustentável.',
		date: '15 mar. 2024',
		author: 'Seu Nome',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'O Futuro da Robótica na Manufatura',
		excerpt: 'Como a robótica e a automação estão transformando a indústria de manufatura e criando novas oportunidades.',
		date: '22 fev. 2024',
		author: 'Seu Nome',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Materiais Sustentáveis na Construção Moderna',
		excerpt: 'Uma análise de materiais de construção ecológicos e de suas aplicações na arquitetura contemporânea.',
		date: '10 jan. 2024',
		author: 'Seu Nome',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];
