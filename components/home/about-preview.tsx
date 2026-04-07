'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="Sobre mim"
					description="Um engenheiro apaixonado por resolver problemas complexos com soluções inovadoras."
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="relative h-[400px] rounded-lg overflow-hidden"
					>
						<Image
							src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
							alt="Retrato de um engenheiro"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="flex flex-col justify-center"
					>
						<h3 className="text-2xl font-bold mb-4">Profissional de engenharia</h3>
						<p className="text-muted-foreground mb-6">
							Sou um estudante de engenharia dedicado, com paixão por inovação e resolução de problemas.
							Minha trajetória acadêmica me proporcionou uma base técnica sólida e uma compreensão profunda
							dos princípios da engenharia, que aplico a desafios do mundo real.
						</p>

						<div className="grid grid-cols-2 gap-4 mb-6">
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Formação</h4>
									<p className="text-sm text-muted-foreground">Bacharelado em Engenharia Mecânica</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Experiência</h4>
									<p className="text-sm text-muted-foreground">Mais de 3 anos</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Projetos</h4>
									<p className="text-sm text-muted-foreground">Mais de 10 concluídos</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Premiações</h4>
									<p className="text-sm text-muted-foreground">5 reconhecimentos</p>
								</CardContent>
							</Card>
						</div>

						<Button asChild>
							<Link href="/about">
								Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
