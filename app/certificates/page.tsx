'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function CertificatesPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div variants={staggerContainer()} initial="hidden" animate="show">
					<motion.div variants={fadeIn('down', 0.2)} className="mb-12 text-center">
						<h1 className="mb-4 text-4xl font-bold">Certificados</h1>
						<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
							Esta seção ficará reservada para certificações, cursos e comprovantes de formação complementar.
						</p>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="card-gradient mx-auto max-w-2xl">
							<CardContent className="p-10 text-center">
								<Award className="mx-auto mb-4 h-10 w-10 text-primary" />
								<h2 className="mb-3 text-2xl font-semibold">Nenhum certificado cadastrado no momento</h2>
								<p className="text-muted-foreground">
									Assim que novos certificados forem adicionados, eles aparecerão aqui.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
