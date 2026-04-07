'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ContactPage() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Formulário enviado:', formState);
		alert('Mensagem enviada com sucesso!');
		setFormState({ name: '', email: '', subject: '', message: '' });
	};

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mx-auto max-w-4xl"
				>
					<motion.div variants={fadeIn('down', 0.2)} className="mb-12 text-center">
						<h1 className="mb-4 text-4xl font-bold">Entre em contato</h1>
						<p className="text-lg text-muted-foreground">
							Tem alguma dúvida ou deseja conversar sobre projetos, oportunidades ou parcerias? Fique à vontade para entrar em contato.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<motion.div variants={fadeIn('right', 0.3)}>
							<Card className="h-full card-gradient">
								<CardContent className="p-6">
									<h2 className="mb-6 text-2xl font-semibold">Informações de contato</h2>
									<div className="space-y-4">
										<div className="flex items-center">
											<Phone className="mr-3 h-5 w-5 text-primary" />
											<p className="text-muted-foreground">(24) 99963-8117</p>
										</div>
										<div className="flex items-center">
											<Mail className="mr-3 h-5 w-5 text-primary" />
											<p className="text-muted-foreground">engenhariadesoftwareguilherme@gmail.com</p>
										</div>
										<div className="flex items-center">
											<MapPin className="mr-3 h-5 w-5 text-primary" />
											<p className="text-muted-foreground">Barra Mansa, RJ, Brasil</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div variants={fadeIn('left', 0.3)}>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<Input
										placeholder="Seu nome"
										name="name"
										value={formState.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Input
										type="email"
										placeholder="Seu e-mail"
										name="email"
										value={formState.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Input
										placeholder="Assunto"
										name="subject"
										value={formState.subject}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Textarea
										placeholder="Sua mensagem"
										name="message"
										value={formState.message}
										onChange={handleChange}
										required
										className="min-h-[150px]"
									/>
								</div>
								<Button type="submit" className="w-full">
									Enviar mensagem <Send className="ml-2 h-4 w-4" />
								</Button>
							</form>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
