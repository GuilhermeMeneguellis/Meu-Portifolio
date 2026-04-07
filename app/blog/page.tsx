'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function BlogPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div variants={staggerContainer()} initial="hidden" animate="show">
					<motion.div variants={fadeIn('down', 0.2)} className="mb-12 text-center">
						<h1 className="mb-4 text-4xl font-bold">Blog</h1>
						<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
							Este espaço será usado para compartilhar experiências, aprendizados e reflexões ao longo da minha trajetória profissional.
						</p>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="card-gradient mx-auto max-w-2xl">
							<CardContent className="p-10 text-center">
								<FileText className="mx-auto mb-4 h-10 w-10 text-primary" />
								<h2 className="mb-3 text-2xl font-semibold">Sem postagens no momento</h2>
								<p className="text-muted-foreground">
									Novos conteúdos serão publicados aqui em breve.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
