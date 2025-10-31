(function () {
  const config = window.EDUCAFLOW_CONFIG || {};
  const preferLocal = config.mode !== 'cloud';

  const scripts = [
    {
      name: 'chartjs',
      local: 'libs/chart.min.js',
      remote: 'https://cdn.jsdelivr.net/npm/chart.js',
      check: () => typeof window.Chart !== 'undefined'
    },
    {
      name: 'jspdf',
      local: 'libs/jspdf.umd.min.js',
      remote: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
      check: () => Boolean(window.jspdf && window.jspdf.jsPDF)
    },
    {
      name: 'xlsx',
      local: 'libs/xlsx.full.min.js',
      remote: 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
      check: () => typeof window.XLSX !== 'undefined'
    },
    {
      name: 'tfjs',
      local: 'libs/tf.min.js',
      remote: 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.21.0/dist/tf.min.js',
      check: () => typeof window.tf !== 'undefined'
    },
    {
      name: 'toxicity',
      local: 'libs/toxicity.min.js',
      remote: 'https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity@1.2.2/dist/toxicity.min.js',
      check: () => typeof window.toxicity !== 'undefined'
    },
    {
      name: 'html2canvas',
      local: 'libs/html2canvas.min.js',
      remote: 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
      check: () => typeof window.html2canvas !== 'undefined'
    }
  ];

  function appendScript(src, label) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = () => resolve({ src, label });
      script.onerror = () => reject(new Error('Falha ao carregar script: ' + src));
      document.head.appendChild(script);
    });
  }

  function hasLibrary(definition) {
    if (typeof definition.check !== 'function') {
      return false;
    }
    try {
      return Boolean(definition.check());
    } catch (error) {
      console.warn(`Erro ao validar biblioteca ${definition.name}:`, error);
      return false;
    }
  }

  async function ensureScript(definition) {
    if (hasLibrary(definition)) {
      return { name: definition.name, status: 'cached' };
    }

    if (preferLocal && definition.local) {
      try {
        await appendScript(definition.local, `${definition.name}:local`);
        if (hasLibrary(definition)) {
          return { name: definition.name, status: 'local' };
        }
        throw new Error(`Biblioteca ${definition.name} não expôs os objetos esperados (local).`);
      } catch (error) {
        console.warn(`Não foi possível carregar ${definition.name} localmente:`, error);
      }
    }

    if (definition.remote) {
      try {
        await appendScript(definition.remote, `${definition.name}:remote`);
        if (hasLibrary(definition)) {
          return { name: definition.name, status: 'remote' };
        }
        throw new Error(`Biblioteca ${definition.name} não expôs os objetos esperados (remoto).`);
      } catch (error) {
        console.error(`Falha ao carregar biblioteca remota ${definition.name}:`, error);
        return { name: definition.name, status: 'failed', error };
      }
    }

    return { name: definition.name, status: 'missing' };
  }

  const loadResults = [];
  const errors = [];

  const readyPromise = scripts.reduce((chain, definition) => {
    return chain.then(async () => {
      const result = await ensureScript(definition);
      loadResults.push(result);
      if (result.status === 'failed' || result.status === 'missing') {
        errors.push({ name: definition.name, details: result.error || null });
      }
    });
  }, Promise.resolve());

  window.EDUCAFLOW_VENDOR_READY = readyPromise
    .catch((error) => {
      console.error('Erro inesperado ao carregar bibliotecas de terceiros:', error);
      errors.push({ name: 'vendor-loader', details: error });
    })
    .then(() => {
      if (errors.length > 0) {
        console.warn('Algumas bibliotecas não foram carregadas:', errors.map((entry) => entry.name).join(', '));
      } else {
        console.log('Todas as bibliotecas de terceiros foram carregadas com sucesso.');
      }
      return { results: loadResults, errors };
    });

  window.EDUCAFLOW_VENDOR_ERRORS = errors;
})();
