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
		github: 'https://github.com/yourusername',
		linkedin: 'https://linkedin.com/in/yourusername',
		twitter: 'https://twitter.com/yourusername',
		facebook: 'https://facebook.com/yourusername',
		instagram: 'https://instagram.com/yourusername',
		whatsapp: 'https://wa.me/yourphonenumber',
		email: 'mailto:youremail@example.com',
		phone: 'tel:+1234567890',
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
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Sistema de Automação Residencial Inteligente',
		description:
			'Projetei e implementei um sistema de automação residencial com tecnologias de IoT para controlar iluminação, temperatura e recursos de segurança.',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['IoT', 'Arduino', 'C++', 'App móvel'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Software de Análise Estrutural',
		description:
			'Desenvolvi um software para análise estrutural de vigas e treliças com métodos numéricos e técnicas de visualização.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['MATLAB', 'Python', 'FEA', 'Engenharia Estrutural'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Monitoramento de Energia Renovável',
		description:
			'Criei um sistema para monitorar e analisar o desempenho de painéis solares e turbinas eólicas em busca da melhor produção de energia.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Análise de Dados', 'IoT', 'Energia Renovável', 'Visualização'],
		link: '#',
		repo: '#',
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
		field: 'Engenharia Mecânica',
		institution: 'Nome da Universidade',
		location: 'Cidade, País',
		startDate: 'set. 2020',
		endDate: 'Atual',
		gpa: '3.8/4.0',
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
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Projeto Mecânico', level: 9, category: 'technical' },
	{ name: 'Análise Estrutural', level: 8, category: 'technical' },
	{ name: 'Termodinâmica', level: 7, category: 'technical' },
	{ name: 'Sistemas de Controle', level: 8, category: 'technical' },
	{ name: 'Projeto de Circuitos', level: 6, category: 'technical' },

	// Software Skills
	{ name: 'MATLAB', level: 9, category: 'software' },
	{ name: 'AutoCAD', level: 8, category: 'software' },
	{ name: 'SolidWorks', level: 9, category: 'software' },
	{ name: 'Python', level: 7, category: 'software' },
	{ name: 'C++', level: 6, category: 'software' },
	{ name: 'ANSYS', level: 8, category: 'software' },

	// Soft Skills
	{ name: 'Resolução de Problemas', level: 9, category: 'soft' },
	{ name: 'Liderança de Equipe', level: 8, category: 'soft' },
	{ name: 'Gestão de Projetos', level: 7, category: 'soft' },
	{ name: 'Redação Técnica', level: 8, category: 'soft' },
	{ name: 'Apresentação', level: 7, category: 'soft' },

	// Languages
	{ name: 'Inglês', level: 10, category: 'language' },
	{ name: 'Espanhol', level: 6, category: 'language' },
	{ name: 'Francês', level: 4, category: 'language' },
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
