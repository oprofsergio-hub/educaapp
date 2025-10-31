# Guia de build Android (APK)

Este documento descreve como empacotar o EducaFlow como um aplicativo Android
offline utilizando o Capacitor. O processo gera duas variantes:

- **EducaFlow Free** – modo offline com limites de 3 turmas e 10 alunos (licença
  "free" por padrão).
- **EducaFlow Pro** – modo offline com dados ilimitados. A versão Pro também pode
  ser habilitada dentro do próprio aplicativo por meio do fluxo de upgrade
  simulado.

## 1. Pré-requisitos

1. Node.js 18 ou superior e npm instalados.
2. Android Studio 2022+ e Java 11.
3. Variáveis de ambiente Android configuradas (`ANDROID_HOME`, `JAVA_HOME`).

```bash
node -v
npm -v
```

## 2. Instalar dependências do projeto

```bash
npm install
```

> O repositório já define as dependências do Capacitor no `package.json`. O
> comando acima cria o diretório `node_modules/` e instala `@capacitor/cli`,
> `@capacitor/core` e `@capacitor/android`.

## 3. Baixar bibliotecas para uso offline

O aplicativo usa bibliotecas de terceiros (Chart.js, jsPDF, XLSX, TensorFlow.js,
modelo de toxicidade e html2canvas). Execute o script abaixo para baixar as
versões atuais para o diretório `libs/`:

```bash
npm run fetch:vendors
```

Durante o desenvolvimento os arquivos são opcionais, pois o `vendor-loader.js`
faz fallback para os CDNs. Para gerar o APK offline eles são obrigatórios.

## 4. Definir a edição padrão (Free ou Pro)

O arquivo `index.html` configura o objeto `window.EDUCAFLOW_CONFIG`. Ajuste o
valor de `edition` antes do build:

```html
window.EDUCAFLOW_CONFIG = {
  mode: 'offline',
  edition: 'free', // use 'pro' para gerar a variante Pro pré-ativada
  offlineStorageKey: 'educaflow.offline.v1',
  licenseStorageKey: 'educaflow.license.v1'
};
```

- **Free APK**: mantenha `edition: 'free'`. O usuário pode comprar/ativar a Pro
  dentro do app (licença salva no armazenamento local).
- **Pro APK**: altere para `edition: 'pro'` antes de rodar o build. Isso grava a
  licença Pro já ativada na inicialização.

## 5. Sincronizar o projeto Android

```bash
npx cap add android # executado apenas na primeira vez
npm run android:sync # copia os arquivos web para android/app/src/main/assets
```

Após rodar `npm run android:sync`, o Capacitor gera/atualiza a pasta `android/`.
Você pode abrir o projeto no Android Studio com:

```bash
npm run android:open
```

## 6. Gerar o APK no Android Studio

1. No Android Studio, abra **Build > Build Bundle(s)/APK(s) > Build APK(s)**.
2. Aguarde a conclusão e utilize **Locate** para abrir a pasta com o APK.
3. Assine o APK (caso necessário) pelo menu **Build > Generate Signed Bundle/APK**.

## 7. Persistência offline e upgrades

- Todos os dados (alunos, turmas, infrações, suspensões, responsáveis) são
  armazenados localmente via `localStorage`. O arquivo `offline-support.js`
  gerencia a base e a `EducaFlowLicenseManager`.
- O fluxo "Versão Pro" usa armazenamento local para simular uma compra
  in-app. A chave é preservada no dispositivo e pode ser restaurada pelo botão
  "Restaurar licença".
- Para migrar futuramente para o modo multiusuário (Firebase), basta alterar o
  `mode` para `'cloud'` no mesmo objeto de configuração e garantir que o build
  inclua as credenciais Firebase.

## 8. Checklist antes da publicação

- [ ] Executar `npm run fetch:vendors` e confirmar se os arquivos `.js` existem
  em `libs/`.
- [ ] Ajustar `edition` para a variante desejada (free/pro).
- [ ] Atualizar ícones, nome do pacote (`appId` em `capacitor.config.json`) e
  versão da aplicação conforme necessário.
- [ ] Realizar testes manuais nos fluxos offline (cadastro, limite Free,
  upgrade/downgrade, exportações, relatórios).
- [ ] Validar se o APK carrega mesmo sem conexão com a internet (modo avião).

Com esses passos você terá um APK Android pronto para publicação na Play Store
ou distribuição interna, mantendo o caminho aberto para sincronização em nuvem
no futuro.
