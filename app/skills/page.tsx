'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Brain, Languages, Sparkles } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { skills, strategicDifferentials } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function SkillsPage() {
	const technicalSkills = skills.filter((skill) => skill.category === 'technical');
	const softwareSkills = skills.filter((skill) => skill.category === 'software');
	const softSkills = skills.filter((skill) => skill.category === 'soft');
	const languageSkills = skills.filter((skill) => skill.category === 'language');

	const SkillCategory = ({
		title,
		description,
		skills,
		icon,
		delay,
	}: {
		title: string;
		description: string;
		skills: typeof technicalSkills;
		icon: React.ReactNode;
		delay: number;
	}) => (
		<motion.div variants={fadeIn('up', delay)}>
			<Card className="card-gradient h-full">
				<CardContent className="p-6">
					<div className="flex items-center gap-2 mb-3">
						{icon}
						<h2 className="text-2xl font-semibold">{title}</h2>
					</div>
					<p className="text-sm text-muted-foreground mb-6">{description}</p>

					<div className="space-y-6">
						{skills.map((skill, index) => (
							<div key={index}>
								<div className="flex justify-between gap-4 mb-1">
									<span>{skill.name}</span>
									<span className="text-muted-foreground shrink-0">{skill.level}/10</span>
								</div>
								<div className="skill-bar">
									<motion.div
										className="skill-progress"
										initial={{ width: 0 }}
										whileInView={{ width: `${skill.level * 10}%` }}
										viewport={{ once: true }}
										transition={{ duration: 1, delay: index * 0.1 }}
									/>
								</div>

								{skill.description && (
									<p className="mt-3 text-sm text-muted-foreground">{skill.description}</p>
								)}

								{skill.highlight && (
									<p className="mt-2 text-sm">
										<span className="font-semibold text-foreground">Diferencial:</span>{' '}
										<span className="text-muted-foreground">{skill.highlight}</span>
									</p>
								)}
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div variants={staggerContainer()} initial="hidden" animate="show">
					<motion.div variants={fadeIn('down', 0.2)} className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-4">Habilidades e Especialidades</h1>
						<p className="text-lg text-muted-foreground max-w-4xl mx-auto">
							Visão abrangente das minhas competências técnicas, experiência prática em desenvolvimento
							de software, arquitetura de sistemas e entrega de soluções completas, com foco em
							resultado real para o negócio.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<SkillCategory
							title="Competências Técnicas"
							description="Competências aplicadas na construção de soluções completas, da arquitetura até a entrega em produção."
							skills={technicalSkills}
							icon={<Cpu className="h-6 w-6 text-primary" />}
							delay={0.3}
						/>
						<SkillCategory
							title="Stack Tecnológica e Ferramentas"
							description="Ferramentas, linguagens e tecnologias que compõem minha stack principal de desenvolvimento."
							skills={softwareSkills}
							icon={<Code2 className="h-6 w-6 text-secondary" />}
							delay={0.4}
						/>
						<SkillCategory
							title="Competências Comportamentais"
							description="Habilidades comportamentais que fortalecem minha atuação técnica e minha capacidade de entrega."
							skills={softSkills}
							icon={<Brain className="h-6 w-6 text-accent" />}
							delay={0.5}
						/>
						<SkillCategory
							title="Idiomas"
							description="Idiomas que utilizo no dia a dia para comunicação e leitura de documentação técnica."
							skills={languageSkills}
							icon={<Languages className="h-6 w-6 text-primary" />}
							delay={0.6}
						/>
					</div>

					<motion.div variants={fadeIn('up', 0.7)} className="mt-8">
						<Card className="card-gradient">
							<CardContent className="p-6">
								<div className="flex items-center gap-2 mb-3">
									<Sparkles className="h-6 w-6 text-primary" />
									<h2 className="text-2xl font-semibold">Diferenciais Estratégicos</h2>
								</div>
								<p className="text-sm text-muted-foreground mb-6">
									Pontos que reforçam meu perfil como desenvolvedor full cycle, com visão técnica,
									visão de negócio e foco em solução real.
								</p>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{strategicDifferentials.map((item, index) => (
										<div key={index} className="rounded-lg border border-border/50 bg-background/40 p-4">
											<p className="text-sm text-muted-foreground">{item}</p>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
