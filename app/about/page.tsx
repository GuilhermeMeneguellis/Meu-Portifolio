'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">Sobre mim</h1>
						<p className="text-lg text-muted-foreground">
							Sou um estudante de engenharia apaixonado, com foco em inovação e resolução de problemas.
							Minha trajetória acadêmica me proporcionou uma base técnica sólida e uma compreensão profunda
							dos princípios da engenharia.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">Minha trajetória</h2>
							<p className="text-muted-foreground">
								Ao longo da minha formação, participei de diversos projetos que me ajudaram
								a desenvolver habilidades práticas e conhecimento teórico. Acredito em
								aprendizado contínuo e em acompanhar de perto os avanços tecnológicos.
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="/cv.pdf" download>
								Baixar currículo <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
							alt="Foto profissional"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Formação</h3>
								<p className="text-muted-foreground">
									Atualmente curso bacharelado em Engenharia, com foco em
									aplicações práticas e soluções inovadoras.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experiência</h3>
								<p className="text-muted-foreground">
									Conquistei experiência relevante por meio de estágios e projetos, atuando
									com tecnologias e metodologias de ponta.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Habilidades</h3>
								<p className="text-muted-foreground">
									Tenho domínio de diferentes ferramentas e tecnologias de engenharia, com forte
									base em resolução de problemas e pensamento analítico.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
