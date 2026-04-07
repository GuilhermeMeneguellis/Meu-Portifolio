'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionHeader } from '@/components/ui/section-header';
import { fadeIn } from '@/lib/motion';

export function ContactPreview() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
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
		// Form submission would be handled here
		alert('Formulário enviado! Esta é uma demonstração e nenhum e-mail será enviado de verdade.');
		setFormState({ name: '', email: '', message: '' });
	};

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title="Entre em contato"
					description="Tem interesse em trabalharmos juntos ou quer tirar uma dúvida? Fique à vontade para me chamar."
					className="text-center"
				/>

				<motion.div
					variants={fadeIn('up', 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="max-w-md mx-auto mt-10"
				>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<Input
								name="name"
								placeholder="Seu nome"
								value={formState.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<Input
								name="email"
								type="email"
								placeholder="Seu e-mail"
								value={formState.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<Textarea
								name="message"
								placeholder="Sua mensagem"
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
		</section>
	);
}
