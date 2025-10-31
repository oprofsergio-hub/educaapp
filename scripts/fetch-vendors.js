#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

const vendors = [
  {
    name: 'Chart.js',
    url: 'https://cdn.jsdelivr.net/npm/chart.js',
    file: 'chart.min.js'
  },
  {
    name: 'jsPDF',
    url: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
    file: 'jspdf.umd.min.js'
  },
  {
    name: 'XLSX',
    url: 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
    file: 'xlsx.full.min.js'
  },
  {
    name: 'TensorFlow.js',
    url: 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.21.0/dist/tf.min.js',
    file: 'tf.min.js'
  },
  {
    name: 'Toxicity model',
    url: 'https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity@1.2.2/dist/toxicity.min.js',
    file: 'toxicity.min.js'
  },
  {
    name: 'html2canvas',
    url: 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
    file: 'html2canvas.min.js'
  }
];

const targetDir = path.join(__dirname, '..', 'libs');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadVendor({ name, url, file }) {
  const destination = path.join(targetDir, file);
  return new Promise((resolve, reject) => {
    const fileStream = fs.createWriteStream(destination);
    console.log(`⬇️ Baixando ${name}...`);
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`${name} - download falhou com status ${response.statusCode}`));
          return;
        }
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close(() => {
            console.log(`✅ ${name} salvo em ${destination}`);
            resolve();
          });
        });
      })
      .on('error', (error) => {
        fs.unlink(destination, () => reject(error));
      });
  });
}

async function main() {
  for (const vendor of vendors) {
    try {
      await downloadVendor(vendor);
    } catch (error) {
      console.error(`❌ Erro ao baixar ${vendor.name}:`, error.message);
    }
  }
  console.log('🏁 Atualização das bibliotecas concluída.');
}

main();
