/**
 * =========================================================
 *  Inicializar Projeto Node.js + TypeScript
 * =========================================================
 *
 * Este arquivo serve como REFERÊNCIA RÁPIDA para iniciar
 * um projeto Node moderno utilizando TypeScript.
 *
 * ---------------------------------------------------------
 * 1) Inicializar o projeto
 * ---------------------------------------------------------
 *
 * npm init -y
 *
 * ---------------------------------------------------------
 * 2) Instalar dependências de desenvolvimento
 * ---------------------------------------------------------
 *
 * TypeScript + tipagens do Node:
 *
 * npm install --save-dev typescript @types/node
 *
 * Executor de TypeScript (sem build):
 *
 * npm install --save-dev tsx
 *
 * ---------------------------------------------------------
 * 3) Gerar o tsconfig.json
 * ---------------------------------------------------------
 *
 * npx tsc --init
 *
 * ---------------------------------------------------------
 * 4) Trecho recomendado para tsconfig.json
 * ---------------------------------------------------------
 *
 * {
 *   "compilerOptions": {
 *     "allowImportingTsExtensions": true,
 *     "noEmit": true,
 *     "module": "nodenext",
 *     "moduleResolution": "nodenext",
 *     "target": "esnext",
 *     "strict": true,
 *     "esModuleInterop": true,
 *     "types": ["node"],
 *     "skipLibCheck": true
 *   }
 * }
 *
 * ---------------------------------------------------------
 * 5) Significado das principais opções
 * ---------------------------------------------------------
 *
 * allowImportingTsExtensions
 *  → Permite importar arquivos com extensão .ts/.mts (ESM)
 *
 * noEmit
 *  → Não gera arquivos .js (ideal para uso com tsx)
 *
 * module / moduleResolution: nodenext
 *  → Usa o sistema de módulos moderno do Node (ESM)
 *
 * target: esnext
 *  → Usa recursos modernos do JavaScript sem transpilar
 *
 * strict
 *  → Ativa todas as verificações estritas do TypeScript
 *
 * esModuleInterop
 *  → Facilita o uso de libs CommonJS com import ESM
 *
 * types: ["node"]
 *  → Habilita tipagens globais do Node.js
 *
 * skipLibCheck
 *  → Ignora checagem de tipos de libs externas (mais rápido)
 *
 * ---------------------------------------------------------
 * 6) Exemplo de scripts no package.json
 * ---------------------------------------------------------
 *
 * {
 *   "scripts": {
 *     "start": "tsx watch index.ts"
 *   }
 * }
 *
 * Sobre o script "start":
 *  - Executa o arquivo index.ts
 *  - Modo watch com reload automático
 *  - Ideal para desenvolvimento local
 * - Permite rodar TS sem build prévio
 * - Simplifica o fluxo de trabalho
 * - Use "npm start" para iniciar
 * =========================================================
 */
