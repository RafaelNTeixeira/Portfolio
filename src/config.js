export const GITHUB_USERNAME = 'RafaelNTeixeira';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/rafael-teixeira-304144295/';
export const EMAIL = 'rafael2003t.18@gmail.com';
export const BIRTH_YEAR = 2003;

// Se tiveres um token GitHub (opcional, aumenta o rate limit de 60 para 5000 req/h)
// Cria um token em https://github.com/settings/tokens com scope "public_repo"
// e coloca num ficheiro .env como: VITE_GITHUB_TOKEN=ghp_...
export const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || null;
