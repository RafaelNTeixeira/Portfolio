# Rafael Teixeira — Portfolio

Portfolio pessoal construído em React + Vite, com scroll storytelling e integração com a GitHub API.

## 🚀 Setup Rápido

```bash
npm install
npm run dev
```

## ⚙️ Configuração Necessária

### 1. GitHub Username
Abre `src/config.js` e muda:
```js
export const GITHUB_USERNAME = 'o-teu-github-username';
export const EMAIL = 'o-teu@email.com';
```

### 2. Vídeo do Boneco
Coloca o teu vídeo em `public/boneco.mp4`.
- Formato recomendado: MP4 (H.264)
- Aspeto recomendado: vertical (9:16) ou quadrado
- Tamanho recomendado: < 10MB para carregamento rápido

### 3. (Opcional) GitHub Token
Para evitar rate limiting da API do GitHub, cria um token em https://github.com/settings/tokens
e cria um ficheiro `.env`:
```
VITE_GITHUB_TOKEN=ghp_xxxx
```

## 🌐 Deploy no Vercel

1. Faz push do projeto para um repositório GitHub
2. Vai a https://vercel.com e clica em "Add New Project"
3. Seleciona o teu repositório
4. Vercel auto-detecta Vite — clica em "Deploy"
5. (Opcional) Adiciona a variável `VITE_GITHUB_TOKEN` em Settings → Environment Variables

## 📁 Estrutura

```
portfolio/
├── public/
│   ├── boneco.mp4         ← O teu vídeo (adiciona aqui!)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Volunteering.jsx
│   │   ├── Projects.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── config.js          ← Configuração principal
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```
