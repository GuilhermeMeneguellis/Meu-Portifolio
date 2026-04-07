'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, MapPin } from 'lucide-react';

import type { Education } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

const educationItems: Education[] = [
	{
		degree: 'Bacharelado',
		field: 'Engenharia de Software',
		institution: 'UBM',
		location: 'Barra Mansa, Rio de Janeiro, Brasil',
		startDate: '2024',
		endDate: 'Atual',
		achievements: [
			'Aluno bolsista integral',
			'Vencedor do Hackathon UBM 2025',
			'Participação em projetos voltados para a comunidade',
		],
	},
	{
		degree: 'Ensino Médio',
		field: 'Integral',
		institution: 'ICT',
		location: 'Volta Redonda, Brasil',
		startDate: '2015',
		endDate: '2017',
		achievements: [
			'Aluno destaque da turma',
			'Orador oficial da turma',
			'Finalista em olimpíadas de matemática',
		],
	},
];

export default function EducationPage() {
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
						Formação
					</motion.h1>
					<motion.p variants={fadeIn('down', 0.3)} className="mb-12 text-lg text-muted-foreground">
						Minha trajetória acadêmica e minhas conquistas na área da engenharia.
					</motion.p>

					<div className="space-y-8">
						{educationItems.map((edu, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
								className="relative"
							>
								<Card className="card-gradient">
									<CardContent className="p-6">
										<div className="mb-4">
											<h2 className="text-2xl font-semibold">{edu.degree}</h2>
											<p className="text-primary">{edu.field}</p>
										</div>

										<div className="space-y-3">
											<div className="flex items-center text-muted-foreground">
												<MapPin className="mr-2 h-4 w-4" />
												{edu.institution}, {edu.location}
											</div>
											<div className="flex items-center text-muted-foreground">
												<Calendar className="mr-2 h-4 w-4" />
												{edu.startDate} - {edu.endDate}
											</div>
										</div>

										{edu.achievements.length > 0 && (
											<div className="mt-6">
												<h3 className="mb-3 text-lg font-semibold">Conquistas</h3>
												<ul className="space-y-2">
													{edu.achievements.map((achievement, i) => (
														<li key={i} className="flex items-start">
															<Award className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-primary" />
															<span className="text-muted-foreground">{achievement}</span>
														</li>
													))}
												</ul>
											</div>
										)}
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
