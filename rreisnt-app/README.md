# RREISNT - App de Treino

Um aplicativo PWA para rastreamento de treinos, construído com React, Vite e Tailwind CSS.

## Funcionalidades

- Rastreamento de treinos semanais
- Registro de progresso de cargas
- Gráficos de progresso com Chart.js
- Exportação e importação de dados (compatível com iOS Safari)
- Design responsivo e moderno
- Suporte PWA (add-to-home screen)

## Instalação

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra o navegador em `http://localhost:5173`

## Build para Produção

```bash
npm run build
npm run preview
```

## PWA

O app é configurado como PWA. Para instalar no dispositivo:

- **Android/Chrome**: Clique em "Adicionar à tela inicial"
- **iOS/Safari**: Abra no Safari, toque em compartilhar → "Adicionar à Tela de Início"

## Estrutura do Projeto

```
rreisnt-app/
├─ public/
│  ├─ manifest.json
│  ├─ icons/
│  └─ robots.txt
├─ src/
│  ├─ components/
│  ├─ hooks/
│  ├─ utils/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  └─ service-worker.js
├─ package.json
├─ vite.config.js
└─ tailwind.config.cjs
```

## Paleta de Cores

- BG: #080409
- Muted: #807E81
- Accent: #E2322B
- White: #FFFEFF
- Accent Dark: #CB2A27
