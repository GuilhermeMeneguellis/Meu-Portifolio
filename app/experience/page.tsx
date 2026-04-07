'use client';

import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

type ExperienceItem = {
	title: string;
	company: string;
	startDate: string;
	endDate: string;
	location?: string;
	description: string[];
	technologies: string[];
};

const experienceItems: ExperienceItem[] = [
	{
		title: 'Analista de Sistemas',
		company: 'UBM',
		location: 'Barra Mansa, Rio de Janeiro, Brasil',
		startDate: 'fev. de 2026',
		endDate: 'Atual',
		description: [
			'Desenvolvimento de fórmulas visuais, relatórios e recursos de apoio aos processos acadêmicos e administrativos na plataforma TOTVS.',
			'Administração e acompanhamento do banco de dados MySQL da instituição, contribuindo para a organização, consistência e disponibilidade das informações.',
		],
		technologies: ['TOTVS', 'MySQL'],
	},
	{
		title: 'Analista de Sistemas',
		company: 'FAETERJ',
		location: 'Barra Mansa, Rio de Janeiro, Brasil',
		startDate: 'nov. de 2025',
		endDate: 'Atual',
		description: [
			'Desenvolvimento de sistema institucional com foco na evolução de funcionalidades, estabilidade e suporte às rotinas da instituição.',
			'Atuação full stack no frontend com Next.js e no backend com Nest.js, contribuindo para a modernização contínua da plataforma.',
		],
		technologies: ['Next.js', 'Nest.js'],
	},
	{
		title: 'Engenheiro de Software Mobile',
		company: 'Prefeitura Municipal de Barra Mansa',
		location: 'Barra Mansa, Rio de Janeiro, Brasil',
		startDate: 'jun. de 2025',
		endDate: 'Atual',
		description: [
			'Desenvolvimento de aplicações mobile com React Native, com foco em performance, usabilidade e experiência do usuário.',
			'Construção de soluções com Expo Bare Workflow para atender demandas institucionais com maior flexibilidade técnica e capacidade de evolução.',
		],
		technologies: ['React Native', 'Expo Bare Workflow'],
	},
	{
		title: 'Engenheiro de Software Full Stack JN1',
		company: 'NODE TECH',
		location: 'Belém, Pará, Brasil',
		startDate: 'mar. de 2025',
		endDate: 'dez. de 2025',
		description: [
			'Atuação end-to-end no desenvolvimento de aplicações web, com frontend em Next.js e backend em Nest.js.',
			'Estruturação e manutenção de dados com PostgreSQL, otimização de performance com Redis e orquestração de fluxos assíncronos com Kafka.',
			'Conteinerização de serviços com Docker, fortalecendo a padronização e a escalabilidade do ambiente de desenvolvimento.',
		],
		technologies: ['Next.js', 'Nest.js', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
	},
	{
		title: 'Estagiário de Desenvolvimento Frontend',
		company: 'NODE TECH',
		location: 'Belém, Pará, Brasil',
		startDate: 'set. de 2024',
		endDate: 'mar. de 2025',
		description: [
			'Desenvolvimento de interfaces web modernas e responsivas com React e Next.js, com foco em clareza visual e excelente experiência de uso.',
			'Implementação de componentes reutilizáveis e apoio na evolução contínua do frontend em ambiente de produção.',
		],
		technologies: ['React', 'Next.js'],
	},
];

export default function ExperiencePage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mx-auto max-w-3xl"
				>
					<motion.h1 variants={fadeIn('down', 0.2)} className="mb-6 text-4xl font-bold">
						Experiência profissional
					</motion.h1>
					<motion.p variants={fadeIn('down', 0.3)} className="mb-12 text-lg text-muted-foreground">
						Minha trajetória em diferentes funções, com atuação em desenvolvimento web, mobile, sistemas institucionais e infraestrutura de software.
					</motion.p>

					<div className="space-y-8">
						{experienceItems.map((exp, index) => (
							<motion.div key={index} variants={fadeIn('up', 0.2 * index)}>
								<Card className="card-gradient">
									<CardContent className="p-6">
										<div className="mb-4">
											<h2 className="text-2xl font-semibold">{exp.title}</h2>
											<p className="text-primary">{exp.company}</p>
										</div>

										<div className="mb-6 space-y-3">
											{exp.location && (
												<div className="flex items-center text-muted-foreground">
													<MapPin className="mr-2 h-4 w-4" />
													{exp.location}
												</div>
											)}
											<div className="flex items-center text-muted-foreground">
												<Calendar className="mr-2 h-4 w-4" />
												{exp.startDate} - {exp.endDate}
											</div>
										</div>

										<div className="space-y-4">
											<h3 className="text-lg font-semibold">Principais responsabilidades</h3>
											<ul className="space-y-2">
												{exp.description.map((item, i) => (
													<li key={i} className="flex items-start">
														<CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-primary" />
														<span className="text-muted-foreground">{item}</span>
													</li>
												))}
											</ul>
										</div>

										<div className="mt-6">
											<h3 className="mb-3 text-lg font-semibold">Tecnologias e ferramentas</h3>
											<div className="flex flex-wrap gap-2">
												{exp.technologies.map((tech, i) => (
													<Badge key={i} variant="secondary">
														{tech}
													</Badge>
												))}
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
