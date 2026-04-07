'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ContactPage() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Form submission logic would go here
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
					className="max-w-4xl mx-auto"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Entre em contato</h1>
						<p className="text-lg text-muted-foreground">
							Tem alguma dúvida ou quer trabalhar comigo? Fique à vontade para entrar em contato!
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<motion.div variants={fadeIn('right', 0.3)}>
							<Card className="card-gradient h-full">
								<CardContent className="p-6">
									<h2 className="text-2xl font-semibold mb-6">Informações de contato</h2>
									<div className="space-y-4">
										<div className="flex items-center">
											<Phone className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">+1 234 567 890</p>
										</div>
										<div className="flex items-center">
											<Mail className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">contact@example.com</p>
										</div>
										<div className="flex items-center">
											<MapPin className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">Cidade, País</p>
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
