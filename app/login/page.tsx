'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { AlertCircle, Loader2, LogIn } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GoogleButton } from '@/components/auth/google-button';
import { LavaBackground } from '@/components/ui/lava-background';
import { fadeIn } from '@/lib/motion';

const errorMessages: Record<string, string> = {
	CredentialsSignin: 'E-mail ou senha inválidos.',
	OAuthAccountNotLinked: 'Este e-mail já está vinculado a outra forma de login.',
	AccessDenied: 'Acesso negado. Tente novamente.',
	Default: 'Não foi possível concluir o login. Tente novamente.',
};

function LoginContent() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const { status } = useSession();

	const callbackUrl = searchParams.get('callbackUrl') || '/';
	const urlError = searchParams.get('error');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [formError, setFormError] = useState<string | null>(
		urlError ? errorMessages[urlError] ?? errorMessages.Default : null,
	);

	useEffect(() => {
		if (status === 'authenticated') {
			router.replace(callbackUrl);
		}
	}, [status, router, callbackUrl]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormError(null);
		setSubmitting(true);

		const res = await signIn('credentials', {
			email,
			password,
			redirect: false,
		});

		setSubmitting(false);

		if (!res) {
			setFormError(errorMessages.Default);
			return;
		}
		if (res.error) {
			setFormError(errorMessages[res.error] ?? errorMessages.Default);
			return;
		}
		router.replace(callbackUrl);
		router.refresh();
	};

	return (
		<section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-12">
			<LavaBackground />

			{/* Overlay escuro pra calmar o background e jogar o foco no form */}
			<div
				aria-hidden
				className="absolute inset-0 z-[1] bg-background/50"
			/>
			<div
				aria-hidden
				className="absolute inset-0 z-[1] bg-gradient-to-b from-background/40 via-transparent to-background/70"
			/>

			<motion.div
				variants={fadeIn('up', 0.1)}
				initial="hidden"
				animate="show"
				className="relative z-10 w-full max-w-md"
			>
				<div className="rounded-2xl border border-white/10 bg-background/50 p-8 shadow-2xl backdrop-blur-2xl supports-[backdrop-filter]:bg-background/30 md:p-10">
					<div className="mb-8 text-center">
						<div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-inner backdrop-blur">
							<LogIn className="h-6 w-6 text-foreground" />
						</div>
						<h1 className="font-display text-3xl font-light tracking-tight md:text-4xl">
							Entrar
						</h1>
						<p className="mt-2 text-sm text-muted-foreground">
							Acesse sua conta para continuar
						</p>
					</div>

					{formError ? (
						<div
							role="alert"
							className="mb-4 flex items-start gap-2 rounded-md border border-destructive/50 bg-destructive/15 p-3 text-sm text-destructive backdrop-blur-sm"
						>
							<AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
							<span>{formError}</span>
						</div>
					) : null}

					<div className="space-y-5">
						<GoogleButton callbackUrl={callbackUrl} />

						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t border-white/10" />
							</div>
							<div className="relative flex justify-center text-[10px] uppercase tracking-[0.25em]">
								<span className="bg-background/0 px-3 text-muted-foreground">
									ou com e-mail
								</span>
							</div>
						</div>

							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="email">E-mail</Label>
									<Input
										id="email"
										type="email"
										autoComplete="email"
										placeholder="voce@exemplo.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										disabled={submitting}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="password">Senha</Label>
									<Input
										id="password"
										type="password"
										autoComplete="current-password"
										placeholder="••••••••"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
										disabled={submitting}
									/>
								</div>

								<Button type="submit" className="w-full" disabled={submitting}>
									{submitting ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Entrando...
										</>
									) : (
										'Entrar'
									)}
								</Button>
							</form>
						</div>

					<div className="mt-8 flex items-center justify-center gap-3">
						<span aria-hidden className="h-px w-8 bg-white/10" />
						<p className="text-center text-sm text-muted-foreground">
							Ainda não tem conta?{' '}
							<Link
								href="/register"
								className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
							>
								Criar cadastro
							</Link>
						</p>
						<span aria-hidden className="h-px w-8 bg-white/10" />
					</div>
				</div>
			</motion.div>
		</section>
	);
}

export default function LoginPage() {
	return (
		<Suspense fallback={null}>
			<LoginContent />
		</Suspense>
	);
}
