import { neon, type NeonQueryFunction } from '@neondatabase/serverless';

let cached: NeonQueryFunction<false, false> | null = null;

function getSql(): NeonQueryFunction<false, false> {
	if (cached) return cached;
	const url = process.env.DATABASE_URL;
	if (!url) {
		throw new Error(
			'DATABASE_URL não configurada. Copie .env.example para .env.local e preencha (ou rode `npx neonctl@latest init`).',
		);
	}
	cached = neon(url);
	return cached;
}

// Proxy que chama getSql() só no momento em que a query é executada.
// Evita que a ausência de DATABASE_URL quebre o import do módulo inteiro.
export const sql = ((strings: TemplateStringsArray, ...values: unknown[]) =>
	getSql()(strings, ...values)) as NeonQueryFunction<false, false>;

export type DbUser = {
	id: string;
	name: string;
	email: string;
	email_verified: Date | null;
	image: string | null;
	phone: string | null;
	password_hash: string | null;
	provider: 'google' | 'credentials';
	provider_id: string | null;
	created_at: Date;
	updated_at: Date;
};
