import Link from 'next/link';
import { Linkedin, Github, Phone, Mail, MessageSquare } from 'lucide-react';

import { LegalPopups } from '@/components/layout/legal-popups';
import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
	const socialLinks = [
		{ icon: <Phone className="h-5 w-5" />, href: siteConfig.links.phone, label: 'Telefone' },
		{ icon: <Mail className="h-5 w-5" />, href: siteConfig.links.email, label: 'Email' },
		{ icon: <Linkedin className="h-5 w-5" />, href: siteConfig.links.linkedin, label: 'LinkedIn' },
		{ icon: <Github className="h-5 w-5" />, href: siteConfig.links.github, label: 'GitHub' },
		{ icon: <MessageSquare className="h-5 w-5" />, href: siteConfig.links.whatsapp, label: 'WhatsApp' },
	];

	const navColumns = [
		{
			title: 'Sobre',
			links: [
				{ title: 'Sobre mim', href: '/about' },
				{ title: 'Formação', href: '/education' },
				{ title: 'Habilidades', href: '/skills' },
			],
		},
		{
			title: 'Carreira',
			links: [
				{ title: 'Experiência', href: '/experience' },
				{ title: 'Projetos', href: '/projects' },
				{ title: 'Certificados', href: '/certificates' },
			],
		},
		{
			title: 'Conecte-se',
			links: [
				{ title: 'Blog', href: '/blog' },
				{ title: 'Contato', href: '/contact' },
				{ title: 'Currículo', href: '/cv.pdf', download: true },
			],
		},
	];

	return (
		<footer className="bg-card py-12 border-t">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="md:col-span-1">
						<Link href="/" className="inline-block">
							<span className="text-2xl font-bold text-gradient">Meneguelli System</span>
						</Link>
						<p className="mt-4 text-sm text-muted-foreground">
							Um portfólio profissional que apresenta minhas habilidades, projetos e conquistas na área da engenharia.
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							{socialLinks.map((link, index) => (
								<Button key={index} size="icon" variant="outline" asChild>
									<Link href={link.href} aria-label={link.label} target="_blank" rel="noreferrer">
										{link.icon}
									</Link>
								</Button>
							))}
						</div>
					</div>

					<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
						{navColumns.map((column, index) => (
							<div key={index}>
								<h3 className="font-semibold mb-3">{column.title}</h3>
								<ul className="space-y-2">
									{column.links.map((link, linkIndex) => (
										<li key={linkIndex}>
											<Link
												href={link.href}
												className="text-muted-foreground hover:text-primary text-sm transition-colors"
												{...(link.download ? { download: true } : {})}
											>
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<Separator className="my-8" />

				<div className="flex flex-col sm:flex-row items-center justify-between text-sm">
					<p className="text-muted-foreground">&copy; 2026 Meneguelli system. Todos os direitos reservados.</p>
					<LegalPopups />
				</div>
			</div>
		</footer>
	);
}
