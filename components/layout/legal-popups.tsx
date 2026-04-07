'use client';

import { useEffect, useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

type LegalDocId = 'privacy' | 'terms';

type LegalSection = {
	title: string;
	paragraphs: string[];
};

type LegalDocument = {
	id: LegalDocId;
	title: string;
	description: string;
	acceptLabel: string;
	storageKey: string;
	sections: LegalSection[];
};

const legalDocuments: LegalDocument[] = [
	{
		id: 'privacy',
		title: 'Política de Privacidade',
		description:
			'Última atualização: 6 de abril de 2026. Este documento explica, de forma transparente, como as informações relacionadas a este portfólio podem ser tratadas.',
		acceptLabel: 'Declaro que li e aceito a Política de Privacidade deste portfólio.',
		storageKey: 'meneguelli-privacy-accepted-at',
		sections: [
			{
				title: '1. Finalidade deste portfólio',
				paragraphs: [
					'Este site tem finalidade exclusivamente profissional e institucional, sendo utilizado para apresentar projetos, experiências, habilidades, formas de contato e demais informações relacionadas à trajetória de Guilherme Meneguelli.',
					'O conteúdo disponibilizado neste portfólio busca facilitar o contato para oportunidades profissionais, parcerias, networking e apresentação pública de trabalhos desenvolvidos ao longo da carreira.',
				],
			},
			{
				title: '2. Dados que podem ser informados voluntariamente',
				paragraphs: [
					'Ao utilizar os canais de contato exibidos neste site, a pessoa visitante poderá fornecer, de forma voluntária, dados como nome, e-mail, telefone, assunto e mensagem.',
					'Essas informações são fornecidas por iniciativa da própria pessoa usuária, especialmente quando há interesse em contato profissional, propostas de trabalho, dúvidas, convites ou parcerias.',
				],
			},
			{
				title: '3. Como as informações podem ser utilizadas',
				paragraphs: [
					'As informações eventualmente compartilhadas poderão ser utilizadas para responder mensagens, manter contato profissional, avaliar oportunidades, dar continuidade a conversas iniciadas pela própria pessoa interessada e organizar comunicações relacionadas ao portfólio.',
					'Este portfólio não tem como objetivo vender, comercializar ou divulgar dados pessoais a terceiros para fins de marketing indiscriminado.',
				],
			},
			{
				title: '4. Plataformas e serviços de terceiros',
				paragraphs: [
					'Alguns contatos e interações poderão ocorrer por plataformas externas, como e-mail, WhatsApp, LinkedIn, GitHub ou outros serviços vinculados no site. Nesses casos, o tratamento das informações também poderá estar sujeito às políticas e práticas dessas plataformas.',
					'Este portfólio pode conter links externos apenas para fins informativos, profissionais ou de verificação de projetos, sem controle direto sobre o conteúdo e as práticas de privacidade mantidas por terceiros.',
				],
			},
			{
				title: '5. Segurança e boa-fé',
				paragraphs: [
					'São adotadas medidas razoáveis de organização e cuidado para proteger as informações relacionadas a este portfólio, respeitando princípios de boa-fé, necessidade, transparência e finalidade.',
					'Apesar disso, nenhum ambiente digital pode ser considerado absolutamente inviolável, motivo pelo qual não é possível garantir segurança total contra falhas técnicas, acessos indevidos ou incidentes externos.',
				],
			},
			{
				title: '6. Direitos da pessoa titular',
				paragraphs: [
					'Nos limites aplicáveis, a pessoa titular dos dados poderá solicitar esclarecimentos sobre informações fornecidas voluntariamente, bem como pedir correção, atualização ou exclusão quando cabível.',
					'Para qualquer solicitação relacionada à privacidade, o contato poderá ser realizado pelo e-mail: engenhariadesoftwareguilherme@gmail.com.',
				],
			},
			{
				title: '7. Atualizações desta política',
				paragraphs: [
					'Esta Política de Privacidade poderá ser atualizada a qualquer momento para refletir melhorias no portfólio, mudanças nos canais de contato, ajustes operacionais ou alterações legais relevantes.',
					'A versão mais recente será sempre a apresentada neste pop-up, com a respectiva data de atualização indicada no início do documento.',
				],
			},
		],
	},
	{
		id: 'terms',
		title: 'Termos de Serviço',
		description:
			'Última atualização: 6 de abril de 2026. Estes termos regulam o uso deste portfólio profissional e dos conteúdos disponibilizados nele.',
		acceptLabel: 'Declaro que li e aceito os Termos de Serviço deste portfólio.',
		storageKey: 'meneguelli-terms-accepted-at',
		sections: [
			{
				title: '1. Aceitação e uso do site',
				paragraphs: [
					'Ao acessar este portfólio e interagir com seus conteúdos, a pessoa visitante concorda em utilizá-lo de maneira lícita, ética e compatível com sua finalidade profissional.',
					'O uso deste site não autoriza práticas que prejudiquem sua integridade, sua disponibilidade, sua reputação ou a segurança de seus conteúdos e canais de contato.',
				],
			},
			{
				title: '2. Natureza do conteúdo',
				paragraphs: [
					'Este portfólio tem caráter informativo, profissional e institucional, reunindo experiências, competências, projetos, contatos e apresentações de autoria relacionada a Guilherme Meneguelli.',
					'As informações aqui publicadas podem ser atualizadas, expandidas, corrigidas ou removidas a qualquer momento, sem obrigação de aviso prévio individualizado.',
				],
			},
			{
				title: '3. Propriedade intelectual',
				paragraphs: [
					'Salvo indicação em contrário, os textos, descrições, organização do conteúdo, identidade visual, estrutura de apresentação e demais materiais deste portfólio pertencem ao seu titular ou são utilizados de forma legítima.',
					'Não é permitida a reprodução, cópia, redistribuição ou exploração do conteúdo para fins comerciais sem autorização prévia e expressa, exceto nos casos admitidos pela legislação aplicável.',
				],
			},
			{
				title: '4. Conduta esperada da pessoa usuária',
				paragraphs: [
					'A pessoa visitante compromete-se a não utilizar o formulário, os links de contato ou quaisquer recursos deste site para envio de spam, mensagens ofensivas, tentativas de fraude, coleta indevida de dados ou qualquer prática abusiva.',
					'O uso inadequado dos canais de contato poderá resultar em bloqueio, desconsideração de mensagens ou adoção das medidas cabíveis para resguardar os interesses do titular do portfólio.',
				],
			},
			{
				title: '5. Links e serviços externos',
				paragraphs: [
					'Este portfólio pode direcionar para serviços de terceiros, como GitHub, LinkedIn, WhatsApp e e-mail. O acesso a esses ambientes dependerá das regras, disponibilidades e políticas definidas por cada plataforma externa.',
					'Não há responsabilidade por alterações, indisponibilidades, conteúdos, políticas ou práticas adotadas por sites e serviços que não sejam administrados diretamente neste portfólio.',
				],
			},
			{
				title: '6. Limitação de responsabilidade',
				paragraphs: [
					'Embora haja cuidado com a qualidade e a atualização das informações apresentadas, este portfólio é disponibilizado no estado em que se encontra, sem garantia de disponibilidade contínua, ausência de erros ou adequação a finalidades específicas de terceiros.',
					'O titular do portfólio não se responsabiliza por danos decorrentes de indisponibilidade temporária, falhas técnicas, decisões tomadas com base exclusiva nas informações do site ou uso indevido por terceiros.',
				],
			},
			{
				title: '7. Contato e disposições finais',
				paragraphs: [
					'Em caso de dúvidas sobre estes Termos de Serviço, solicitações relacionadas ao conteúdo ou questões ligadas ao uso do portfólio, o contato poderá ser feito pelo e-mail engenhariadesoftwareguilherme@gmail.com.',
					'A permanência no uso deste site após atualizações relevantes destes termos poderá ser interpretada como ciência da versão mais recente apresentada neste documento.',
				],
			},
		],
	},
];

export function LegalPopups() {
	const [activeDocumentId, setActiveDocumentId] = useState<LegalDocId | null>(null);
	const [acceptedAt, setAcceptedAt] = useState<Record<LegalDocId, string | null>>({
		privacy: null,
		terms: null,
	});
	const [hasCheckedAcceptance, setHasCheckedAcceptance] = useState(false);

	useEffect(() => {
		const nextAcceptedState: Record<LegalDocId, string | null> = {
			privacy: null,
			terms: null,
		};

		for (const doc of legalDocuments) {
			nextAcceptedState[doc.id] = window.localStorage.getItem(doc.storageKey);
		}

		setAcceptedAt(nextAcceptedState);
	}, []);

	useEffect(() => {
		setHasCheckedAcceptance(false);
	}, [activeDocumentId]);

	const activeDocument = useMemo(
		() => legalDocuments.find((doc) => doc.id === activeDocumentId) ?? null,
		[activeDocumentId]
	);

	const acceptanceMessage = activeDocumentId
		? acceptedAt[activeDocumentId]
		: null;

	const handleAccept = () => {
		if (!activeDocument) {
			return;
		}

		const acceptedDate = new Date().toISOString();
		window.localStorage.setItem(activeDocument.storageKey, acceptedDate);
		setAcceptedAt((current) => ({
			...current,
			[activeDocument.id]: acceptedDate,
		}));
		setActiveDocumentId(null);
	};

	const formatAcceptanceDate = (dateString: string) =>
		new Intl.DateTimeFormat('pt-BR', {
			dateStyle: 'medium',
			timeStyle: 'short',
		}).format(new Date(dateString));

	return (
		<>
			<div className="mt-4 sm:mt-0 flex gap-4">
				<button
					type="button"
					onClick={() => setActiveDocumentId('privacy')}
					className="text-muted-foreground hover:text-primary transition-colors"
				>
					Política de Privacidade
				</button>
				<button
					type="button"
					onClick={() => setActiveDocumentId('terms')}
					className="text-muted-foreground hover:text-primary transition-colors"
				>
					Termos de Serviço
				</button>
			</div>

			<Dialog open={Boolean(activeDocument)} onOpenChange={(open) => !open && setActiveDocumentId(null)}>
				{activeDocument && (
					<DialogContent className="h-[88vh] max-w-5xl grid-rows-[auto_minmax(0,1fr)_auto] gap-0 overflow-hidden p-0">
						<DialogHeader className="border-b px-6 py-5 pr-12">
							<DialogTitle className="text-2xl">{activeDocument.title}</DialogTitle>
							<DialogDescription className="mt-2">
								{activeDocument.description}
							</DialogDescription>
						</DialogHeader>

						<ScrollArea className="h-full px-6 py-6">
							<div className="space-y-8 pr-4">
								{activeDocument.sections.map((section) => (
									<section key={section.title} className="space-y-3">
										<h3 className="text-lg font-semibold">{section.title}</h3>
										<div className="space-y-3 text-sm leading-7 text-muted-foreground">
											{section.paragraphs.map((paragraph) => (
												<p key={paragraph}>{paragraph}</p>
											))}
										</div>
									</section>
								))}
							</div>
						</ScrollArea>

						<DialogFooter className="border-t px-6 py-5">
							<div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:space-x-0">
								<div className="flex-1">
									{acceptanceMessage ? (
										<p className="text-sm text-muted-foreground">
											Este documento já foi aceito neste navegador em{' '}
											{formatAcceptanceDate(acceptanceMessage)}.
										</p>
									) : (
										<label className="flex items-start gap-3 text-sm text-muted-foreground">
											<Checkbox
												className="mt-0.5"
												checked={hasCheckedAcceptance}
												onCheckedChange={(checked) => setHasCheckedAcceptance(checked === true)}
											/>
											<span>{activeDocument.acceptLabel}</span>
										</label>
									)}
								</div>

								<div className="flex flex-col-reverse gap-2 sm:flex-row">
									<Button variant="outline" onClick={() => setActiveDocumentId(null)}>
										Fechar
									</Button>
									{!acceptanceMessage && (
										<Button onClick={handleAccept} disabled={!hasCheckedAcceptance}>
											Aceitar
										</Button>
									)}
								</div>
							</div>
						</DialogFooter>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
