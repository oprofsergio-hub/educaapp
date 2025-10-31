# Bibliotecas locais

Este diretório é preenchido automaticamente pelo script `npm run fetch:vendors`.
Ele armazena as versões offline das bibliotecas de terceiros utilizadas pelo
EducaFlow (Chart.js, jsPDF, XLSX, TensorFlow.js, Toxicity e html2canvas).

Durante o desenvolvimento os arquivos são opcionais, pois o `vendor-loader.js`
faz fallback para os CDNs públicos. Entretanto, para o build do APK offline é
imprescindível executar o script e garantir que os arquivos `.js` estejam
presentes aqui antes de gerar o pacote Android.
