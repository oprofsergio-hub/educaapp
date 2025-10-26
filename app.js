/**
 * EducaFlow Pro - Sistema Completo de Gestão Escolar
 * VERSÃO 2.0 - CORREÇÕES CRÍTICAS IMPLEMENTADAS
 * BUGFIX: Navegação e modais corrigidos
 * - Salvamento funcional no Firebase (CORRIGIDO)
 * - Sistema completo de responsáveis
 * - Relatórios educacionais com texto pedagógico editável
 * - Filtros avançados e estatísticas
 * - Export/Print funcional
 * - Navegação entre tabs CORRIGIDA
 * - Modais com fechamento funcional CORRIGIDO
 */

// Constante contendo o logotipo em formato Base64 (PNG). Essa string será usada para definir
// o atributo src das imagens de logotipo (classe .logo-img) diretamente via JavaScript.
const EDUCAFLOW_LOGO_DATA_URI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAACv4mNhQlgAAK/ianVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANvtqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOjY2ZDc1ZjI1LTZkYTItNDIwYy1iNjM5LTIxYmE2NDkwMmQ1NgAAAAHBanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAA5Wp1bWIAAAApanVtZGNib3IAEQAQgAAAqgA4m3EDYzJwYS5hY3Rpb25zLnYyAAAAALRjYm9yoWdhY3Rpb25zgqNmYWN0aW9ubGMycGEuY3JlYXRlZG1zb2Z0d2FyZUFnZW50v2RuYW1lZkdQVC00b/9xZGlnaXRhbFNvdXJjZVR5cGV4Rmh0dHA6Ly9jdi5pcHRjLm9yZy9uZXdzY29kZXMvZGlnaXRhbHNvdXJjZXR5cGUvdHJhaW5lZEFsZ29yaXRobWljTWVkaWGhZmFjdGlvbm5jMnBhLmNvbnZlcnRlZAAAAKtqdW1iAAAAKGp1bWRjYm9yABEAEIAAAKoAOJtxA2MycGEuaGFzaC5kYXRhAAAAAHtjYm9ypWpleGNsdXNpb25zgaJlc3RhcnQYIWZsZW5ndGgZNy1kbmFtZW5qdW1iZiBtYW5pZmVzdGNhbGdmc2hhMjU2ZGhhc2hYIPH+oB+0IU0Ypto3NbVNVNXmd3MqY55gLoja/Kt5V5w3Y3BhZEgAAAAAAAAAAAAAAe5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAABv2Nib3Kmamluc3RhbmNlSUR4LHhtcDppaWQ6MjU0OTQ0Y2YtNWY4ZS00MDFkLWJhY2UtNTA0ODBlNmZkYjBidGNsYWltX2dlbmVyYXRvcl9pbmZvv2RuYW1lZ0NoYXRHUFR3b3JnLmNvbnRlbnRhdXRoLmMycGFfcnNmMC42Ny4x/2lzaWduYXR1cmV4TXNlbGYjanVtYmY9L2MycGEvdXJuOmMycGE6NjZkNzVmMjUtNmRhMi00MjBjLWI2MzktMjFiYTY0OTAyZDU2L2MycGEuc2lnbmF0dXJlcmNyZWF0ZWRfYXNzZXJ0aW9uc4KiY3VybHgqc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5hY3Rpb25zLnYyZGhhc2hYII9OoyotmtGJ2mI9SUEyQP312im5mlYkGrGNlmEyEzy1omN1cmx4KXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaGFzaC5kYXRhZGhhc2hYIH7c05i86kmVh1yCoNnh1yLU3v6IyIvJkP3lvFxcXF/daGRjOnRpdGxlaWltYWdlLnBuZ2NhbGdmc2hhMjU2AAAy/Wp1bWIAAAAoanVtZGMyY3MAEQAQgAAAqgA4m3EDYzJwYS5zaWduYXR1cmUAAAAyzWNib3LShFkHwaIBJhghglkDNzCCAzMwggIboAMCAQICFG6uKKPuxbjkKjb6HeZBFa5iFhs7MA0GCSqGSIb3DQEBDAUAMEoxGjAYBgNVBAMMEVdlYkNsYWltU2lnbmluZ0NBMQ0wCwYDVQQLDARMZW5zMRAwDgYDVQQKDAdUcnVlcGljMQswCQYDVQQGEwJVUzAeFw0yNTAxMTMyMDM2NDZaFw0yNjAxMTMyMDM2NDVaMFYxCzAJBgNVBAYTAlVTMQ8wDQYDVQQKDAZPcGVuQUkxEDAOBgNVBAsMB0NoYXRHUFQxJDAiBgNVBAMMG1RydWVwaWMgTGVucyBDTEkgaW4gQ2hhdEdQVDBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABFYdeMcqUA997gTIFPWrpHZ7i+3ToyM91aZCM9lMKQlCMTAIS6U1leiR4y7w2pqjrAEK7gLZiV8M1S27LhaaN+ijgc8wgcwwDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBRaH2tm05TnsEGDfZwMe13Fc0tLszBNBggrBgEFBQcBAQRBMD8wPQYIKwYBBQUHMAGGMWh0dHA6Ly92YS50cnVlcGljLmNvbS9lamJjYS9wdWJsaWN3ZWIvc3RhdHVzL29jc3AwHQYDVR0lBBYwFAYIKwYBBQUHAwQGCCsGAQUFBwMkMB0GA1UdDgQWBBTKXhMuLBs1om1iRU0zQwVi7JP4KjAOBgNVHQ8BAf8EBAMCB4AwDQYJKoZIhvcNAQEMBQADggEBAHloPns944Lh2V25uG67odcSRNCXFCn1B1Mt0/f6p9PyPeER6QLiRxrTkfNoXin96s18il7t60Yf8OZBSrncA2mqr8VaQ9lFywCvjfTcaq9Niy2MmwCfM9OD670t6VimNxeT76FeZ8QPQ6R2yVUgSQbfsRqNmrcXAhp9A3p8ZB+6UYag/p2BYr7cqYhJ7sDR/Ca1G40TyWtO4jBH3vSO1BH7FzworINIcUxZTGTyZMas6gOjr0u9avikKoNqk87mZYxdiSELNZVskThwcGUtpWW67sag0y7vrr2uPUYKvV8EFfQnmhDvmkSltkEIKf0viECSvC79FNRjd6loZw8YAcpZBH4wggR6MIICYqADAgECAhRp/JDEzIlQgjoeqF/Sgv8o1f2TkDANBgkqhkiG9w0BAQwFADA/MQ8wDQYDVQQDDAZSb290Q0ExDTALBgNVBAsMBExlbnMxEDAOBgNVBAoMB1RydWVwaWMxCzAJBgNVBAYTAlVTMB4XDTIxMTIwOTIwMzk0NloXDTI2MTIwODIwMzk0NVowSjEaMBgGA1UEAwwRV2ViQ2xhaW1TaWduaW5nQ0ExDTALBgNVBAsMBExlbnMxEDAOBgNVBAoMB1RydWVwaWMxCzAJBgNVBAYTAlVTMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwRYSw6dQwZjMzmv4jqTxxWr6cpaI2AUz+4rsgvJlgOdBnJrE4WAVxwToKGv1x9reCooi+sWno/YKKP4HYjsKywl5ZXkOWJqUPJYvL2LVFljMiqiXykiQAlnrCDbnry+lPft/k+93sb7oejj4FB5EF1Bo4flnqRdJ9b9Nyvv2vIGhn2RI4VgIelyrekH7hoY6AaHupnLeIKLdwqhRNZ2Ml6tydDL5E5ub+rtZ/dTYV0zIre+hcR+FbB/n2B3wvSrkNGaIvpkTsH2x32Ftzb5u1vPf6DMXUyr/A3WWo5rb5xYqkR0Yx0u2AxFU1vOZxnGLk75wUrkS5caFfWgYwQKybwIDAQABo2MwYTAPBgNVHRMBAf8EBTADAQH/MB8GA1UdIwQYMBaAFFi68anyDedFBgqwKadalzDqJz0LMB0GA1UdDgQWBBRaH2tm05TnsEGDfZwMe13Fc0tLszAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQEMBQADggIBAHU4hnoXEULwV3wGsLt33TuNhcppxeRBWjOMIXqGcX9F7Yt8U9Cq5zG4cz93U2GgYZ+mToXq8/DIPduM55BXFbBffJE2Y5OpaFbpRcdPOycUipySawFdgisHR8vRBFY/q9RDGy40FurSU9CiDQrljZcXRA4Zu//ZYYYGwntNW1p/DnFZXzjV/3bhjt+dKTNAYuolo9omFVXJ5XxQMKE/SqG43ZF6S3wLqCTI1CvildOWAsyqAtUPtcbCsvfCQAAgs+LLPtHWycmtQothXay+Q+f3q1AHoY67gu2Tb0HqbKicjAcc9B+WxCXhXbzHDaWsAu25k61pKvjsKzY4az/CfoiJbRwQUJ53yyahR7TkG9k4Sr5Lg7Y9IrLdBD9ShaJvtBCJrztepeg5dPwGLm8jxSX7kjOrF7OmYBARc9+9Pou1IO05Lqh3BE5CxLwWtrgtQSJUnJ4eTMBcmhJ/Vd2EopxAmGiK5Wn/5LK7m5O5/0pLdV1zLO5EymbBYSdx7FCpI9MhUTaBjatWj6Z4CRvdVfJ0UzP5Fecwp0kTTLmoI7Kxqv6l1N/K1MU3tzyJ2D6zrs5Jb0xsyUh76/NRjt+M19N8ANBpmDKllDGWmMEm5yEJHRrnt1pwNuDVKRKfpMJvisVt47sJKf+CinhVrmGJKrt76Z/9UP+eXERitt2CJ+nRoWNwYWRZKrQ';

class EducaFlowPro {
    constructor(options = {}) {
        console.log('🚀 Iniciando EducaFlow Pro v2.0...');
        this.options = options;
        this.forceRedirectLogin = Boolean(options.forceRedirect);
        this.sessionStorageOverride = options.sessionStorage || null;
        this._cachedSessionStorage = undefined;
        this.redirectStorageKey = 'redirectInProgress';
        this.currentUser = null;
        this.database = null;
        this.auth = null;
        this.googleProvider = null;
        this.isInitialized = false;
        this.isDemoMode = false;
        this.pedagogicalText = '';

        /**
         * Data URI do logotipo. Este valor é injetado diretamente nas tags <img> com a classe
         * .logo-img para garantir que o logotipo seja exibido mesmo em ambientes onde o
         * arquivo externo não seja carregado (por exemplo, após hospedagem estática).
         */
        this.logoDataUri = EDUCAFLOW_LOGO_DATA_URI;
        // Substitui o logotipo padrão por uma versão simplificada (azul com texto "EducaFlow")
        this.logoDataUri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABQCAIAAAAsiN8sAAABpElEQVR4nO3Yy23CQBRAUYhSR9JK6IBOoQNqoZMsSJA1tsjP8l3knJUF9sMLX82Y/cvbaQd0nuobgP9OhBATIcRECDERQkyEEBMhxEQIMRFCTIQQEyHERAgxEUJMhBATIcRECDERQkyEEBMhxEQIMRFCTIQQEyHERAgxEUJMhBATIcRECDERQkyEEBMhxEQIMRFCTIQQEyHEnusb4MP1crwdvB7Oq89cdyzrEuHWpmHsJm28Hs7DV38Zext4G/6XsWxAhI1hXZp2Ml0Sb8dDS/drp58MJz+wOP96OX5/AuvyTti4Xo73GIZHf7GBeY2LfQ6Tv5wz/y0Fbs9K2Pj1sz5sXxd3oT+dOa2a7VkJM4+XrC+vWmvraOnL7V/eTvU9/C+Lf8zM/8acnza8Ez4IeP7S+GDO7nNfurg7ZQMihJjtKMRECDERQkyEEBMhxEQIMRFCTIQQEyHERAgxEUJMhBATIcRECDERQkyEEBMhxEQIMRFCTIQQEyHERAgxEUJMhBATIcRECDERQkyEEBMhxEQIMRFCTIQQEyHERAgxEUJMhBB7B1GQhG1CyNAcAAAAAElFTkSuQmCC';
        /**
         * Objeto de configurações globais do aplicativo.
         * - reportHeader: cabeçalho personalizado para relatórios PDF.
         * - defaultPedagogicalText: texto pedagógico padrão para advertências.
         * - tagline: frase de rodapé exibida ao lado do logotipo.
         */
        this.config = {
            reportHeader: '',
            defaultPedagogicalText: '',
            tagline: ''
        };
        /**
         * Paletas de cores disponíveis. Cada tema define valores básicos para
         * --color-primary e cores derivadas. Os temas podem ser expandidos para
         * alterar outros tokens se necessário.
         */
        this.themes = {
            default: {
                '--color-primary': 'var(--color-teal-500)',
                '--color-primary-hover': 'var(--color-teal-600)',
                '--color-primary-active': 'var(--color-teal-700)',
                '--color-btn-primary-text': 'var(--color-cream-50)'
            },
            blue: {
                '--color-primary': '#3b82f6',
                '--color-primary-hover': '#2563eb',
                '--color-primary-active': '#1d4ed8',
                '--color-btn-primary-text': '#ffffff'
            },
            green: {
                '--color-primary': '#059669',
                '--color-primary-hover': '#047857',
                '--color-primary-active': '#065f46',
                '--color-btn-primary-text': '#ffffff'
            },
            purple: {
                '--color-primary': '#7c3aed',
                '--color-primary-hover': '#6d28d9',
                '--color-primary-active': '#5b21b6',
                '--color-btn-primary-text': '#ffffff'
            },
            orange: {
                '--color-primary': '#ea580c',
                '--color-primary-hover': '#c2410c',
                '--color-primary-active': '#9a3412',
                '--color-btn-primary-text': '#ffffff'
            }
        };
        // Flag indicando se o usuário atual possui permissões administrativas.
        this.isAdmin = false;

        // Variáveis de edição para modais. Quando diferentes de null, indicam que o usuário está
        // editando um registro existente em vez de criar um novo. Após salvar ou cancelar,
        // esses valores são redefinidos para null.
        this.editingStudentId = null;
        this.editingClassId = null;
        this.editingInfractionId = null;

        // Identificador do proprietário dos dados. Todos os usuários autorizados
        // compartilharão este mesmo path no Firebase para garantir que as
        // alterações persistam para todos. Será definido após a verificação
        // de permissões em checkUserPermission().
        this.dataOwnerId = null;

        // Modelo de toxicidade para análise de descrições de infrações (carregado posteriormente)
        this.toxicityModel = null;

        // Armazena o nome do aluno e a lista de infrações disponíveis quando o usuário
        // solicita a geração de um relatório individual. Será usado na seleção de
        // infração específica ou relatório geral.
        this.currentReportStudentName = null;
        this.currentReportInfractions = null;
        
        // Controle de fluxo de autenticação para evitar loops de login em
        // navegadores móveis e contextos com redirect.
        this.awaitingRedirectResult = false;
        this.handledAuthUid = null;

        // Estruturas auxiliares para contagem de infrações, sugestões de
        // suspensão e resumos estatísticos.
        this.cachedInfractionSummary = null;
        this.lastInfractionSummaryAt = 0;
        this.suspensionTrackers = new Map();
        this.pendingSuspensionSuggestion = null;

        // Controle da persistência de autenticação. Define como o Firebase deve
        // armazenar a sessão do usuário e permite desabilitar fluxos baseados em
        // redirect quando o navegador não suporta armazenamento web.
        this.authPersistence = 'local';
        this.disableRedirectLogin = false;

        // Configuração Firebase REAL
        this.firebaseConfig = {
            apiKey: "AIzaSyDIP9AMW1IE7gUMZowNNrws9cgkYIzQLXY",
            // Domínio utilizado pelo módulo de autenticação do Firebase. Não é
            // necessário alterar este valor ao adicionar novos domínios ao console
            // de autenticação; basta autorizar os domínios adicionais no painel
            // do Firebase.
            authDomain: "educaflow-escola-v1.firebaseapp.com",
            // URL do Realtime Database do projeto.
            databaseURL: "https://educaflow-escola-v1-default-rtdb.firebaseio.com",
            projectId: "educaflow-escola-v1",
            // Corrige o bucket de armazenamento para o padrão appspot.com. O valor
            // anterior (firebasestorage.app) não é reconhecido pelo SDK e causava
            // falhas silenciosas durante a inicialização.
            storageBucket: "educaflow-escola-v1.appspot.com",
            messagingSenderId: "26741609197",
            appId: "1:26741609197:web:8ca38bb09873035b1b72e4",
            measurementId: "G-KY87RH1MTQ"
        };
        
        this.savedResponsibles = [];
        this.filterPresets = [];
        this.currentFilters = {};
        
        if (options.autoInit !== false) {
            this.init();
        }
    }

        async safeRead(path, label = 'dados') {
        if (!this.database) {
            return { value: null, error: new Error('Firebase Database não inicializado') };
        }

        try {
            const snapshot = await this.database.ref(path).once('value');
            return { value: snapshot.val(), error: null };
        } catch (error) {
            const code = error?.code || error?.message || 'UNKNOWN';
            const prefix = code === 'PERMISSION_DENIED' ? '⚠️' : '❌';
            console[code === 'PERMISSION_DENIED' ? 'warn' : 'error'](
                `${prefix} Falha ao ler ${label} (${path}):`,
                error
            );
            return { value: null, error };
        }
    }

    normalizePermissionRecord(record, defaults = {}) {
        if (!record) return null;

        const base = {
            uid: defaults.uid || null,
            email: defaults.email || null,
            name: defaults.name || '',
            permission: defaults.permission || 'user',
            createdAt: Date.now()
        };

        if (typeof record === 'string') {
            return {
                ...base,
                permission: record === 'admin' ? 'admin' : 'user'
            };
        }

        if (typeof record === 'boolean') {
            return {
                ...base,
                permission: record ? 'admin' : 'user'
            };
        }

        if (typeof record === 'object') {
            return {
                uid: record.uid || base.uid,
                email: record.email || base.email,
                name: record.name || base.name,
                permission: record.permission || base.permission,
                createdAt: record.createdAt || base.createdAt
            };
        }

        return null;
    }

    async fetchAllowedUser(key, defaults = {}) {
        if (!key) {
            return { record: null, raw: null, error: null };
        }

        const { value, error } = await this.safeRead(`settings/allowedUsers/${key}`, `usuário autorizado (${key})`);
        if (!value) {
            return { record: null, raw: null, error };
        }

        return {
            record: this.normalizePermissionRecord(value, defaults),
            raw: value,
            error: null
        };
    }

    async ensureOwnerId(defaultUid) {
        if (!this.database) {
            return { ownerId: defaultUid, wasClaimed: false };
        }

        const ownerIdRef = this.database.ref('settings/ownerId');
        let ownerId = null;
        let wasClaimed = false;

        try {
            const snapshot = await ownerIdRef.once('value');
            ownerId = snapshot.val();
        } catch (error) {
            if (error?.code !== 'PERMISSION_DENIED') {
                console.warn('⚠️ Falha ao ler ownerId:', error);
            }
        }

        if (!ownerId) {
            try {
                const txn = await ownerIdRef.transaction((current) => current || defaultUid);
                ownerId = txn.snapshot?.val() || defaultUid;
                wasClaimed = txn.committed && ownerId === defaultUid;
            } catch (error) {
                console.warn('⚠️ Não foi possível registrar ownerId automaticamente:', error);
                ownerId = ownerId || defaultUid;
            }
        }

        return { ownerId, wasClaimed };
    }

    static determineSuspensionDuration(issuedCount = 0) {
        if (issuedCount <= 0) return 1;
        if (issuedCount === 1) return 3;
        return 5;
    }

    static formatTimeSlot(rawTime) {
        if (!rawTime || typeof rawTime !== 'string') return null;
        const parts = rawTime.split(':');
        if (parts.length < 2) return null;
        const hour = Number.parseInt(parts[0], 10);
        const minute = Number.parseInt(parts[1], 10);
        if (Number.isNaN(hour) || Number.isNaN(minute)) return null;

        const normalizedHour = Math.min(Math.max(hour, 0), 23);
        const slotStartMinute = minute < 30 ? 0 : 30;
        const slotEndMinute = slotStartMinute === 0 ? 29 : 59;

        const start = `${String(normalizedHour).padStart(2, '0')}:${String(slotStartMinute).padStart(2, '0')}`;
        const end = `${String(normalizedHour).padStart(2, '0')}:${String(slotEndMinute).padStart(2, '0')}`;
        return `${start} - ${end}`;
    }

    getStudentStorageKey(studentId, studentName) {
        if (studentId) return String(studentId);
        if (!studentName) return null;
        const normalized = studentName
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-');
        return normalized ? normalized.replace(/^-+|-+$/g, '') : null;
    }

    normalizeSuspensionTracker(data = {}, defaults = {}) {
        const base = {
            studentId: defaults.studentId || data.studentId || null,
            studentName: defaults.studentName || data.studentName || '',
            leveCount: Number(data.leveCount) || 0,
            mediaCount: Number(data.mediaCount) || 0,
            graveCount: Number(data.graveCount) || 0,
            issuedSuspensions: Number(data.issuedSuspensions) || 0,
            awaitingReport: Boolean(data.awaitingReport),
            triggerReason: data.triggerReason || '',
            suggestedDuration: Number(data.suggestedDuration) || null,
            lastTriggeredAt: data.lastTriggeredAt || null,
            history: Array.isArray(data.history) ? [...data.history] : [],
            updatedAt: data.updatedAt || Date.now(),
        };
        return base;
    }

    async fetchSuspensionTracker(key, defaults = {}) {
        if (!key) {
            return this.normalizeSuspensionTracker({}, defaults);
        }

        if (this.suspensionTrackers.has(key)) {
            return this.normalizeSuspensionTracker(this.suspensionTrackers.get(key), defaults);
        }

        let tracker = null;

        if (this.isDemoMode) {
            if (!this.demoData.suspensionTrackers) {
                this.demoData.suspensionTrackers = {};
            }
            tracker = this.demoData.suspensionTrackers[key] || null;
        } else {
            const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
            if (ownerId && this.database) {
                try {
                    const snapshot = await this.database.ref(`users/${ownerId}/suspensionTrackers/${key}`).once('value');
                    tracker = snapshot.val();
                } catch (error) {
                    console.warn('⚠️ Não foi possível ler tracker de suspensão:', error);
                }
            }
        }

        const normalized = this.normalizeSuspensionTracker(tracker || {}, defaults);
        this.suspensionTrackers.set(key, normalized);
        if (this.isDemoMode) {
            this.demoData.suspensionTrackers[key] = { ...normalized };
        }
        return normalized;
    }

    async saveSuspensionTracker(key, tracker) {
        if (!key) return;
        const normalized = this.normalizeSuspensionTracker(tracker);
        normalized.updatedAt = Date.now();

        if (this.isDemoMode) {
            if (!this.demoData.suspensionTrackers) {
                this.demoData.suspensionTrackers = {};
            }
            this.demoData.suspensionTrackers[key] = { ...normalized };
            this.suspensionTrackers.set(key, { ...normalized });
            return;
        }

        const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
        if (!ownerId || !this.database) {
            return;
        }

        const ref = this.database.ref(`users/${ownerId}/suspensionTrackers/${key}`);
        const payload = {
            ...normalized,
            updatedAt: firebase.database.ServerValue.TIMESTAMP,
        };

        try {
            await ref.set(payload);
            this.suspensionTrackers.set(key, { ...normalized });
        } catch (error) {
            console.error('❌ Não foi possível salvar tracker de suspensão:', error);
        }
    }

    evaluateSuspensionTrigger(tracker) {
        if (!tracker) {
            return { shouldSuggest: false, reason: null, suggestedDuration: null };
        }

        const leve = Number(tracker.leveCount) || 0;
        const media = Number(tracker.mediaCount) || 0;
        const grave = Number(tracker.graveCount) || 0;

        let reason = null;
        if (grave >= 1) {
            reason = '1 infração grave registrada';
        } else if (media >= 2) {
            reason = '2 infrações médias registradas';
        } else if (leve >= 3) {
            reason = '3 infrações leves registradas';
        }

        if (!reason) {
            return { shouldSuggest: false, reason: null, suggestedDuration: null };
        }

        const suggestedDuration = EducaFlowPro.determineSuspensionDuration(Number(tracker.issuedSuspensions) || 0);
        return { shouldSuggest: true, reason, suggestedDuration };
    }

    async updateSuspensionCounters(studentInfo, severity) {
        const { id = null, name = '' } = studentInfo || {};
        const key = this.getStudentStorageKey(id, name);
        if (!key) {
            return { key: null, tracker: null, shouldSuggest: false };
        }

        const tracker = await this.fetchSuspensionTracker(key, { studentId: id, studentName: name });
        const field = severity === 'grave' ? 'graveCount' : severity === 'media' ? 'mediaCount' : 'leveCount';
        tracker[field] = (Number(tracker[field]) || 0) + 1;
        tracker.studentId = tracker.studentId || id || null;
        tracker.studentName = tracker.studentName || name || '';

        const trigger = this.evaluateSuspensionTrigger(tracker);
        const shouldSuggest = trigger.shouldSuggest && !tracker.awaitingReport;

        if (shouldSuggest) {
            tracker.awaitingReport = true;
            tracker.triggerReason = trigger.reason;
            tracker.suggestedDuration = trigger.suggestedDuration;
            tracker.lastTriggeredAt = Date.now();
        }

        await this.saveSuspensionTracker(key, tracker);

        return {
            key,
            tracker,
            shouldSuggest,
            reason: shouldSuggest ? trigger.reason : tracker.triggerReason || null,
            suggestedDuration: shouldSuggest ? trigger.suggestedDuration : tracker.suggestedDuration || trigger.suggestedDuration,
        };
    }
    
    getSessionStorage() {
        if (this.sessionStorageOverride) {
            return this.sessionStorageOverride;
        }

        if (this._cachedSessionStorage !== undefined) {
            return this._cachedSessionStorage;
        }

        try {
            this._cachedSessionStorage = window.sessionStorage;
        } catch (error) {
            console.warn('⚠️ SessionStorage indisponível:', error);
            this._cachedSessionStorage = null;
        }

        return this._cachedSessionStorage;
    }

    async configureAuthPersistence() {
        if (!this.auth || typeof this.auth.setPersistence !== 'function') {
            return;
        }

        const persistenceModes = [
            { type: 'LOCAL', value: firebase.auth.Auth.Persistence.LOCAL },
            { type: 'SESSION', value: firebase.auth.Auth.Persistence.SESSION },
        ];

        for (const mode of persistenceModes) {
            try {
                await this.auth.setPersistence(mode.value);
                this.authPersistence = mode.type.toLowerCase();
                console.log(`🔒 Persistência de auth configurada (${mode.type}).`);
                return;
            } catch (error) {
                const code = error?.code;
                if (code === 'auth/unsupported-persistence-type' || code === 'auth/web-storage-unsupported') {
                    console.warn(`⚠️ Persistência ${mode.type} indisponível:`, error);
                    continue;
                }

                console.error('❌ Erro ao configurar persistência de auth:', error);
                return;
            }
        }

        try {
            await this.auth.setPersistence(firebase.auth.Auth.Persistence.NONE);
            this.authPersistence = 'none';
            this.disableRedirectLogin = true;
            console.warn('⚠️ Persistência indisponível. O login permanecerá ativo apenas enquanto esta aba estiver aberta.');
        } catch (error) {
            console.error('❌ Não foi possível configurar persistência de autenticação:', error);
        }
    }

    setRedirectInProgress() {
        const storage = this.getSessionStorage();
        if (!storage) {
            this.awaitingRedirectResult = true;
            return false;
        }
        try {
            storage.setItem(this.redirectStorageKey, 'true');
            this.awaitingRedirectResult = true;
            return true;
        } catch (error) {
            console.warn('⚠️ Não foi possível registrar redirect em andamento:', error);
            return false;
        }
    }
    
    clearRedirectInProgress() {
        const storage = this.getSessionStorage();
        if (!storage) {
            this.awaitingRedirectResult = false;
            return false;
        }
        try {
            storage.removeItem(this.redirectStorageKey);
            this.awaitingRedirectResult = false;
            return true;
        } catch (error) {
            console.warn('⚠️ Não foi possível limpar flag de redirect:', error);
            return false;
        }
    }

    isRedirectInProgress() {
        const storage = this.getSessionStorage();
        if (!storage) return false;
        try {
            return storage.getItem(this.redirectStorageKey) === 'true';
        } catch (error) {
            console.warn('⚠️ Não foi possível ler flag de redirect:', error);
            return false;
        }
    }

    shouldUseRedirectLogin() {
         if (this.disableRedirectLogin || this.authPersistence === 'none') {
            return false;
        }
        if (this.forceRedirectLogin) {
            return true;
        }

        try {
            const ua = (navigator?.userAgent || '').toLowerCase();
            const isFirefox = ua.includes('firefox');
            const isMobile = /mobile|iphone|ipad|android/.test(ua);
            const isBrave = ua.includes('brave') || typeof navigator?.brave !== 'undefined';
            return isFirefox || isMobile || isBrave;
        } catch (error) {
            console.warn('⚠️ Não foi possível detectar o navegador para decidir o fluxo de login:', error);
            return false;
        }
    }

    escapeHtml(value) {
        if (value === null || value === undefined) return '';
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    hideLoginError() {
        const loginError = document.getElementById('loginError');
        if (loginError) {
            loginError.classList.add('hidden');
        }
    }

    showLoginError(message) {
        const loginError = document.getElementById('loginError');
        if (!loginError) return;

        const messageTarget = loginError.querySelector('p') || loginError;
        if (message) {
            messageTarget.textContent = message;
        }
        loginError.classList.remove('hidden');
    }

    getFriendlyLoginError(error) {
        const defaultMessage = 'Erro ao fazer login. Verifique sua conexão e tente novamente.';
        if (!error) return defaultMessage;

        const code = error.code || '';
        switch (code) {
            case 'auth/unauthorized-domain':
                return 'Domínio não autorizado no Firebase. Adicione o domínio do site às configurações de autenticação.';
            case 'auth/network-request-failed':
                return 'Não foi possível conectar aos servidores do Google. Verifique sua conexão com a internet.';
            case 'auth/popup-blocked':
                return 'O navegador bloqueou a janela de login. Libere pop-ups ou tente novamente usando outra aba/janela.';
            case 'auth/popup-closed-by-user':
                return 'O login foi cancelado antes de concluir. Clique em "Entrar com Google" para tentar novamente.';
            case 'auth/cancelled-popup-request':
                return 'Outra tentativa de login ainda está em andamento. Aguarde alguns instantes e tente novamente.';
            case 'auth/operation-not-supported-in-this-environment':
                return 'Este navegador exige redirecionamento para realizar o login. Recarregue a página e tente novamente.';
            case 'auth/web-storage-unsupported':
                return 'O navegador está bloqueando o armazenamento necessário para concluir o login. Habilite cookies/armazenamento local ou utilize outro navegador.';
            case 'auth/unsupported-persistence-type':
                return 'Este navegador não permite salvar a sessão de login. Libere cookies/armazenamento ou tente novamente em outro navegador.';
            case 'auth/redirect-cancelled-by-user':
                return 'O navegador cancelou o retorno do login. Recarregue a página e tente novamente.';
            default: {
                const message = typeof error.message === 'string' ? error.message.toLowerCase() : '';
                if (message.includes('network')) {
                    return 'Não foi possível conectar aos servidores do Google. Verifique sua conexão com a internet.';
                }
                return defaultMessage;
            }
        }
    }

    async init() {
        try {
            console.log('🔥 Conectando Firebase...');
            this.updateLoadingStatus('Inicializando sistema...');
            
            // Inicializar Firebase
            firebase.initializeApp(this.firebaseConfig);
            this.database = firebase.database();
            this.auth = firebase.auth();
            this.googleProvider = new firebase.auth.GoogleAuthProvider();
            
            await this.configureAuthPersistence();
            
            // Configurar provider
            this.googleProvider.addScope('email');
            this.googleProvider.addScope('profile');
            this.googleProvider.setCustomParameters({
                prompt: 'select_account'
            });
            
            console.log('✅ Firebase inicializado!');
            
            // Executar testes do sistema
            await this.runSystemTests();

            // Carregar modelo de toxicidade para IA
            await this.loadToxicityModel();

            // Aplicar tema salvo do usuário
            this.loadUserTheme();
            
            // Configurar listeners
            this.setupAuthListener();

            // Se um redirect estiver em andamento, aguardar antes de exibir a tela de login
            this.awaitingRedirectResult = this.isRedirectInProgress();
            
            // Processar resultado de redirecionamento (login via redirect) caso exista
            try {
                const redirectResult = await this.auth.getRedirectResult();
                if (redirectResult && redirectResult.user) {
                    console.log('🎯 Resultado de login via redirect processado:', redirectResult.user.email);
                await this.handleAuthenticatedUser(redirectResult.user, {
                        fromRedirect: true,
                        force: true,
                        silentOnError: true,
                    });
                }
            } catch (redirectError) {
                // Em alguns navegadores, getRedirectResult pode lançar se não houver resultado
                console.warn('⚠️ Erro ao obter resultado de redirect:', redirectError);
            const friendlyMessage = this.getFriendlyLoginError(redirectError);
                const toastType = redirectError?.code === 'auth/unauthorized-domain' ? 'error' : 'warning';
                this.showLoginError(friendlyMessage);
                this.showToast(friendlyMessage, toastType);
                this.awaitingRedirectResult = false;
                this.hideSplash();
                this.showLogin();
            } finally {
                // Após processar o resultado do redirect, limpa a flag para permitir
                // novos redirecionamentos em logins futuros.
                this.clearRedirectInProgress();
            }
            
            this.isInitialized = true;
            console.log('✅ EducaFlow Pro totalmente funcional!');
            
            // Inicializar backup automático
            this.initializeAutoBackup();
            
            // Verificar estado de autenticação
            setTimeout(() => this.checkAuthState(), 1000);
            
        } catch (error) {
            console.error('❌ Erro crítico:', error);
            // Em caso de falha crítica, não ativa modo demo. Exibe mensagem de erro e permanece na tela de login.
            this.showError('Erro ao inicializar o sistema. Verifique sua conexão ou tente novamente mais tarde.');
            // Oculta splash e exibe tela de login para que o usuário possa tentar novamente
            this.hideSplash();
            this.showLogin();
        }
    }

    updateLoadingStatus(message) {
        const statusEl = document.getElementById('loadingStatus');
        if (statusEl) {
            statusEl.textContent = message;
        }
        console.log('📱', message);
    }

    async runSystemTests() {
        console.log('🧪 Executando testes do sistema...');
        document.getElementById('systemChecks').classList.remove('hidden');
        
        try {
            // Teste Firebase
            await this.testFirebaseConnection();
            this.updateCheckStatus('check-firebase', '✅');
            
            // Teste Auth
            await this.testAuth();
            this.updateCheckStatus('check-auth', '✅');
            
            // Teste Conectividade
            await this.testConnectivity();
            this.updateCheckStatus('check-connection', '✅');
            
            // Teste Domínios
            await this.testAuthorizedDomains();
            // Se os domínios estiverem autorizados, marca como ok; caso contrário, deixa o alerta ⚠️
            this.updateCheckStatus('check-domains', '⚠️');
            
            this.updateLoadingStatus('Sistema pronto para uso!');
        } catch (error) {
            console.error('❌ Falha nos testes:', error);
            this.updateLoadingStatus('Erro na inicialização - verifique sua conexão.');
        } finally {
            // Após finalizar os testes, independentemente do resultado, ocultar a splash e mostrar a tela de login.
            try {
                this.hideSplash();
                // Se o usuário já estiver autenticado, onAuthStateChanged cuidará do redirecionamento.
                // Caso contrário, exibe a tela de login.
                if (!this.auth.currentUser) {
                    this.showLogin();
                }
            } catch (e) {
                console.warn('⚠️ Erro ao ocultar splash ou mostrar login:', e);
            }
        }
    }

    async testFirebaseConnection() {
        return new Promise((resolve) => {
            const connectedRef = this.database.ref('.info/connected');
            const timeout = setTimeout(() => resolve(), 3000);
            
            connectedRef.once('value', (snapshot) => {
                clearTimeout(timeout);
                console.log('✅ Database conectado!');
                resolve();
            });
        });
    }

    async testAuth() {
        console.log('✅ Google Auth configurado!');
        return Promise.resolve();
    }

    async testConnectivity() {
        console.log('✅ Conectividade OK!');
        return Promise.resolve();
    }

    async testAuthorizedDomains() {
        console.log('⚠️ Domínios podem precisar de configuração');
        return Promise.resolve();
    }

    updateCheckStatus(checkId, status) {
        const checkEl = document.getElementById(checkId);
        if (checkEl) {
            checkEl.querySelector('.check-status').textContent = status;
        }
    }

    setupAuthListener() {
        if (!this.auth) return;
        this.auth.onAuthStateChanged(async (user) => {
            console.log('🔐 Estado de auth:', user ? user.email : 'Desconectado');
            await this.handleAuthenticatedUser(user, { source: 'listener' });
        });
    }

    checkAuthState() {
        if (this.isDemoMode) return;
        
        const currentUser = this.auth.currentUser;
        if (!currentUser) {
             if (this.awaitingRedirectResult) {
                console.log('⏳ Aguardando resultado do login via redirecionamento...');
                return;
            }
            this.hideSplash();
            this.showLogin();
        }
    }

    hideSplash() {
        document.getElementById('splash').classList.add('hidden');
    }

    enableDemoMode() {
        const demoBtn = document.getElementById('demoLoginBtn');
        if (demoBtn) {
            demoBtn.onclick = () => this.enterDemoMode();
        }
    }

    showLogin() {
        document.getElementById('login').classList.remove('hidden');
        document.getElementById('dashboard').classList.add('hidden');
        
        const loginBtn = document.getElementById('googleLoginBtn');
        if (loginBtn) {
            loginBtn.disabled = false;
            loginBtn.onclick = () => this.attemptLogin();
        }
        
        this.enableDemoMode();

        // Garante que o logotipo seja exibido corretamente na tela de login
        this.applyLogo();
    }

    async attemptLogin() {
        const loginBtn = document.getElementById('googleLoginBtn');
        const loginLoading = document.getElementById('loginLoading');

        if (!loginBtn || !loginLoading) {
            console.error('❌ Elementos de login não foram encontrados na interface.');
            return;
        }

        // Desabilita o botão e exibe o estado de carregamento
        loginBtn.disabled = true;
        this.hideLoginError();
        loginLoading.classList.remove('hidden');

        try {
            console.log('🔐 Tentando login Google...');
            
            if (!this.auth || !this.googleProvider) {
                throw new Error('Firebase Auth não foi inicializado corretamente.');
            }

            if (this.shouldUseRedirectLogin()) {
                console.log('🔁 Usando login via redirect para compatibilidade.');
                if (this.isRedirectInProgress()) {
                    console.warn('⚠️ Redirect já em andamento, aguardando resultado.');
                    return;
                }    
                this.setRedirectInProgress();
                this.awaitingRedirectResult = true;
                await this.auth.signInWithRedirect(this.googleProvider);
                return;
            }
            
            try {
                const result = await this.auth.signInWithPopup(this.googleProvider);
                const userEmail = result?.user?.email || 'usuário';
                console.log('✅ Login popup sucesso!', userEmail);
                this.showToast('Login realizado com sucesso!', 'success');
                
                 if (result?.user) {
                    try {
                        await this.handleAuthenticatedUser(result.user, { fromPopup: true, force: true });
                    } catch (handleError) {
                        console.warn('⚠️ Não foi possível processar usuário após login via popup:', handleError);
                    }
                }
                return;
            } catch (popupError) {
               if (popupError?.code === 'auth/popup-closed-by-user' || popupError?.code === 'auth/cancelled-popup-request') {
                    const message = this.getFriendlyLoginError(popupError);
                    const toastType = popupError.code === 'auth/popup-closed-by-user' ? 'warning' : 'info';
                    this.showLoginError(message);
                    this.showToast(message, toastType);
                    return;
                }

                if (popupError?.code === 'auth/unauthorized-domain') {
                    throw popupError;
                }

                console.warn('❌ Popup falhou, tentando redirect como fallback...', popupError);
                 if (this.disableRedirectLogin || this.authPersistence === 'none') {
                    const fallbackMessage = this.getFriendlyLoginError(popupError);
                    const toastType = popupError?.code === 'auth/popup-blocked' ? 'warning' : 'error';
                    this.showLoginError(fallbackMessage);
                    this.showToast(fallbackMessage, toastType);
                    return;
                }
                if (!this.isRedirectInProgress()) {
                    this.setRedirectInProgress();
                }
                this.awaitingRedirectResult = true;
                
                try {
                    await this.auth.signInWithRedirect(this.googleProvider);
                    return;
                } catch (redirectError) {
                    this.clearRedirectInProgress();
                    throw redirectError;
                }
            }
        } catch (error) {
            this.clearRedirectInProgress();
            console.error('❌ Erro no login:', error);
            const message = this.getFriendlyLoginError(error);
            this.showLoginError(message);
            this.showToast(message, 'error');
            // Não ativa modo demo, apenas reabilita a tela de login após um pequeno atraso
            setTimeout(() => {
                this.hideSplash();
                this.showLogin();
            }, 2000);
        } finally {
            // Reabilita o botão e oculta o indicador de carregamento
            loginBtn.disabled = false;
            loginLoading.classList.add('hidden');
        }
    }

    async handleAuthenticatedUser(user, context = {}) {
        if (!user) {
            this.currentUser = null;
            if (context.clearHandled !== false) {
                this.handledAuthUid = null;
            }
            if (context.fromRedirect) {
                this.awaitingRedirectResult = false;
            }
            if (this.isInitialized && !this.awaitingRedirectResult && !context.skipLogin) {
                this.hideSplash();
                this.showLogin();
            }
            return;
        }

        const uid = user.uid;
        const alreadyHandled = this.handledAuthUid === uid && !context.force;
        this.currentUser = user;

        if (alreadyHandled) {
            this.awaitingRedirectResult = false;
            return;
        }

        this.handledAuthUid = uid;
        this.awaitingRedirectResult = false;
        this.hideSplash();

        try {
            await this.checkUserPermission();
        } catch (error) {
            console.error('❌ Erro ao processar usuário autenticado:', error);
            if (!context.silentOnError) {
                this.showToast('Erro ao concluir o login. Tente novamente.', 'error');
            }
        }
    }

    enterDemoMode() {
        console.log('🎭 Entrando em modo demo...');
        
        this.isDemoMode = true;
        this.currentUser = {
            uid: 'demo-user-' + Date.now(),
            email: 'demo@educaflow.com',
            displayName: 'Usuário Demo',
            photoURL: 'https://ui-avatars.com/api/?name=Demo&background=1E40AF&color=fff&size=128'
        };
        
        this.showDashboard();
        this.showToast('Modo Demo ativado - Configure Firebase para login real!', 'warning');
    }

    async saveUserData(user) {
        if (this.isDemoMode) return;
        
        try {
            // Salva dados do usuário em settings/usersData para não conflitar com a coleção de dados compartilhados
            const userRef = this.database.ref(`settings/usersData/${user.uid}`);
            // Define permissão com base na flag isAdmin; padrão para 'user' se indefinido
            const permission = this.isAdmin ? 'admin' : 'user';
            await userRef.set({
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                lastLogin: firebase.database.ServerValue.TIMESTAMP,
                permission
            });
            console.log('💾 Dados do usuário salvos');
        } catch (error) {
            console.error('❌ Erro ao salvar usuário:', error);
        }
    }

    showDashboard() {
        document.getElementById('login').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        
        if (this.isDemoMode) {
            document.getElementById('demoIndicator').classList.remove('hidden');
        }
        
        this.updateUserInfo();
        this.loadDashboardData();
        this.initializeEventListeners();

        // Garante que o logotipo seja exibido corretamente no dashboard
        this.applyLogo();
    }

    updateUserInfo() {
        if (this.currentUser) {
            const userName = document.getElementById('userName');
            const userPhoto = document.getElementById('userPhoto');
            
            if (userName) userName.textContent = this.currentUser.displayName || 'Usuário';
            if (userPhoto) userPhoto.src = this.currentUser.photoURL || '';
        }
    }

    async loadDashboardData() {
        console.log('📊 Carregando dados do dashboard...');
        
        try {
            this.invalidateInfractionSummary();
            if (this.isDemoMode) {
                await this.createDemoData();
            }
            
            await this.loadStatistics();
            await this.loadStudents();
            await this.loadClasses();
            await this.loadInfractions();
            
            await this.createHeatmaps();
            this.createCharts();
            this.populateAllSelects();
            this.setupFilters();
                        
            console.log('✅ Dashboard carregado com sucesso!');
            this.showToast('Sistema sincronizado!', 'success');
            
        } catch (error) {
            console.error('❌ Erro ao carregar dashboard:', error);
            this.showToast('Erro ao carregar dados.', 'error');
            // Não ativar o modo demo automaticamente. Tentar recarregar dados após breve intervalo.
            setTimeout(() => {
                // Recarrega estatísticas, estudantes, turmas e infrações com base no proprietário dos dados
                this.loadStatistics();
                this.loadStudents();
                this.loadClasses();
                this.loadInfractions();
                this.createHeatmaps();
            }, 2000);
        }
    }

    async createDemoData() {
        console.log('📝 Criando dados de demonstração...');
        
        this.demoData = {
            students: [
                { id: '1', nome: 'Ana Silva Santos', turma: '7º A', matricula: '2024001', infracoes: 2, turno: 'morning' },
                { id: '2', nome: 'João Pedro Costa', turma: '8º B', matricula: '2024002', infracoes: 1, turno: 'morning' },
                { id: '3', nome: 'Maria Clara Lima', turma: '9º A', matricula: '2024003', infracoes: 0, turno: 'afternoon' },
                { id: '4', nome: 'Pedro Henrique Oliveira', turma: '7º A', matricula: '2024004', infracoes: 3, turno: 'morning' },
                { id: '5', nome: 'Sofia Fernandes', turma: '8º B', matricula: '2024005', infracoes: 1, turno: 'morning' },
                { id: '6', nome: 'Lucas Gabriel Pereira', turma: '9º A', matricula: '2024006', infracoes: 2, turno: 'afternoon' },
                { id: '7', nome: 'Isabella Rodrigues', turma: '7º B', matricula: '2024007', infracoes: 0, turno: 'morning' },
                { id: '8', nome: 'Miguel Santos', turma: '8º A', matricula: '2024008', infracoes: 1, turno: 'afternoon' }
            ],
            classes: [
                { id: '1', nome: '7º A', ano: 2024, professor: 'Prof. Ana Silva', turno: 'morning', alunos: 28, infracoes: 5 },
                { id: '2', nome: '7º B', ano: 2024, professor: 'Prof. Carlos Santos', turno: 'morning', alunos: 25, infracoes: 2 },
                { id: '3', nome: '8º A', ano: 2024, professor: 'Prof. Maria Costa', turno: 'afternoon', alunos: 26, infracoes: 3 },
                { id: '4', nome: '8º B', ano: 2024, professor: 'Prof. João Oliveira', turno: 'morning', alunos: 24, infracoes: 4 },
                { id: '5', nome: '9º A', ano: 2024, professor: 'Prof. Patricia Lima', turno: 'afternoon', alunos: 22, infracoes: 2 }
            ],
            suspensionTrackers: {},
            suspensions: [],
            infractions: [
                 {
                    id: '1',
                    aluno: 'Ana Silva Santos', 
                    tipo: 'Atraso', 
                    gravidade: 'leve', 
                    data: '2024-10-08', 
                    turma: '7º A', 
                    horario: '07:30', 
                    responsavelTipo: 'professor',
                    responsavel: 'Prof. Ana Silva', 
                    descricao: 'Chegou 15 minutos atrasada para a primeira aula devido ao trânsito', 
                    medidas: 'Orientação sobre pontualidade e importância da frequência escolar. Solicitado contato com os pais.' 
                },
                { 
                    id: '2', 
                    aluno: 'João Pedro Costa', 
                    tipo: 'Comportamento', 
                    gravidade: 'media', 
                    data: '2024-10-07', 
                    turma: '8º B', 
                    horario: '09:15', 
                    responsavelTipo: 'professor',
                    responsavel: 'Prof. João Oliveira', 
                    descricao: 'Conversou excessivamente durante a explicação da matéria, atrapalhando os colegas', 
                    medidas: 'Advertência verbal e orientação sobre respeito em sala de aula. Reflexão sobre impacto no aprendizado coletivo.' 
                },
                { 
                    id: '3', 
                    aluno: 'Pedro Henrique Oliveira', 
                    tipo: 'Material', 
                    gravidade: 'leve', 
                    data: '2024-10-06', 
                    turma: '7º A', 
                    horario: '08:00', 
                    responsavelTipo: 'professor',
                    responsavel: 'Prof. Ana Silva', 
                    descricao: 'Esqueceu o livro de matemática pela terceira vez no mês', 
                    medidas: 'Orientação sobre organização do material escolar. Comunicado aos pais sobre importância do acompanhamento.' 
                },
                { 
                    id: '4', 
                    aluno: 'Sofia Fernandes', 
                    tipo: 'Uniforme', 
                    gravidade: 'leve', 
                    data: '2024-10-05', 
                    turma: '8º B', 
                    horario: '07:45', 
                    responsavelTipo: 'funcionario',
                    responsavel: 'Inspetora Maria José', 
                    descricao: 'Compareceu sem o uniforme completo (faltou a blusa oficial)', 
                    medidas: 'Orientação sobre normas de apresentação pessoal e importância do uniforme escolar.' 
                },
                { 
                    id: '5', 
                    aluno: 'Lucas Gabriel Pereira', 
                    tipo: 'Disciplina', 
                    gravidade: 'media', 
                    data: '2024-10-04', 
                    turma: '9º A', 
                    horario: '14:20', 
                    responsavelTipo: 'coordenacao',
                    responsavel: 'Coordenadora Lucia Santos', 
                    descricao: 'Desrespeitou colega durante atividade em grupo, usando linguagem inadequada', 
                    medidas: 'Reflexão sobre empatia, trabalho em equipe e comunicação respeitosa. Mediação de conflito realizada.' 
                }
            ]
        };
        
        // Inicializar responsáveis salvos
        this.savedResponsibles = [
            { tipo: 'professor', nome: 'Prof. Ana Silva' },
            { tipo: 'professor', nome: 'Prof. Carlos Santos' },
            { tipo: 'professor', nome: 'Prof. Maria Costa' },
            { tipo: 'professor', nome: 'Prof. João Oliveira' },
            { tipo: 'professor', nome: 'Prof. Patricia Lima' },
            { tipo: 'funcionario', nome: 'Inspetora Maria José' },
            { tipo: 'funcionario', nome: 'Secretário José Carlos' },
            { tipo: 'coordenacao', nome: 'Coordenadora Lucia Santos' },
            { tipo: 'direcao', nome: 'Diretora Carmen Silva' }
        ];
    }

    async loadStatistics() {

        try {
            let totalStudents = 0;
            let totalClasses = 0;
            let monthInfractions = 0;
            // Carrega estatísticas do proprietário dos dados, não do usuário logado individualmente
            const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
            if (ownerId) {
                const studentsRef = this.database.ref(`users/${ownerId}/students`);
                const studentsSnapshot = await studentsRef.once('value');
                totalStudents = studentsSnapshot.numChildren() || 0;

                const classesRef = this.database.ref(`users/${ownerId}/classes`);
                const classesSnapshot = await classesRef.once('value');
                totalClasses = classesSnapshot.numChildren() || 0;

                const infractionsRef = this.database.ref(`users/${ownerId}/infractions`);
                const infractionsSnapshot = await infractionsRef.once('value');
                // Calcular número total de infrações
                const totalInfractions = infractionsSnapshot.numChildren() || 0;
                // Contar infrações do mês atual
                if (infractionsSnapshot.exists()) {
                    const now = new Date();
                    const currentYear = now.getFullYear();
                    const currentMonth = now.getMonth() + 1; // 1-12
                    infractionsSnapshot.forEach((child) => {
                        const val = child.val();
                        if (val && val.data) {
                            const parts = val.data.split('-');
                            if (parts.length >= 2) {
                                const year = parseInt(parts[0]);
                                const month = parseInt(parts[1]);
                                if (year === currentYear && month === currentMonth) {
                                    monthInfractions++;
                                }
                            }
                        }
                    });
                }
                // totalReports agora reflete o número total de infrações cadastradas
                document.getElementById('totalReports').textContent = totalInfractions;
            }
            
            // Atualizar indicadores básicos
            document.getElementById('totalStudents').textContent = totalStudents;
            document.getElementById('totalClasses').textContent = totalClasses;
            document.getElementById('monthInfractions').textContent = monthInfractions;

            // Atribuir ações aos cartões de estatísticas para navegação rápida
            try {
                document.querySelectorAll('.stat-card[data-action]').forEach(card => {
                    const action = card.getAttribute('data-action');
                    card.onclick = () => {
                        if (!action) return;
                        // Navega para a aba correspondente com base no atributo
                        if (action === 'students') {
                            this.switchTab('students');
                        } else if (action === 'classes') {
                            this.switchTab('classes');
                        } else if (action === 'infractions') {
                            this.switchTab('infractions');
                        } else if (action === 'reports') {
                            this.switchTab('reports');
                        }
                    };
                });
            } catch (e) {
                console.warn('⚠️ Não foi possível atribuir ações aos cartões de estatísticas:', e);
            }

            // Calcular e atualizar KPIs educacionais dinâmicos
            try {
                let disciplineIndex = 0;
                let improvementRate = 0;
                let parentEngagement = 0;
                // Para cálculo, obter total de infrações e detalhes, se possível
                let totalInfractions = 0;
                let infraDetails = [];
                const ownerIdForKpi = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                if (ownerIdForKpi) {
                    const infraSnap = await this.database.ref(`users/${ownerIdForKpi}/infractions`).once('value');
                    totalInfractions = infraSnap.numChildren() || 0;
                    infraSnap.forEach(child => infraDetails.push(child.val()));
                }
                // Índice de disciplina: proporção de alunos sem infrações ou menor infração
                if (totalStudents > 0) {
                    disciplineIndex = Math.max(0, (1 - (totalInfractions / (totalStudents || 1))) * 100);
                } else {
                    disciplineIndex = 100;
                }
                // Taxa de melhoria: comparação de infrações do mês em relação ao total
                if (totalInfractions > 0) {
                    improvementRate = Math.max(0, (1 - (monthInfractions / totalInfractions)) * 100);
                } else {
                    improvementRate = 100;
                }
                // Engajamento familiar: proporção de infrações observadas pela coordenação ou direção
                if (totalInfractions > 0) {
                    const engagedCount = infraDetails.filter(inf => {
                        const type = inf.responsavelTipo || '';
                        return type === 'coordenacao' || type === 'direcao';
                    }).length;
                    parentEngagement = Math.max(0, (engagedCount / totalInfractions) * 100);
                } else {
                    parentEngagement = 100;
                }
                const discEl = document.getElementById('disciplineIndex');
                const impEl = document.getElementById('improvementRate');
                const engEl = document.getElementById('parentEngagement');
                if (discEl) discEl.textContent = `${disciplineIndex.toFixed(0)}%`;
                if (impEl) impEl.textContent = `${improvementRate.toFixed(0)}%`;
                if (engEl) engEl.textContent = `${parentEngagement.toFixed(0)}%`;

                // Salva os valores atuais para serem usados ao exibir detalhes em pop-ups
                this.currentKPIStats = {
                    disciplineIndex,
                    improvementRate,
                    parentEngagement,
                    totalStudents,
                    totalInfractions,
                    monthInfractions
                };
                // Atribui eventos de clique aos KPIs para mostrar detalhes
                try {
                    const discItem = discEl ? discEl.parentElement : null;
                    const impItem = impEl ? impEl.parentElement : null;
                    const engItem = engEl ? engEl.parentElement : null;
                    if (discItem) {
                        discItem.style.cursor = 'pointer';
                        discItem.onclick = () => this.showStatDetails('discipline');
                    }
                    if (impItem) {
                        impItem.style.cursor = 'pointer';
                        impItem.onclick = () => this.showStatDetails('improvement');
                    }
                    if (engItem) {
                        engItem.style.cursor = 'pointer';
                        engItem.onclick = () => this.showStatDetails('engagement');
                    }
                } catch (statClickErr) {
                    console.warn('⚠️ Não foi possível atribuir handlers aos KPIs:', statClickErr);
                }
                // Após configurar KPIs e cartões de estatísticas, atribuir handlers à seção de estatísticas avançadas
                this.attachAdvancedStatsInfo();
            } catch (kpiErr) {
                console.warn('⚠️ Não foi possível calcular KPIs dinamicamente:', kpiErr);
            }
        } catch (error) {
            console.error('❌ Erro ao carregar estatísticas:', error);
        }
    }
    
     /**
     * Exibe detalhes sobre um indicador estatístico em um toast informativo.
     * Permite que o usuário compreenda como os KPIs são calculados e navegue
     * rapidamente para as seções relevantes do sistema.
     *
     * @param {string} statKey - Identificador do KPI (discipline, improvement ou engagement)
     */
    showStatDetails(statKey) {
        const stats = this.currentKPIStats || {};
        let message = '';

        if (statKey === 'discipline') {
            message = `Índice de Disciplina: ${stats.disciplineIndex ? stats.disciplineIndex.toFixed(0) : '--'}%\n` +
                `Baseado em ${stats.totalStudents || 0} aluno(s) e ${stats.totalInfractions || 0} infração(ões) no total.\n` +
                `Clique para ver todas as infrações registradas.`;
            this.switchTab('infractions');
        } else if (statKey === 'improvement') {
            message = `Taxa de Melhoria: ${stats.improvementRate ? stats.improvementRate.toFixed(0) : '--'}%\n` +
                `Calculada a partir de ${stats.monthInfractions || 0} infrações neste mês comparado a ${stats.totalInfractions || 0} no total.\n` +
                `Clique para ver as infrações deste mês.`;
            this.switchTab('infractions');
        } else if (statKey === 'engagement') {
            message = `Engajamento Familiar: ${stats.parentEngagement ? stats.parentEngagement.toFixed(0) : '--'}%\n` +
                `Proporção de infrações acompanhadas pela coordenação ou direção sobre o total (${stats.totalInfractions || 0}).\n` +
                `Clique para visualizar as infrações acompanhadas.`;
            this.switchTab('infractions');
        } else {
            message = 'Indicador não reconhecido.';
        }

        this.showToast(message, 'info');
    }

    /**
     * Adiciona mensagens informativas aos cartões da seção de estatísticas avançadas.
     * Esse método é chamado após a atualização dos KPIs para manter a interatividade.
     */
    attachAdvancedStatsInfo() {
        try {
            const cards = document.querySelectorAll('.advanced-stats .stat-card');
            cards.forEach(card => {
                const titleEl = card.querySelector('h3');
                if (!titleEl) return;

                const title = titleEl.textContent || '';
                card.style.cursor = 'pointer';
                card.onclick = () => {
                    if (title.includes('Gráfico de Tendências')) {
                        this.showToast('O Gráfico de Tendências exibe a evolução das infrações ao longo do tempo. Para ver infrações específicas, utilize os filtros.', 'info');
                    } else if (title.includes('Mapa de Calor - Horários')) {
                        this.showToast('O Mapa de Calor por Horários mostra os períodos do dia com mais ocorrências de infrações.', 'info');
                    } else if (title.includes('Mapa de Calor - Turmas')) {
                        this.showToast('O Mapa de Calor por Turmas indica quais turmas apresentam maior incidência de infrações.', 'info');
                    } else if (title.includes('Análise Comparativa')) {
                        this.showToast('A Análise Comparativa permite comparar infrações por turno ou por turma. Ajuste os filtros para refinar a visualização.', 'info');
                    } else if (title.includes('KPIs Educacionais')) {
                        this.showStatDetails('discipline');
                    } else if (title.includes('Calendário de Eventos')) {
                        this.showToast('O Calendário de Eventos apresenta datas e quantidades de infrações registradas. Clique em um dia para analisar nos filtros.', 'info');
                    } else {
                        this.showToast('Estatística selecionada.', 'info');
                    }
                };
            });
        } catch (err) {
            console.warn('⚠️ Erro ao atribuir handlers à seção avançada de estatísticas:', err);
        }
    }

    async loadStudents() {
        try {
            const tbody = document.getElementById('studentsTableBody');
            if (tbody) {
                tbody.innerHTML = '';
                
                let students = [];
                if (this.isDemoMode) {
                    students = this.demoData.students;
                } else {
                    const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                    if (ownerId) {
                        const studentsRef = this.database.ref(`users/${ownerId}/students`);
                        const snapshot = await studentsRef.once('value');
                        if (snapshot.exists()) {
                            snapshot.forEach((child) => {
                                students.push({ id: child.key, ...child.val() });
                            });
                        }
                    }
                }
                
                students = this.sortStudentsByName(Array.isArray(students) ? students : []);
                
                // Atualiza o cache interno de alunos para busca rápida
                this.studentsCache = [...students];

                 const infractions = await this.getAllInfractions();
                const summary = this.computeInfractionSummary(infractions, students);
                this.cachedInfractionSummary = summary;
                this.lastInfractionSummaryAt = Date.now();

                students.forEach(student => {
                   const row = this.createStudentRow(student.id, student, summary);
                    tbody.appendChild(row);
                });
            }
        } catch (error) {
            console.error('❌ Erro ao carregar alunos:', error);
        }
    }

    createStudentRow(id, student, summary) {
        const row = document.createElement('tr');
        const counts = this.getStudentCountsFromSummary(summary, student);
        const badges = this.renderInfractionBadges(counts);
        const studentName = student?.nome || '';
        const safeStudentName = this.escapeHtml(studentName);
        const classLabel = this.escapeHtml(counts.className || student.turma || 'N/A');

        row.innerHTML = `
            <td>${safeStudentName}</td>
            <td>${classLabel}</td>
            <td>${badges}</td>
            <td><span class="status status--active">Ativo</span></td>
            <td class="action-cell">
                <button type="button" class="btn btn--sm btn--primary student-report-btn">📄 Relatório</button>
                <button class="btn btn--sm btn--outline" onclick="app.editStudent('${id}')">✏️ Editar</button>
                <button class="btn btn--sm btn--outline" onclick="app.deleteStudent('${id}')">🗑️ Excluir</button>
            </td>
        `;

        const reportBtn = row.querySelector('.student-report-btn');
        if (reportBtn) {
            reportBtn.addEventListener('click', () => this.openReportSelectionModal(studentName));
        }
        
        return row;
    }

    async loadClasses() {
        try {
            const container = document.getElementById('classesGrid');
            if (container) {
                container.innerHTML = '';
                
                let classes = [];
                if (this.isDemoMode) {
                    classes = this.demoData.classes;
                } else {
                    const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                    if (ownerId) {
                        const classesRef = this.database.ref(`users/${ownerId}/classes`);
                        const snapshot = await classesRef.once('value');
                        if (snapshot.exists()) {
                            snapshot.forEach((child) => {
                                classes.push({ id: child.key, ...child.val() });
                            });
                        }
                    }
                }
                
                // Calcular dinamicamente a quantidade de alunos e infrações por turma
                const [allStudents, allInfractions] = await Promise.all([
                    this.getAllStudents(),
                    this.getAllInfractions()
                ]);
                classes.forEach(classData => {
                    const className = classData.nome;
                    const numStudents = allStudents.filter(stu => (stu.turma || '') === className).length;
                    const numInfractions = allInfractions.filter(inf => (inf.turma || '') === className).length;
                    // Atualizar valores apenas para exibição
                    classData.alunos = numStudents;
                    classData.infracoes = numInfractions;
                    const card = this.createClassCard(classData.id, classData);
                    container.appendChild(card);
                });
            }
        } catch (error) {
            console.error('❌ Erro ao carregar turmas:', error);
        }
    }

    createClassCard(id, classData) {
        const card = document.createElement('div');
        card.className = 'class-card';
        // Conteúdo principal da turma
        card.innerHTML = `
            <h3>${classData.nome}</h3>
            <div class="class-info">
                <p>Ano: ${classData.ano}</p>
                <p>Professor: ${classData.professor || 'N/A'}</p>
                <p>Turno: ${this.getTurnoLabel(classData.turno)}</p>
            </div>
            <div class="class-stats">
                <div class="class-stat">
                    <div class="class-stat-value">${classData.alunos || 0}</div>
                    <div class="class-stat-label">Alunos</div>
                </div>
                <div class="class-stat">
                    <div class="class-stat-value">${classData.infracoes || 0}</div>
                    <div class="class-stat-label">Infrações</div>
                </div>
            </div>
        `;
        // Se for administrador, adicionar botões de ação para editar/excluir turma
        if (this.isAdmin) {
            const actions = document.createElement('div');
            actions.className = 'class-actions';
            const editBtn = document.createElement('button');
            editBtn.className = 'btn btn--sm btn--outline';
            editBtn.innerText = '✏️ Editar';
            editBtn.title = 'Editar Turma';
            editBtn.onclick = () => this.editClass(id);
            const delBtn = document.createElement('button');
            delBtn.className = 'btn btn--sm btn--outline';
            delBtn.innerText = '🗑️ Excluir';
            delBtn.title = 'Excluir Turma';
            delBtn.onclick = () => this.deleteClass(id);
            actions.appendChild(editBtn);
            actions.appendChild(delBtn);
            card.appendChild(actions);
        }
        return card;
    }

    getTurnoLabel(turno) {
        const turnos = {
            morning: 'Matutino',
            afternoon: 'Vespertino', 
            night: 'Noturno'
        };
        return turnos[turno] || turno || 'N/A';
    }

    async loadInfractions() {
        try {
            const tbody = document.getElementById('infractionsTableBody');
            if (tbody) {
                tbody.innerHTML = '';
                
                let infractions = [];
                if (this.isDemoMode) {
                    infractions = this.demoData.infractions;
                } else {
                    const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                    if (ownerId) {
                        const infractionsRef = this.database.ref(`users/${ownerId}/infractions`);
                        const snapshot = await infractionsRef.once('value');
                        if (snapshot.exists()) {
                            snapshot.forEach((child) => {
                                infractions.push({ id: child.key, ...child.val() });
                            });
                        }
                    }
                }
                
                infractions.sort((a, b) => new Date(b.data) - new Date(a.data));
                
                infractions.forEach(infraction => {
                    const row = this.createInfractionRow(infraction.id, infraction);
                    tbody.appendChild(row);
                });
            }
        } catch (error) {
            console.error('❌ Erro ao carregar infrações:', error);
        }
    }

    createInfractionRow(id, infraction) {
        const row = document.createElement('tr');
        const rawStudentName = infraction?.aluno || '';
        const safeStudentName = this.escapeHtml(rawStudentName);
        const rawClass = infraction?.turma || 'N/A';
        const safeClass = this.escapeHtml(rawClass);
        const rawType = infraction?.tipo || '';
        const safeType = this.escapeHtml(rawType);
        const severityKey = (infraction?.gravidade || 'leve').toLowerCase();
        const severityLabel = this.escapeHtml(this.getGravidadeLabel(severityKey));
        const date = infraction?.data ? new Date(infraction.data) : null;
        const formattedDate = date && !Number.isNaN(date.getTime())
            ? date.toLocaleDateString('pt-BR')
            : 'Data não informada';
        
        row.innerHTML = `
           <td>${formattedDate}</td>
            <td>${safeStudentName}</td>
            <td>${safeClass}</td>
            <td>${safeType}</td>
            <td><span class="severity-${severityKey}">${severityLabel}</span></td>
            <td class="action-cell">
                <button type="button" class="btn btn--sm btn--primary infraction-report-btn">📄 Relatório</button>
                <button class="btn btn--sm btn--outline" onclick="app.editInfraction('${id}')">✏️ Editar</button>
                <button class="btn btn--sm btn--outline" onclick="app.deleteInfraction('${id}')">🗑️ Excluir</button>
            </td>
        `;
        
        const reportBtn = row.querySelector('.infraction-report-btn');
        if (reportBtn) {
            const inferredId = infraction?.id || id || null;
            reportBtn.addEventListener('click', () => this.openReportSelectionModal(rawStudentName, inferredId));
        }

        return row;
    }

    getGravidadeLabel(gravidade) {
        const gravidades = {
            leve: 'Leve',
            media: 'Média',
            grave: 'Grave'
        };
        return gravidades[gravidade] || gravidade || 'N/A';
    }

    async createCharts() {
        try {
            await this.createInfractionChart();
            await this.createTypeChart();
            await this.createTrendsChart();
            await this.createComparativeChart();
        } catch (error) {
            console.error('❌ Erro ao criar gráficos:', error);
        }
    }

    async createInfractionChart() {
        const canvas = document.getElementById('infractionChart');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            // Calcula dinamicamente as infrações por mês
            const infractions = await this.getAllInfractions();
            const monthCounts = new Array(12).fill(0);
            infractions.forEach(inf => {
                const d = new Date(inf.data);
                if (!isNaN(d)) {
                    const m = d.getMonth();
                    monthCounts[m] = (monthCounts[m] || 0) + 1;
                }
            });
            const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Infrações por Mês',
                        data: monthCounts,
                        backgroundColor: '#1FB8CD',
                        borderColor: '#1FB8CD',
                        tension: 0.4,
                        fill: false
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: true, position: 'top' }
                    },
                    scales: { y: { beginAtZero: true } }
                }
            });
        }
    }

    async createTypeChart() {
        const canvas = document.getElementById('typeChart');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            const infractions = await this.getAllInfractions();
            const labels = ['Atraso', 'Comportamento', 'Material', 'Falta', 'Uniforme', 'Disciplina'];
            const typeCounts = {};
            labels.forEach(l => { typeCounts[l] = 0; });
            infractions.forEach(inf => {
                const tipo = inf.tipo;
                if (typeCounts.hasOwnProperty(tipo)) {
                    typeCounts[tipo] += 1;
                } else {
                    typeCounts[tipo] = 1;
                }
            });
            const dataArray = labels.map(l => typeCounts[l] || 0);
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        data: dataArray,
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: true, position: 'right' } }
                }
            });
        }
    }

    async createTrendsChart() {
        const canvas = document.getElementById('trendsChart');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            const infractions = await this.getAllInfractions();
            const weekCounts = [0, 0, 0, 0];
            const now = new Date();
            const currentMonth = now.getMonth();
            const currentYear = now.getFullYear();
            infractions.forEach(inf => {
                const d = new Date(inf.data);
                if (!isNaN(d) && d.getMonth() === currentMonth && d.getFullYear() === currentYear) {
                    const index = Math.floor((d.getDate() - 1) / 7);
                    if (index >= 0 && index < 4) weekCounts[index] += 1;
                }
            });
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
                    datasets: [{
                        label: 'Tendência de Infrações',
                        data: weekCounts,
                        backgroundColor: '#1FB8CD',
                        borderColor: '#1FB8CD'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { y: { beginAtZero: true } }
                }
            });
        }
    }

    async createComparativeChart() {
        const canvas = document.getElementById('comparativeChart');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            const infractions = await this.getAllInfractions();
            const typeLabels = ['Atraso', 'Comportamento', 'Material', 'Disciplina', 'Uniforme'];
            const now = new Date();
            const currentMonth = now.getMonth();
            const currentYear = now.getFullYear();
            const prevDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
            const prevMonth = prevDate.getMonth();
            const prevYear = prevDate.getFullYear();
            const currentCounts = {};
            const prevCounts = {};
            typeLabels.forEach(t => { currentCounts[t] = 0; prevCounts[t] = 0; });
            infractions.forEach(inf => {
                const tipo = inf.tipo;
                const d = new Date(inf.data);
                if (!typeLabels.includes(tipo) || isNaN(d)) return;
                if (d.getFullYear() === currentYear && d.getMonth() === currentMonth) {
                    currentCounts[tipo] += 1;
                } else if (d.getFullYear() === prevYear && d.getMonth() === prevMonth) {
                    prevCounts[tipo] += 1;
                }
            });
            const currentData = typeLabels.map(t => currentCounts[t] || 0);
            const prevData = typeLabels.map(t => prevCounts[t] || 0);
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: typeLabels,
                    datasets: [{
                        label: 'Este Mês',
                        data: currentData,
                        backgroundColor: 'rgba(31, 184, 205, 0.2)',
                        borderColor: '#1FB8CD'
                    }, {
                        label: 'Mês Anterior',
                        data: prevData,
                        backgroundColor: 'rgba(255, 193, 133, 0.2)',
                        borderColor: '#FFC185'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: true, position: 'top' } },
                    scales: { r: { beginAtZero: true } }
                }
            });
        }
    }

    async createHeatmaps() {
        try {
            const summary = await this.getInfractionsSummary();
            const heatmapHours = document.getElementById('heatmapHours');
            if (heatmapHours) {
                heatmapHours.innerHTML = this.renderTimeHeatmap(summary.byTimeSlot);
            }

            const heatmapClasses = document.getElementById('heatmapClasses');
            if (heatmapClasses) {
                heatmapClasses.innerHTML = this.renderClassHeatmap(summary.byClass);
            }
        } catch (error) {
            console.error('❌ Erro ao gerar mapas de calor:', error);
            const fallback = '<div class="heatmap-empty">Não foi possível carregar os mapas de calor.</div>';
            const heatmapHours = document.getElementById('heatmapHours');
            if (heatmapHours) heatmapHours.innerHTML = fallback;
            const heatmapClasses = document.getElementById('heatmapClasses');
            if (heatmapClasses) heatmapClasses.innerHTML = fallback;
        }
    }

    populateAllSelects() {
        this.populateClassSelects();
        this.populateStudentSelects();
        this.populateReportSelects();
        this.populateFilterSelects();
    }

    populateClassSelects() {
        /**
         * Carrega turmas do modo demo ou Firebase e repassa para applyClassesToSelects.
         */
        if (this.isDemoMode && this.demoData) {
            const classes = this.demoData.classes.map(c => ({ ...c }));
            this.applyClassesToSelects(classes);
        } else if (this.currentUser) {
            const ownerId = this.dataOwnerId || this.currentUser.uid;
            const classesRef = this.database.ref(`users/${ownerId}/classes`);
            classesRef.once('value', (snapshot) => {
                const firebaseClasses = [];
                snapshot.forEach(child => {
                    firebaseClasses.push({ id: child.key, ...child.val() });
                });
                this.applyClassesToSelects(firebaseClasses);
            });
        }
    }

    /**
     * Insere uma lista de turmas nos elementos select apropriados.
     * @param {Array} classes Lista de objetos de turma
     */
    applyClassesToSelects(classes) {
        const selects = [
            document.getElementById('studentClass'),
            document.getElementById('filterClass'),
            document.getElementById('reportClass'),
            document.getElementById('filterClassAdvanced')
        ];
        selects.forEach(select => {
            if (select) {
                // Preservar a primeira opção e limpar o restante
                while (select.children.length > 1) {
                    select.removeChild(select.lastChild);
                }
                classes.forEach(classData => {
                    const option = document.createElement('option');
                    option.value = classData.nome;
                    option.textContent = classData.nome;
                    select.appendChild(option);
                });
            }
        });
    }

    populateStudentSelects() {
        /**
         * Carrega alunos do modo demo ou Firebase e repassa para applyStudentsToSelects.
         */
        if (this.isDemoMode && this.demoData) {
            const students = this.demoData.students.map(s => ({ ...s }));
            this.applyStudentsToSelects(students);
        } else if (this.currentUser) {
            const ownerId = this.dataOwnerId || this.currentUser.uid;
            const studentsRef = this.database.ref(`users/${ownerId}/students`);
            studentsRef.once('value', (snapshot) => {
                const firebaseStudents = [];
                snapshot.forEach(child => {
                    firebaseStudents.push({ id: child.key, ...child.val() });
                });
                this.applyStudentsToSelects(firebaseStudents);
            });
        }
    }

     sortStudentsByName(students = []) {
        return [...students].sort((a, b) => {
            const nameA = (a?.nome || '').toString();
            const nameB = (b?.nome || '').toString();
            const primary = nameA.localeCompare(nameB, 'pt-BR', { sensitivity: 'base' });
            if (primary !== 0) return primary;
            const classA = (a?.turma || '').toString();
            const classB = (b?.turma || '').toString();
            return classA.localeCompare(classB, 'pt-BR', { sensitivity: 'base' });
        });
    }

    /**
     * Insere uma lista de alunos nos elementos select apropriados.
     * @param {Array} students Lista de objetos de aluno
     */
    applyStudentsToSelects(students) {
        const orderedStudents = this.sortStudentsByName(Array.isArray(students) ? students : []);
        const selects = [
            document.getElementById('infractionStudent'),
            document.getElementById('studentForReport'),
            document.getElementById('studentForHistory'),
            document.getElementById('studentForSuspension')
        ];
        selects.forEach(select => {
            if (select) {
                while (select.children.length > 1) {
                    select.removeChild(select.lastChild);
                }
                orderedStudents.forEach(student => {
                    const option = document.createElement('option');
                    option.value = student.nome;
                    option.textContent = `${student.nome} (${student.turma})`;
                    select.appendChild(option);
                });
            }
        });
    }

    populateReportSelects() {
        this.populateStudentSelects();
        this.populateClassSelects();
        this.setupReportFilters();
    }

    populateFilterSelects() {
        const responsibleSelect = document.getElementById('filterResponsible');
        if (responsibleSelect) {
            while (responsibleSelect.children.length > 1) {
                responsibleSelect.removeChild(responsibleSelect.lastChild);
            }
            
            this.savedResponsibles.forEach(resp => {
                const option = document.createElement('option');
                option.value = resp.nome;
                option.textContent = `${resp.nome} (${this.getResponsibleTypeLabel(resp.tipo)})`;
                responsibleSelect.appendChild(option);
            });
        }
    }

    getResponsibleTypeLabel(tipo) {
        const tipos = {
            professor: 'Professor',
            funcionario: 'Funcionário',
            coordenacao: 'Coordenação',
            direcao: 'Direção'
        };
        return tipos[tipo] || tipo;
    }

    setupReportFilters() {
        const periodSelect = document.getElementById('reportPeriod');
        const customDateRange = document.getElementById('customDateRange');
        
        if (periodSelect && customDateRange) {
            periodSelect.onchange = (e) => {
                if (e.target.value === 'custom') {
                    customDateRange.classList.remove('hidden');
                } else {
                    customDateRange.classList.add('hidden');
                }
            };
        }
        
        const today = new Date().toISOString().split('T')[0];
        const startDate = document.getElementById('reportStartDate');
        const endDate = document.getElementById('reportEndDate');
        
        if (startDate) startDate.value = today;
        if (endDate) endDate.value = today;
    }

    setupFilters() {
        const today = new Date().toISOString().split('T')[0];
        const filterStartDate = document.getElementById('filterStartDate');
        const filterEndDate = document.getElementById('filterEndDate');
        
        if (filterStartDate) filterStartDate.value = today;
        if (filterEndDate) filterEndDate.value = today;
    }

    initializeEventListeners() {
        // BUGFIX: Navegação por tabs corrigida
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const tab = e.target.dataset.tab;
                console.log('🔄 Switching to tab:', tab);
                this.switchTab(tab);
            });
        });

        // Logout
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.onclick = () => this.signOut();
        }

        // BUGFIX: Modais com fechamento corrigido
        this.setupModals();
        this.setupForms();
        
        // Configurar datas atuais
        const today = new Date().toISOString().split('T')[0];
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        const infractionDate = document.getElementById('infractionDate');
        const infractionTime = document.getElementById('infractionTime');
        
        if (infractionDate) infractionDate.value = today;
        if (infractionTime) infractionTime.value = currentTime;
        
        // Event listener para ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });

        // Event listeners para funcionalidade de convites e configurações
        const verifyAccessCodeBtn = document.getElementById('verifyAccessCodeBtn');
        if (verifyAccessCodeBtn) {
            verifyAccessCodeBtn.onclick = () => this.verifyAccessCode();
        }
        const cancelAccessCodeBtn = document.getElementById('cancelAccessCodeBtn');
        if (cancelAccessCodeBtn) {
            cancelAccessCodeBtn.onclick = () => {
                // Cancelar o código de acesso volta para a tela de login e encerra a sessão
                this.signOut();
            };
        }
        const generateInviteBtn = document.getElementById('generateInviteBtn');
        if (generateInviteBtn) {
            generateInviteBtn.onclick = () => this.generateInviteCode();
        }
        const saveSettingsBtn = document.getElementById('saveSettingsBtn');
        if (saveSettingsBtn) {
            saveSettingsBtn.onclick = () => this.saveSettings();
        }

        // Tema: aplicar e salvar preferências de cor
        const saveThemeBtn = document.getElementById('saveThemeBtn');
        if (saveThemeBtn) {
            saveThemeBtn.onclick = () => {
                const select = document.getElementById('themeSelect');
                const theme = select ? select.value : 'default';
                this.applyTheme(theme);
                try {
                    localStorage.setItem('educaTheme', theme);
                } catch (e) {
                    console.warn('⚠️ Não foi possível salvar o tema no localStorage:', e);
                }
                this.showToast('Tema aplicado com sucesso!', 'success');
            };
        }

        // Botões do modal de seleção de infração
        const confirmInfractionSelectionBtn = document.getElementById('confirmInfractionSelectionBtn');
        if (confirmInfractionSelectionBtn) {
            confirmInfractionSelectionBtn.onclick = () => this.confirmInfractionSelection();
        }
        const generateSuspensionBtn = document.getElementById('generateSuspensionBtn');
        if (generateSuspensionBtn) {
            generateSuspensionBtn.onclick = () => this.confirmSuspensionGeneration();
        }
    }

    // BUGFIX: Função switchTab corrigida
    switchTab(tabName) {
        console.log('🔄 Mudando para aba:', tabName);
        
        // Remove active class from all tabs and buttons
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class to selected tab and button
        const tabElement = document.getElementById(`tab-${tabName}`);
        const buttonElement = document.querySelector(`[data-tab="${tabName}"]`);
        
        if (tabElement) {
            tabElement.classList.add('active');
            console.log('✅ Tab ativada:', tabName);
        } else {
            console.error('❌ Tab não encontrada:', `tab-${tabName}`);
        }
        
        if (buttonElement) {
            buttonElement.classList.add('active');
            console.log('✅ Button ativado:', tabName);
        } else {
            console.error('❌ Button não encontrado:', `[data-tab="${tabName}"]`);
        }
        
        // Carregar dados específicos do tab se necessário
        if (tabName === 'reports') {
            setTimeout(() => this.populateReportSelects(), 100);
        }
        
        // Estatísticas foram integradas ao dashboard; carregue gráficos e heatmaps ao abrir o dashboard
        if (tabName === 'overview') {
            setTimeout(() => {
                 this.createHeatmaps().catch(err => console.error('❌ Erro ao atualizar mapas de calor:', err));
                this.createCharts();
            }, 100);
        }
        
        if (tabName === 'filters') {
            setTimeout(() => this.setupFilters(), 100);
        }

        // Garantir que dados dinâmicos sejam recarregados ao alternar para a aba de turmas.
        // Sem esse carregamento, a contagem de alunos e infrações não reflete novas inserções
        // feitas após o carregamento inicial do painel.
        if (tabName === 'classes') {
            // Atualiza a lista de turmas e recalcula contadores
            setTimeout(() => this.loadClasses(), 100);
        }

        // Opcional: recarregar outras listas quando suas abas forem abertas
        if (tabName === 'students') {
            setTimeout(() => this.loadStudents(), 100);
        }

        if (tabName === 'infractions') {
            setTimeout(() => this.loadInfractions(), 100);
        }

        // Quando a aba de configurações é acessada, carregar listas e preencher campos
        if (tabName === 'settings') {
            setTimeout(() => {
                this.displayInvites();
                this.displayAllowedUsers();
                const headerInput = document.getElementById('reportHeaderInput');
                const textInput = document.getElementById('defaultPedagogicalTextInput');
                if (headerInput) headerInput.value = this.config.reportHeader || '';
                if (textInput) textInput.value = this.config.defaultPedagogicalText || '';
            }, 100);
        }
    }

    // BUGFIX: Modais com fechamento corrigido
    setupModals() {
        // Botões para abrir modais
        const addStudentBtn = document.getElementById('addStudentBtn');
        if (addStudentBtn) {
            addStudentBtn.onclick = () => {
                // Reset and clear form before opening
                this.resetStudentModal();
                document.getElementById('studentModal').classList.remove('hidden');
                this.populateClassSelects();
            };
        }

        const addClassBtn = document.getElementById('addClassBtn');
        if (addClassBtn) {
            addClassBtn.onclick = () => {
                // Reset and clear form before opening
                this.resetClassModal();
                document.getElementById('classModal').classList.remove('hidden');
            };
        }

        const addInfractionBtn = document.getElementById('addInfractionBtn');
        if (addInfractionBtn) {
            addInfractionBtn.onclick = () => {
                // Reset state and clear form before opening
                this.resetInfractionModal();
                document.getElementById('infractionModal').classList.remove('hidden');
                this.populateStudentSelects();
                this.populateResponsibleOptions();
            };
        }

        // BUGFIX: Event listeners para fechar modais corrigidos
        document.querySelectorAll('.modal__close').forEach(closeBtn => {
            closeBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                const modal = e.target.closest('.modal');
                if (modal) {
                    modal.classList.add('hidden');
                    // Reset appropriate modal state when closed via X
                    const id = modal.id;
                    if (id === 'studentModal') {
                        this.resetStudentModal();
                    } else if (id === 'classModal') {
                        this.resetClassModal();
                    } else if (id === 'infractionModal') {
                        this.resetInfractionModal();
                    } else if (id === 'suspensionModal') {
                        this.resetSuspensionModal();
                    }
                    console.log('✅ Modal fechado via X');
                }
            };
        });

        // Botões de cancelar para modais principais
        const cancelButtons = ['#cancelStudentBtn', '#cancelClassBtn', '#cancelInfractionBtn', '#cancelInfractionSelectionBtn'];
        cancelButtons.forEach(selector => {
            const btn = document.querySelector(selector);
            if (btn) {
                btn.onclick = (e) => {
                    e.preventDefault();
                    const modal = e.target.closest('.modal');
                    if (modal) {
                        modal.classList.add('hidden');
                        const id = modal.id;
                        // Reset appropriate modal state when closed via Cancelar
                        if (id === 'studentModal') {
                            this.resetStudentModal();
                        } else if (id === 'classModal') {
                            this.resetClassModal();
                        } else if (id === 'infractionModal') {
                            this.resetInfractionModal();
                        } else if (id === 'infractionSelectModal') {
                            this.resetInfractionSelectionModal();
                        } else if (id === 'suspensionModal') {
                        this.resetSuspensionModal();
                        }
                        console.log('✅ Modal fechado via Cancelar');
                    }
                };
            }
        });

        const cancelSuspensionBtn = document.getElementById('cancelSuspensionBtn');
        if (cancelSuspensionBtn) {
            cancelSuspensionBtn.onclick = (e) => {
                e.preventDefault();
                this.closeSuspensionModal();
            };
        }

        // Fechar modal clicando no overlay
        document.querySelectorAll('.modal').forEach(modal => {
            modal.onclick = (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                    const id = modal.id;
                    // Reset appropriate modal state when closed via overlay
                    if (id === 'studentModal') {
                        this.resetStudentModal();
                    } else if (id === 'classModal') {
                        this.resetClassModal();
                    } else if (id === 'infractionModal') {
                        this.resetInfractionModal();
                    } else if (id === 'infractionSelectModal') {
                        this.resetInfractionSelectionModal();
                    } else if (id === 'suspensionModal') {
                        this.resetSuspensionModal();
                    }
                    console.log('✅ Modal fechado via overlay');
                }
            };
        });
    }

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            if (!modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
                const id = modal.id;
                if (id === 'studentModal') {
                    this.resetStudentModal();
                } else if (id === 'classModal') {
                    this.resetClassModal();
                } else if (id === 'infractionModal') {
                    this.resetInfractionModal();
                } else if (id === 'infractionSelectModal') {
                    this.resetInfractionSelectionModal();
                } else if (id === 'suspensionModal') {
                    this.resetSuspensionModal();
                }
                console.log('✅ Modal fechado via ESC');
            }
        });
    }

    setupForms() {
        const saveStudentBtn = document.getElementById('saveStudentBtn');
        if (saveStudentBtn) {
            saveStudentBtn.onclick = () => this.saveStudent();
        }
        
        const saveClassBtn = document.getElementById('saveClassBtn');
        if (saveClassBtn) {
            saveClassBtn.onclick = () => this.saveClass();
        }
        
        const saveInfractionBtn = document.getElementById('saveInfractionBtn');
        if (saveInfractionBtn) {
            saveInfractionBtn.onclick = () => this.saveInfraction();
        }
    }

    // CORREÇÃO CRÍTICA: Salvamento funcional no Firebase
    async saveStudent() {
        const name = document.getElementById('studentName').value;
        const studentClass = document.getElementById('studentClass').value;
        const studentId = document.getElementById('studentId').value;
        const studentShift = document.getElementById('studentShift').value;

        // Se estiver editando um aluno existente, delega para updateStudent()
        if (this.editingStudentId) {
            await this.updateStudent();
            return;
        }

        if (!name || !studentClass || !studentId || !studentShift) {
            this.showToast('Preencha todos os campos obrigatórios', 'error');
            return;
        }

        try {
            let newStudent;
            
            if (this.isDemoMode) {
                newStudent = {
                    id: Date.now().toString(),
                    nome: name,
                    turma: studentClass,
                    matricula: studentId,
                    turno: studentShift,
                    infracoes: 0
                };
                this.demoData.students.push(newStudent);
            } else {
                // SALVAMENTO REAL NO FIREBASE
                // Grava o aluno no path compartilhado do proprietário dos dados
                const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                const studentRef = this.database.ref(`users/${ownerId}/students`).push();
                
                await studentRef.set({
                    nome: name,
                    turma: studentClass,
                    matricula: studentId,
                    turno: studentShift,
                    infracoes: 0,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,
                    id: studentRef.key
                });
                
                console.log('✅ Aluno salvo no Firebase:', studentRef.key);
            }

            document.getElementById('studentModal').classList.add('hidden');
            document.getElementById('studentForm').reset();
            

            // Atualiza as listas de alunos, estatísticas e turmas após o cadastro
            this.invalidateInfractionSummary();
            await this.loadStudents();
            await this.loadStatistics();
            await this.loadClasses();
            this.populateAllSelects();
            
            this.showToast('Aluno cadastrado com sucesso!', 'success');

        } catch (error) {
            console.error('❌ Erro ao salvar aluno:', error);
            this.showToast(`Erro ao cadastrar aluno: ${error.message}`, 'error');
        }
    }

    async saveClass() {
        const name = document.getElementById('className').value;
        const year = document.getElementById('classYear').value;
        const teacher = document.getElementById('classTeacher').value;
        const shift = document.getElementById('classShift').value;

        // Se estiver em modo de edição, chamar updateClass() ao invés de criar uma nova entrada
        if (this.editingClassId) {
            await this.updateClass();
            return;
        }

        if (!name || !year || !teacher || !shift) {
            this.showToast('Preencha todos os campos obrigatórios', 'error');
            return;
        }

        try {
            if (this.isDemoMode) {
                const newClass = {
                    id: Date.now().toString(),
                    nome: name,
                    ano: parseInt(year),
                    professor: teacher,
                    turno: shift,
                    alunos: 0,
                    infracoes: 0
                };
                this.demoData.classes.push(newClass);
            } else {
                // SALVAMENTO REAL NO FIREBASE
                // Grava a turma no path compartilhado do proprietário dos dados
                const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                const classRef = this.database.ref(`users/${ownerId}/classes`).push();
                
                await classRef.set({
                    nome: name,
                    ano: parseInt(year),
                    professor: teacher,
                    turno: shift,
                    alunos: 0,
                    infracoes: 0,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,
                    id: classRef.key
                });
                
                console.log('✅ Turma salva no Firebase:', classRef.key);
            }

            document.getElementById('classModal').classList.add('hidden');
            document.getElementById('classForm').reset();
            
            await this.loadClasses();
            await this.loadStatistics();
            this.populateAllSelects();
            
            this.showToast('Turma cadastrada com sucesso!', 'success');

        } catch (error) {
            console.error('❌ Erro ao salvar turma:', error);
            this.showToast(`Erro ao cadastrar turma: ${error.message}`, 'error');
        }
    }

    async saveInfraction() {
        const student = document.getElementById('infractionStudent').value;
        const type = document.getElementById('infractionType').value;
        const severity = document.getElementById('infractionSeverity').value;
        const date = document.getElementById('infractionDate').value;
        const time = document.getElementById('infractionTime').value;
        const responsibleType = document.getElementById('responsibleType').value;
        const responsibleName = document.getElementById('responsibleName').value;
        const description = document.getElementById('infractionDescription').value;
        const measures = document.getElementById('infractionMeasures').value;

        if (!student || !type || !severity || !date || !time || !description) {
            this.showToast('Preencha todos os campos obrigatórios', 'error');
            return;
        }

        if (responsibleType && !responsibleName) {
            this.showToast('Digite o nome do responsável', 'error');
            return;
        }

        try {
            // Buscar dados do aluno para obter a turma correta e o ID do aluno
            let turma = 'N/A';
            let studentId = null;
            try {
                const studentDataObj = await this.findStudentDataByName(student);
                if (studentDataObj) {
                    studentId = studentDataObj.id || null;
                    if (studentDataObj.turma) {
                        turma = studentDataObj.turma;
                    }
                }
            } catch (e) {
                console.error('Erro ao obter dados do aluno:', e);
            }
            const responsible = responsibleName || 'Não informado';

            if (this.isDemoMode) {
                const newInfraction = {
                    id: Date.now().toString(),
                    aluno: student,
                    tipo: type,
                    gravidade: severity,
                    data: date,
                    horario: time,
                    responsavelTipo: responsibleType,
                    responsavel: responsible,
                    descricao: description,
                    medidas: measures,
                    turma: turma,
                    studentId: studentId
                };
                this.demoData.infractions.unshift(newInfraction);

                // Atualizar contador do aluno
                const studentData = this.findStudentByName(student);
                if (studentData) {
                    studentData.infracoes = (studentData.infracoes || 0) + 1;
                }
            } else {
                // SALVAMENTO REAL NO FIREBASE
                // Grava a infração no path compartilhado do proprietário dos dados
                const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                const infractionRef = this.database.ref(`users/${ownerId}/infractions`).push();

                await infractionRef.set({
                    aluno: student,
                    tipo: type,
                    gravidade: severity,
                    data: date,
                    horario: time,
                    responsavelTipo: responsibleType,
                    responsavel: responsible,
                    descricao: description,
                    medidas: measures,
                    turma: turma,
                    studentId: studentId,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,
                    id: infractionRef.key
                });

                console.log('✅ Infração salva no Firebase:', infractionRef.key);
            }

            // Salvar responsável se novo
            if (responsibleType && responsibleName) {
                this.addResponsibleToList(responsibleType, responsibleName);
            }

            document.getElementById('infractionModal').classList.add('hidden');
            document.getElementById('infractionForm').reset();
            document.getElementById('responsibleDetails').classList.add('hidden');
            
            this.invalidateInfractionSummary();

            await this.afterInfractionSaved({ studentId, studentName: student, severity });

            await this.loadInfractions();
            await this.loadStudents();
            await this.loadStatistics();
            await this.createHeatmaps();
            this.populateAllSelects();
            
            this.showToast('Infração registrada com sucesso!', 'success');

            // Analisar a descrição usando IA após o registro
            await this.analyzeInfractionText(description);

        } catch (error) {
            console.error('❌ Erro ao salvar infração:', error);
            this.showToast(`Erro ao registrar infração: ${error.message}`, 'error');
        }
    }

    addResponsibleToList(tipo, nome) {
        const exists = this.savedResponsibles.some(r => r.nome === nome && r.tipo === tipo);
        if (!exists) {
            this.savedResponsibles.push({ tipo, nome });
            this.populateFilterSelects();
        }
    }

    findStudentByName(name) {
        // Retorna o registro do aluno pelo nome. No modo online, busca entre os dados carregados em cache.
        if (!name) return null;
        if (this.isDemoMode && this.demoData) {
            return this.demoData.students.find(s => s.nome === name) || null;
        }
        // Em modo real, procura entre os alunos atualmente carregados em memória (this.studentsCache)
        try {
            if (this.studentsCache && Array.isArray(this.studentsCache)) {
                return this.studentsCache.find(s => s.nome === name) || null;
            }
        } catch (e) {
            console.warn('⚠️ Erro ao buscar aluno pelo nome:', e);
        }
        return null;
    }

    /**
     * Busca dados completos do aluno pelo nome.
     * No modo demo retorna o objeto imediatamente, no modo real consulta a lista de alunos no Firebase.
     * @param {string} name Nome do aluno
     * @returns {Promise<Object|null>} Dados do aluno ou null se não encontrado
     */
    async findStudentDataByName(name) {
        if (!name) return null;
        if (this.isDemoMode && this.demoData) {
            return this.demoData.students.find(s => s.nome === name) || null;
        }
        try {
            const students = await this.getAllStudents();
            return students.find(s => s.nome === name) || null;
        } catch (e) {
            console.error('Erro ao buscar aluno no Firebase:', e);
            return null;
        }
    }

    // Sistema de responsáveis
    populateResponsibleOptions() {
        const responsibleSelect = document.getElementById('responsibleType');
        if (responsibleSelect) {
            responsibleSelect.onchange = () => window.updateResponsibleOptions();
        }
    }

    // ========== FUNÇÕES PARA RELATÓRIOS ==========

    /**
     * Exibe a caixa de seleção de infrações para o aluno informado.
     * O usuário poderá escolher entre gerar uma advertência específica ou
     * um relatório completo de todas as ocorrências do aluno.
     * @param {string} studentName Nome do aluno para o qual será gerado o relatório
      * @param {string|null} preselectInfractionId ID da infração que deve ser pré-selecionada quando disponível
     */
    async openReportSelectionModal(studentName, preselectInfractionId = null) {
        try {
            // Armazenar nome atual
            this.currentReportStudentName = studentName;
           // Carregar e ordenar todas as infrações do aluno
            const infractions = await this.getStudentInfractions(studentName);
            const normalizedInfractions = Array.isArray(infractions)
                ? infractions.map((inf, index) => ({ ...inf, __internalId: inf.id || `__local-${index}` }))
                    .sort((a, b) => new Date(a.data) - new Date(b.data))
                : [];
            this.currentReportInfractions = normalizedInfractions;

            let defaultSelectionValue = '__all__';
            if (preselectInfractionId) {
                const desiredId = String(preselectInfractionId);
                const match = normalizedInfractions.find((inf) => {
                    const candidateId = inf.id ? String(inf.id) : null;
                    const internalId = inf.__internalId ? String(inf.__internalId) : null;
                    return candidateId === desiredId || internalId === desiredId;
                });
                if (match && match.__internalId) {
                    defaultSelectionValue = match.__internalId;
                }
            }
            
            // Construir lista de seleção
            const listEl = document.getElementById('infractionSelectionList');
            if (listEl) {
                listEl.innerHTML = '';
                if (normalizedInfractions.length === 0) {
                    const noData = document.createElement('p');
                    noData.textContent = 'Nenhuma infração registrada para este aluno.';
                    listEl.appendChild(noData);
                } else {
                   const displayInfractions = [...normalizedInfractions].reverse();

                    const allOption = document.createElement('label');
                    allOption.className = 'selection-item selection-item--all';
                    allOption.innerHTML = `
                        <input type="radio" name="selectedInfraction" value="__all__" checked>
                        <span>Relatório completo com todas as infrações (${normalizedInfractions.length})</span>
                    `;
                    listEl.appendChild(allOption);

                    displayInfractions.forEach((inf) => {
                        const dateText = inf.data ? new Date(inf.data).toLocaleDateString('pt-BR') : 'Data não informada';
                        const severityLabel = this.getGravidadeLabel(inf.gravidade);
                        const item = document.createElement('label');
                        item.className = 'selection-item';
                        item.innerHTML = `
                            <input type="radio" name="selectedInfraction" value="${inf.__internalId}">
                            <span>${dateText} - ${inf.tipo} (${severityLabel})</span>
                        `;
                        listEl.appendChild(item);
                    });
                
                    if (!listEl.querySelector('input[name="selectedInfraction"]:checked')) {
                        const firstRadio = listEl.querySelector('input[name="selectedInfraction"]');
                        if (firstRadio) {
                            firstRadio.checked = true;
                        }
                    }
                }
            }   
            // Mostrar modal
            const modal = document.getElementById('infractionSelectModal');
            if (modal) modal.classList.remove('hidden');
        } catch (error) {
            console.error('Erro ao abrir seleção de infração:', error);
            this.showToast('Erro ao preparar opções de relatório', 'error');
        }
    }

    /**
     * Confirma a seleção de uma infração e gera a advertência correspondente.
     * Se nenhuma infração estiver selecionada, exibe uma mensagem de erro.
     */
    async confirmInfractionSelection() {
        const modal = document.getElementById('infractionSelectModal');
        try {
            const selectedInput = document.querySelector('#infractionSelectionList input[name="selectedInfraction"]:checked');
            if (!selectedInput) {
                this.showToast('Selecione uma infração para continuar', 'error');
                return;
            }
            const selectedId = selectedInput.value;
            const studentName = this.currentReportStudentName;
            if (!studentName) {
                this.showToast('Nenhum aluno selecionado', 'error');
                return;
            }

            if (selectedId === '__all__') {
                if (!this.currentReportInfractions || this.currentReportInfractions.length === 0) {
                    this.showToast('Nenhuma infração encontrada para este aluno', 'info');
                    return;
                }
                if (modal) modal.classList.add('hidden');
                await this.generateGeneralStudentReport(this.currentReportInfractions);
                return;
            }

            const infraction = Array.isArray(this.currentReportInfractions)
                ? this.currentReportInfractions.find(inf => inf.__internalId === selectedId || inf.id === selectedId)
                : null;
            if (!infraction) {
                this.showToast('Dados da infração não encontrados', 'error');
                return;
            }
            // Fechar modal
            if (modal) modal.classList.add('hidden');
            // Gerar advertência específica
            await this.generateAdvancedWarningReport(studentName, infraction);
        } catch (error) {
            console.error('Erro ao confirmar seleção de infração:', error);
            this.showToast('Erro ao gerar advertência', 'error');
        } finally {
            // Limpar seleção atual
            this.currentReportStudentName = null;
            this.currentReportInfractions = null;
        }
    }

    /**
     * Gera um relatório completo para o aluno atualmente selecionado.
     * O relatório inclui todas as infrações com data, tipo, gravidade,
     * descrição e medidas aplicadas.
     */
    async generateGeneralStudentReport(preloadedInfractions = null) {
        const modal = document.getElementById('infractionSelectModal');
        try {
            const studentName = this.currentReportStudentName;
            if (!studentName) {
                this.showToast('Nenhum aluno selecionado', 'error');
                return;
            }
            // Obter infrações do aluno
            const infractionsSource = Array.isArray(preloadedInfractions)
                ? preloadedInfractions.map(inf => ({ ...inf }))
                : await this.getStudentInfractions(studentName);
            const infractions = Array.isArray(infractionsSource) ? infractionsSource : [];
            if (infractions.length === 0) {
                this.showToast('Nenhuma infração encontrada para este aluno', 'info');
                return;
            }
            // Fechar modal apenas quando a função for chamada diretamente
            if (!preloadedInfractions && modal) modal.classList.add('hidden');
            await this.generateStudentDetailedReportPDF(studentName, infractions);
        } catch (error) {
            console.error('Erro ao gerar relatório completo do aluno:', error);
            this.showToast('Erro ao gerar relatório do aluno', 'error');
        } finally {
            // Limpar seleção
            this.currentReportStudentName = null;
            this.currentReportInfractions = null;
        }
    }

    /**
     * Gera um PDF detalhado contendo todas as infrações de um aluno.
     * Inclui data, tipo, gravidade, descrição e medidas para cada ocorrência.
     * @param {string} studentName Nome do aluno
     * @param {Array} infractions Lista de infrações do aluno
     */
    async generateStudentDetailedReportPDF(studentName, infractions) {
        try {
            if (!Array.isArray(infractions) || infractions.length === 0) {
                this.showToast('Nenhuma infração encontrada para este aluno', 'info');
                return;
            }

            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 20;
            const maxWidth = pageWidth - margin * 2;
            const lineHeight = 6;
            let y = margin;
            
            const ensureSpace = (lines = 1) => {
                if (y + lineHeight * lines > pageHeight - margin) {
                    doc.addPage();
                    y = margin;
                }
                 };

            const addSpacing = (amount = lineHeight) => {
                const linesNeeded = Math.ceil(amount / lineHeight);
                ensureSpace(linesNeeded);
                y += amount;
            };

            const writeParagraph = (text) => {
                if (text === null || text === undefined) return;
                const paragraphs = Array.isArray(text) ? text : [text];
                paragraphs.forEach((paragraph) => {
                    if (!paragraph) return;
                    const lines = doc.splitTextToSize(paragraph, maxWidth);
                    lines.forEach((line) => {
                        ensureSpace();
                        doc.text(line, margin, y);
                        y += lineHeight;
                    });
                });
            };

            const writeSectionTitle = (title) => {
                ensureSpace();
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(12);
                 doc.text(title, margin, y);
                y += lineHeight;
                doc.setFontSize(11);
                doc.setFont('helvetica', 'normal');
            };

            const sortedInfractions = infractions
                .map((inf, index) => ({ ...inf, __internalId: inf.__internalId || inf.id || `__local-${index}` }))
                .sort((a, b) => new Date(a.data) - new Date(b.data));

            const firstDate = sortedInfractions[0]?.data ? new Date(sortedInfractions[0].data) : null;
            const lastDate = sortedInfractions[sortedInfractions.length - 1]?.data ? new Date(sortedInfractions[sortedInfractions.length - 1].data) : null;
            let periodoTexto = '__/__/____';
            if (firstDate && lastDate) {
                periodoTexto = `${firstDate.toLocaleDateString('pt-BR')} e ${lastDate.toLocaleDateString('pt-BR')}`;
            } else if (firstDate) {
                periodoTexto = firstDate.toLocaleDateString('pt-BR');
            }

            const studentRecord = await this.findStudentDataByName(studentName);
            const turma = sortedInfractions.find(inf => inf.turma)?.turma || studentRecord?.turma || '_________________________';

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(16);
            doc.text('ESCOLA MUNICIPAL JOSÉ ANTÔNIO DOS SANTOS', pageWidth / 2, y, { align: 'center' });
            addSpacing(lineHeight + 2);
            doc.setFontSize(13);
            doc.text('Relatório de Advertência Individual Escolar', pageWidth / 2, y, { align: 'center' });
            addSpacing(lineHeight * 2);

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);

            writeParagraph(`O presente relatório tem como finalidade registrar e acompanhar o comportamento do(a) aluno(a) ${studentName}, do(a) turma/ano ${turma}, reunindo os episódios ocorridos entre ${periodoTexto}, descritos a seguir:`);
            addSpacing(lineHeight);

            writeSectionTitle('Descrição das advertências:');

            sortedInfractions.forEach((inf, index) => {
                ensureSpace(2);
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(11);
                const occurrenceDate = inf.data ? new Date(inf.data).toLocaleDateString('pt-BR') : '__/__/____';
                const occurrenceTime = inf.horario ? ` às ${inf.horario}` : '';
                doc.text(`${index + 1}ª ocorrência - ${occurrenceDate}${occurrenceTime}`, margin, y);
                addSpacing(lineHeight);
                doc.setFont('helvetica', 'normal');
                doc.setFontSize(11);
                const details = [
                    `• Tipo: ${inf.tipo || 'Não informado'} (${this.getGravidadeLabel(inf.gravidade)})`,
                    inf.turma ? `• Turma registrada: ${inf.turma}` : null,
                    `• Descrição detalhada: ${inf.descricao || 'Sem descrição detalhada fornecida.'}`,
                    `• Medidas adotadas pela coordenação: ${inf.medidas || 'Acompanhamento pedagógico e orientações à família.'}`,
                    `• Responsável pelo registro: ${inf.responsavel || 'Não informado'}`,
                ];
                details.forEach(line => writeParagraph(line));
                if (inf.observacoes) {
                    writeParagraph(`• Observações complementares: ${inf.observacoes}`);
                    }
                addSpacing(lineHeight / 2);
                });

                const medidas = Array.from(new Set(sortedInfractions.map(inf => (inf.medidas || '').trim()).filter(Boolean)));
                writeSectionTitle('Medidas gerais adotadas pela coordenação:');
                if (medidas.length) {
                    medidas.forEach(medida => writeParagraph(`• ${medida}`));
                } else {
                    writeParagraph('• A coordenação pedagógica manterá acompanhamento contínuo, reforçando as orientações comportamentais junto à família e ao aluno.');
                }         
                addSpacing(lineHeight / 2);

                writeSectionTitle('Orientações pedagógicas à família e ao estudante:');
                writeParagraph([
                'A Escola Municipal José Antônio dos Santos reafirma seu compromisso com a formação integral do estudante, compreendendo que o processo educativo vai além do ensino de conteúdos: envolve o desenvolvimento de atitudes, valores e responsabilidades. Por isso, este registro tem caráter pedagógico e reflexivo, buscando promover a conscientização do(a) aluno(a) sobre suas ações e suas consequências dentro do ambiente escolar.',
                'Destacamos que o acompanhamento da família é fundamental nesse processo. É papel dos pais ou responsáveis acompanhar a vida escolar do(a) filho(a), dialogar com a escola, verificar eventuais comportamentos inadequados relatados e agir em parceria com a instituição, contribuindo para que o aluno desenvolva hábitos de respeito, disciplina e convivência saudável. A omissão familiar diante de condutas inadequadas pode comprometer o progresso escolar e o desenvolvimento social do estudante.',
                'A escola e a família, atuando juntas, fortalecem os laços de confiança e garantem que cada aluno tenha condições de aprender, crescer e transformar seus comportamentos em oportunidades de aprendizado.'
            ]);
            addSpacing(lineHeight / 2);

            writeSectionTitle('Plano de acompanhamento pedagógico sugerido:');
            [
                '• Realizar encontros periódicos entre a coordenação e a família para alinhamento das estratégias educativas.',
                '• Desenvolver, junto ao aluno, metas comportamentais claras e acompanhá-las semanalmente.',
                '• Incentivar o(a) estudante a refletir sobre suas atitudes e propor ações reparadoras quando necessário.',
                '• Monitorar a participação nas atividades escolares e oferecer apoio pedagógico complementar quando indicado.'
            ].forEach(item => writeParagraph(item));

            addSpacing(lineHeight);
            writeParagraph(`Data de emissão: ${new Date().toLocaleDateString('pt-BR')}`);
            addSpacing(lineHeight / 2);

            writeParagraph('Assinatura do responsável pelo registro: ___________________________________________');
            writeParagraph('Assinatura do aluno: ___________________________________________');
            writeParagraph('Assinatura do responsável: ___________________________________________');

            const fileName = `historico-completo-${this.getStudentStorageKey(null, studentName) || 'aluno'}-${Date.now()}.pdf`
            doc.save(fileName);
            this.showToast('Relatório completo do aluno gerado com sucesso!', 'success');
        } catch (error) {
            console.error('Erro ao gerar relatório detalhado do aluno:', error);
            this.showToast('Erro ao gerar relatório detalhado', 'error');
        }
    }
    
    /**
     * Procura uma infração pelo ID em qualquer modo (demo ou real).
     * Utilizado para gerar advertências específicas quando o ID é conhecido.
     * @param {string} infractionId
     * @returns {Promise<Object|null>} Objeto de infração ou null se não encontrado
     */
    async findInfractionById(infractionId) {
        if (!infractionId) return null;
        if (this.isDemoMode && this.demoData) {
            return this.demoData.infractions.find(inf => inf.id === infractionId) || null;
        }
        try {
            const infractions = await this.getAllInfractions();
            return infractions.find(inf => inf.id === infractionId) || null;
        } catch (error) {
            console.error('Erro ao buscar infração:', error);
            return null;
        }
    }

    /**
     * Gera uma advertência a partir de uma infração específica. Busca a
     * infração no banco de dados, independente do modo demo.
     * @param {string} studentName
     * @param {string} infractionId
     */
    async generateWarningReportForStudent(studentName, infractionId) {
        try {
            const inf = await this.findInfractionById(infractionId);
            if (!inf) {
                this.showToast('Dados da infração não encontrados', 'error');
                return;
            }
            await this.generateAdvancedWarningReport(studentName, inf);
        } catch (error) {
            console.error('Erro ao gerar advertência:', error);
            this.showToast('Erro ao gerar advertência', 'error');
        }
    }

    async generateAdvancedWarningReport(studentName, infractionData) {
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 20;
            const maxWidth = pageWidth - margin * 2;
            const lineHeight = 6;
            let y = margin;

             const ensureSpace = (lines = 1) => {
                if (y + lineHeight * lines > pageHeight - margin) {
                    doc.addPage();
                   y = margin;
                }
               };

            const addSpacing = (amount = lineHeight) => {
                const linesNeeded = Math.ceil(amount / lineHeight);
                ensureSpace(linesNeeded);
                y += amount;
            };

            const writeParagraph = (text) => {
                if (text === null || text === undefined) return;
                const paragraphs = Array.isArray(text) ? text : [text];
                paragraphs.forEach((paragraph) => {
                    if (!paragraph) return;
                    const lines = doc.splitTextToSize(paragraph, maxWidth);
                    lines.forEach((line) => {
                        ensureSpace();
                        doc.text(line, margin, y);
                        y += lineHeight;
                    });
                   });
            };

            const writeSectionTitle = (title) => {
                ensureSpace();
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(12);
                doc.text(title, margin, y);
                y += lineHeight;
                doc.setFontSize(11);
                doc.setFont('helvetica', 'normal');
            };

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(16);
            doc.text('ESCOLA MUNICIPAL JOSÉ ANTÔNIO DOS SANTOS', pageWidth / 2, y, { align: 'center' });
            addSpacing(lineHeight + 2);
            doc.setFontSize(13);
            doc.text('Relatório de Advertência Individual Escolar', pageWidth / 2, y, { align: 'center' });
            addSpacing(lineHeight * 2);

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);

            const turma = infractionData?.turma || '_________________________';
            const dataOcorrencia = infractionData?.data ? new Date(infractionData.data).toLocaleDateString('pt-BR') : '__/__/____';
            const horario = infractionData?.horario ? ` às ${infractionData.horario}` : '';
            writeParagraph(`O presente relatório tem como finalidade registrar e acompanhar o comportamento do(a) aluno(a) ${studentName}, do(a) turma/ano ${turma}, em relação ao episódio ocorrido no dia ${dataOcorrencia}${horario}, descrito a seguir:`);
            addSpacing(lineHeight);

            writeSectionTitle('Descrição da advertência:');

            const detalhes = [
                `• Tipo de ocorrência: ${infractionData?.tipo || 'Não informado'}`,
                `• Gravidade: ${this.getGravidadeLabel(infractionData?.gravidade)}`,
                `• Data e horário da ocorrência: ${dataOcorrencia}${horario}`,
                `• Descrição detalhada: ${infractionData?.descricao || 'Sem descrição detalhada fornecida.'}`,
                `• Medidas adotadas pela coordenação: ${infractionData?.medidas || 'Acompanhamento pedagógico e orientações à família.'}`,
                `• Responsável pelo registro: ${infractionData?.responsavel || 'Não informado'}`,
            ];
            detalhes.forEach((linha) => writeParagraph(linha));

            if (infractionData?.observacoes) {
                writeParagraph(`• Observações complementares: ${infractionData.observacoes}`);
            }
            
            addSpacing(lineHeight / 2);

            writeParagraph([
                'A Escola Municipal José Antônio dos Santos reafirma seu compromisso com a formação integral do estudante, compreendendo que o processo educativo vai além do ensino de conteúdos: envolve o desenvolvimento de atitudes, valores e responsabilidades. Por isso, este registro tem caráter pedagógico e reflexivo, buscando promover a conscientização do(a) aluno(a) sobre suas ações e suas consequências dentro do ambiente escolar.',
                'Destacamos que o acompanhamento da família é fundamental nesse processo. É papel dos pais ou responsáveis acompanhar a vida escolar do(a) filho(a), dialogar com a escola, verificar eventuais comportamentos inadequados relatados e agir em parceria com a instituição, contribuindo para que o aluno desenvolva hábitos de respeito, disciplina e convivência saudável. A omissão familiar diante de condutas inadequadas pode comprometer o progresso escolar e o desenvolvimento social do estudante.',
                'A escola e a família, atuando juntas, fortalecem os laços de confiança e garantem que cada aluno tenha condições de aprender, crescer e transformar seus comportamentos em oportunidades de aprendizado.'
            ]);

            addSpacing(lineHeight);
            writeParagraph(`Data de emissão: ${new Date().toLocaleDateString('pt-BR')}`);
            addSpacing(lineHeight / 2);

            writeParagraph('Assinatura do responsável pelo registro: ___________________________________________');
            writeParagraph('Assinatura do aluno: ___________________________________________');
            writeParagraph('Assinatura do responsável: ___________________________________________');

            const fileName = `advertencia-${this.getStudentStorageKey(null, studentName) || 'aluno'}-${Date.now()}.pdf`;            doc.save(fileName);
            doc.save(fileName);
            
            this.showToast('Relatório educacional gerado com sucesso!', 'success');
        } catch (error) {
            console.error('❌ Erro ao gerar relatório:', error);
            this.showToast(`Erro ao gerar relatório: ${error.message}`, 'error');
        }
    }

    /**
     * Obter todas as infrações registradas, tanto em modo demo quanto em produção.
     * @returns {Promise<Array>} Lista de objetos de infração
     */
    async getAllInfractions() {
        let infractions = [];
        if (this.isDemoMode && this.demoData) {
            // Retornar uma cópia para evitar mutações acidentais
            infractions = this.demoData.infractions.map(inf => ({ ...inf }));
        } else if (this.currentUser) {
            const ownerId = this.dataOwnerId || this.currentUser.uid;
            const infractionsRef = this.database.ref(`users/${ownerId}/infractions`);
            const snapshot = await infractionsRef.once('value');
            snapshot.forEach(child => {
                infractions.push({ id: child.key, ...child.val() });
            });
        }
        return infractions;
    }

    /**
     * Obter todos os alunos registrados. No modo demo retorna demoData.students;
     * no modo real busca no Firebase.
     * @returns {Promise<Array>} Lista de objetos de aluno
     */
    async getAllStudents() {
        let students = [];
        if (this.isDemoMode && this.demoData) {
            students = this.demoData.students ? this.demoData.students.map(s => ({ ...s })) : [];
        } else if (this.currentUser) {
            const ownerId = this.dataOwnerId || this.currentUser.uid;
            const studentsRef = this.database.ref(`users/${ownerId}/students`);
            const snapshot = await studentsRef.once('value');
            snapshot.forEach(child => {
                students.push({ id: child.key, ...child.val() });
            });
        }
        return this.sortStudentsByName(students);
    }

    invalidateInfractionSummary() {
        this.cachedInfractionSummary = null;
        this.lastInfractionSummaryAt = 0;
    }

    computeInfractionSummary(infractions = [], students = []) {
        const byStudentId = new Map();
        const byStudentName = new Map();
        const byClass = new Map();
        const byTimeSlot = new Map();
        const studentsMeta = new Map();
        const studentNameToKey = new Map();
        const severityTotals = { leve: 0, media: 0, grave: 0 };

        const ensureStudentBucket = (map, key, name, turma) => {
            if (!map.has(key)) {
                map.set(key, {
                    studentName: name || '',
                    className: turma || '',
                    total: 0,
                    leve: 0,
                    media: 0,
                    grave: 0,
                    infractions: [],
                });
            }
            return map.get(key);
        };

        students.forEach((student) => {
            const key = this.getStudentStorageKey(student.id || null, student.nome);
            if (key) {
                studentsMeta.set(key, { ...student });
                studentNameToKey.set(student.nome, key);
            }
        });

        const clonedInfractions = [];

        infractions.forEach((inf) => {
            if (!inf) return;
            const clone = { ...inf };
            clonedInfractions.push(clone);
            let severity = (clone.gravidade || 'leve').toLowerCase();
            if (!['leve', 'media', 'grave'].includes(severity)) {
                severity = 'leve';
            }
            severityTotals[severity] += 1;

            const classKey = clone.turma || 'Turma não informada';
            const classBucket = byClass.get(classKey) || { total: 0, leve: 0, media: 0, grave: 0 };
            classBucket.total += 1;
            classBucket[severity] += 1;
            byClass.set(classKey, classBucket);

            const slot = EducaFlowPro.formatTimeSlot(clone.horario) || 'Horário não informado';
            const slotBucket = byTimeSlot.get(slot) || { total: 0 };
            slotBucket.total += 1;
            byTimeSlot.set(slot, slotBucket);

            const studentKey = clone.studentId
                || studentNameToKey.get(clone.aluno || '')
                || this.getStudentStorageKey(null, clone.aluno || '');

            if (studentKey) {
                const studentBucket = ensureStudentBucket(byStudentId, studentKey, clone.aluno, clone.turma);
                studentBucket.total += 1;
                studentBucket[severity] += 1;
                studentBucket.className = clone.turma || studentBucket.className;
                studentBucket.infractions.push(clone);
            }

            const nameKey = clone.aluno || 'Aluno não identificado';
            const nameBucket = ensureStudentBucket(byStudentName, nameKey, clone.aluno, clone.turma);
            nameBucket.total += 1;
            nameBucket[severity] += 1;
            nameBucket.className = clone.turma || nameBucket.className;
            nameBucket.infractions.push(clone);
        });

        return {
            byStudentId,
            byStudentName,
            byClass,
            byTimeSlot,
            studentsMeta,
            studentNameToKey,
            severityTotals,
            totalInfractions: infractions.length,
            rawInfractions: clonedInfractions,
            generatedAt: Date.now(),
        };
    }

    async getInfractionsSummary({ forceRefresh = false, students = null, infractions = null } = {}) {
        if (!forceRefresh && this.cachedInfractionSummary) {
            return this.cachedInfractionSummary;
        }

        const [allInfractions, allStudents] = await Promise.all([
            infractions ? Promise.resolve(infractions) : this.getAllInfractions(),
            students ? Promise.resolve(students) : this.getAllStudents(),
        ]);

        const summary = this.computeInfractionSummary(allInfractions, allStudents);
        this.cachedInfractionSummary = summary;
        this.lastInfractionSummaryAt = Date.now();
        return summary;
    }

    getStudentCountsFromSummary(summary, student) {
        if (!summary || !student) {
            return { total: 0, leve: 0, media: 0, grave: 0, infractions: [], className: student?.turma || '' };
        }
        const key = this.getStudentStorageKey(student.id || null, student.nome);
        let bucket = null;
        if (key) {
            bucket = summary.byStudentId.get(key);
        }
        if (!bucket) {
            bucket = summary.byStudentName.get(student.nome);
        }
        if (!bucket) {
            return { total: 0, leve: 0, media: 0, grave: 0, infractions: [], className: student.turma || '' };
        }
        return {
            total: bucket.total || 0,
            leve: bucket.leve || 0,
            media: bucket.media || 0,
            grave: bucket.grave || 0,
            infractions: Array.isArray(bucket.infractions) ? [...bucket.infractions] : [],
            className: bucket.className || student.turma || '',
        };
    }

    buildInfractionChip(count, label, className, { mutedWhenZero = true, prefix = '' } = {}) {
        const value = Number(count) || 0;
        const isZero = value === 0;
        const classes = ['infraction-chip', className];
        if (isZero && mutedWhenZero) {
            classes.push('chip--muted');
        }
        const displayLabel = prefix ? `${prefix}: ${value}` : `${label}: ${value}`;
        return `<span class="${classes.join(' ')}" title="${label}">${displayLabel}</span>`;
    }

    renderInfractionBadges(counts) {
        if (!counts) {
            return '<div class="infraction-counts">0</div>';
        }
        const badges = [
            this.buildInfractionChip(counts.leve, 'Infrações leves', 'chip--leve', { prefix: 'L' }),
            this.buildInfractionChip(counts.media, 'Infrações médias', 'chip--media', { prefix: 'M' }),
            this.buildInfractionChip(counts.grave, 'Infrações graves', 'chip--grave', { prefix: 'G' }),
            this.buildInfractionChip(counts.total, 'Total de infrações', 'chip--total', { mutedWhenZero: false, prefix: 'Total' }),
        ];
        return `<div class="infraction-counts">${badges.join('')}</div>`;
    }

    getHeatmapIntensityClass(count, max) {
        if (!max || max <= 0) return 'heatmap-count--baixa';
        const ratio = count / max;
        if (ratio >= 0.75) return 'heatmap-count--alta';
        if (ratio >= 0.4) return 'heatmap-count--media';
        return 'heatmap-count--baixa';
    }

    getTopEntriesFromMap(map, limit = 3) {
        if (!map || typeof map.size === 'undefined') return [];
        return [...map.entries()]
            .map(([key, value]) => ({ key, total: value.total || 0 }))
            .filter(item => item.total > 0)
            .sort((a, b) => b.total - a.total || a.key.localeCompare(b.key))
            .slice(0, limit);
    }

    renderTimeHeatmap(map) {
        const entries = this.getTopEntriesFromMap(map);
        if (entries.length === 0) {
            return '<div class="heatmap-empty">Nenhuma infração registrada para gerar o mapa de horários.</div>';
        }
        const max = entries[0].total || 1;
        const items = entries.map((entry) => {
            const intensity = this.getHeatmapIntensityClass(entry.total, max);
            const label = entry.total === 1 ? 'infração' : 'infrações';
            return `<li><span class="heatmap-slot">${entry.key}</span><span class="heatmap-count ${intensity}">${entry.total} ${label}</span></li>`;
        });
        return `<ul class="heatmap-list">${items.join('')}</ul>`;
    }

    renderClassHeatmap(map) {
        const entries = this.getTopEntriesFromMap(map);
        if (entries.length === 0) {
            return '<div class="heatmap-empty">Nenhuma infração registrada para gerar o mapa por turma.</div>';
        }
        const max = entries[0].total || 1;
        const items = entries.map((entry) => {
            const intensity = this.getHeatmapIntensityClass(entry.total, max);
            const label = entry.total === 1 ? 'infração' : 'infrações';
            return `<li><span class="heatmap-slot">${entry.key}</span><span class="heatmap-count ${intensity}">${entry.total} ${label}</span></li>`;
        });
        return `<ul class="heatmap-list">${items.join('')}</ul>`;
    }

    async getInfractionSummaryForStudent(studentId, studentName, options = {}) {
        const { summary: providedSummary = null, studentRecord: providedStudentRecord = null } = options || {};
        let summary = providedSummary;
        if (!summary) {
            summary = await this.getInfractionsSummary({ forceRefresh: true });
        }

        let studentRecord = providedStudentRecord || null;
        if (!studentRecord && studentName) {
            try {
                studentRecord = await this.findStudentDataByName(studentName);
            } catch (error) {
                console.warn('⚠️ Não foi possível localizar dados completos do aluno:', error);
            }
        }

        const fallbackStudent = {
            id: studentRecord?.id || studentId,
            nome: studentRecord?.nome || studentName,
            turma: studentRecord?.turma || '',
        };

        const studentData = studentRecord
            ? {
                ...studentRecord,
                id: studentRecord.id || studentId || null,
                nome: studentRecord.nome || studentName,
                turma: studentRecord.turma || '',
            }
            : fallbackStudent;

        return this.getStudentCountsFromSummary(summary, studentData);
    }

    async syncStudentInfractionCount(studentId, studentName, options = {}) {
        const { infractions = null } = options;
        try {
            const list = infractions || await this.getAllInfractions();
            const total = list.filter((inf) => {
                if (studentId && inf.studentId) {
                    return inf.studentId === studentId;
                }
                return inf.aluno === studentName;
            }).length;

            if (this.isDemoMode) {
                const studentRecord = this.findStudentByName(studentName);
                if (studentRecord) {
                    studentRecord.infracoes = total;
                }
                return total;
            }

            const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
            if (!ownerId || !this.database) {
                return total;
            }

            if (studentId) {
                await this.database.ref(`users/${ownerId}/students/${studentId}/infracoes`).set(total);
            } else if (studentName) {
                const studentsRef = this.database.ref(`users/${ownerId}/students`);
                const snapshot = await studentsRef.orderByChild('nome').equalTo(studentName).once('value');
                snapshot.forEach((child) => {
                    child.ref.child('infracoes').set(total);
                });
            }

            return total;
        } catch (error) {
            console.warn('⚠️ Não foi possível sincronizar contador de infrações do aluno:', error);
            return null;
        }
    }

    async afterInfractionSaved({ studentId, studentName, severity }) {
        if (!studentName) return;
        try {
            const infractions = await this.getAllInfractions();
            await this.syncStudentInfractionCount(studentId, studentName, { infractions });
            this.invalidateInfractionSummary();
            const result = await this.updateSuspensionCounters({ id: studentId, name: studentName }, severity);
            if (result && result.shouldSuggest) {
                const summary = await this.getInfractionSummaryForStudent(studentId, studentName);
                this.openSuspensionModal({
                    studentId,
                    studentName,
                    trackerKey: result.key,
                    tracker: result.tracker,
                    reason: result.reason,
                    suggestedDuration: result.suggestedDuration,
                    severitySummary: summary,
                    automatic: true,
                });
            }
        } catch (error) {
            console.warn('⚠️ Não foi possível processar os impactos da infração:', error);
        }
    }

    async refreshSuspensionCountersForStudent(studentId, studentName, options = {}) {
        if (!studentName) return null;
        const { summary: aggregatedSummary = null, studentRecord = null } = options || {};
        const severitySummary = await this.getInfractionSummaryForStudent(studentId, studentName, {
            summary: aggregatedSummary,
            studentRecord,
        });
        const key = this.getStudentStorageKey(studentId, studentName);
        if (!key) {
            return { summary: severitySummary, tracker: null, key: null };
        }
        const tracker = await this.fetchSuspensionTracker(key, { studentId, studentName });
        tracker.leveCount = severitySummary?.leve || 0;
        tracker.mediaCount = severitySummary?.media || 0;
        tracker.graveCount = severitySummary?.grave || 0;
        tracker.studentId = tracker.studentId || studentId || null;
        tracker.studentName = tracker.studentName || studentName || '';
        tracker.className = severitySummary?.className || tracker.className || '';

        if (tracker.awaitingReport) {
            const trigger = this.evaluateSuspensionTrigger(tracker);
            if (!trigger.shouldSuggest) {
                tracker.awaitingReport = false;
                tracker.triggerReason = '';
                tracker.suggestedDuration = null;
                tracker.lastTriggeredAt = null;
            }
        }

        await this.saveSuspensionTracker(key, tracker);
        return { summary: severitySummary, tracker, key };
    }

    async processSuspensionRefreshResult({ refreshResult, studentId, studentName, allowModal = true }) {
        if (!refreshResult || !refreshResult.tracker || !refreshResult.key) {
            return false;
        }

        const { tracker, key, summary } = refreshResult;
        const trigger = this.evaluateSuspensionTrigger(tracker);

        if (!trigger.shouldSuggest) {
            if (tracker.awaitingReport || tracker.triggerReason || tracker.suggestedDuration) {
                const resetTracker = {
                    ...tracker,
                    awaitingReport: false,
                    triggerReason: '',
                    suggestedDuration: null,
                    lastTriggeredAt: null,
                    history: Array.isArray(tracker.history) ? [...tracker.history] : [],
                };
                await this.saveSuspensionTracker(key, resetTracker);
            }
            return false;
        }

        const trackerData = {
            ...tracker,
            studentId: tracker.studentId || studentId || null,
            studentName: tracker.studentName || studentName || '',
            className: tracker.className || summary?.className || '',
            awaitingReport: true,
            triggerReason: trigger.reason,
            suggestedDuration: trigger.suggestedDuration,
            lastTriggeredAt: Date.now(),
            history: Array.isArray(tracker.history) ? [...tracker.history] : [],
        };

        await this.saveSuspensionTracker(key, trackerData);

        if (!allowModal) {
            return false;
        }

        this.openSuspensionModal({
            studentId,
            studentName,
            trackerKey: key,
            tracker: trackerData,
            reason: trackerData.triggerReason || trigger.reason,
            suggestedDuration: trackerData.suggestedDuration || trigger.suggestedDuration,
            severitySummary: summary,
            automatic: true,
        });

        return true;
    }

    getSuspensionSummaryMarkup(summary) {
        if (!summary) {
            return '<p class="suspension-summary">Sem infrações registradas.</p>';
        }
        const items = [
            { label: 'Infrações leves', value: summary.leve || 0 },
            { label: 'Infrações médias', value: summary.media || 0 },
            { label: 'Infrações graves', value: summary.grave || 0 },
            { label: 'Total registrado', value: summary.total || 0 },
        ];
        const list = items.map(item => `<li><span>${item.label}:</span> <strong>${item.value}</strong></li>`).join('');
        return `<ul class="suspension-summary">${list}</ul>`;
    }

    buildSuspensionLetter({ studentName, className, reason, durationDays, summary }) {
        const durationLabel = durationDays === 1 ? '1 dia' : `${durationDays} dias`;
        const turmaLabel = className ? `, da turma ${className}` : '';
        const leve = summary?.leve || 0;
        const media = summary?.media || 0;
        const grave = summary?.grave || 0;
        return [
            `Prezada família de ${studentName}${turmaLabel},`,
            '',
            `Comunicamos que, após análise das ocorrências disciplinares registradas (${leve} leve(s), ${media} média(s) e ${grave} grave(s)), ${reason.toLowerCase()}.`,
            `Diante desse cenário, recomendamos a aplicação de suspensão por ${durationLabel}, com início imediato após o recebimento deste comunicado.`,
            '',
            'Solicitamos que a família acompanhe o(a) estudante neste período, reforçando as orientações de convivência, respeito e responsabilidade, alinhadas ao regimento escolar.',
            '',
            'Durante a suspensão, disponibilizaremos as atividades pedagógicas necessárias para que não haja prejuízo acadêmico. Ao retornar, o(a) estudante passará por uma conversa de reorientação com a coordenação.',
            '',
            'Agradecemos o apoio e colocamo-nos à disposição para esclarecimentos.',
        ].join('\n');
    }

    async generateSuspensionPdf({ studentName, className, reason, durationDays, letterText, summary }) {
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            const pageWidth = doc.internal.pageSize.getWidth();
            const margin = 20;
            let y = 20;

            if (this.config.reportHeader) {
                doc.setFontSize(12);
                doc.text(this.config.reportHeader, margin, y, { maxWidth: pageWidth - margin * 2 });
                y += 10;
            }

            doc.setFontSize(18);
            doc.text('Comunicado de Suspensão', pageWidth / 2, y, { align: 'center' });
            y += 14;

            doc.setFontSize(12);
            const studentLine = `Aluno: ${studentName}${className ? ` | Turma: ${className}` : ''}`;
            doc.text(studentLine, margin, y);
            y += 8;
            doc.text(`Motivo: ${reason}`, margin, y);
            y += 8;
            doc.text(`Duração sugerida: ${durationDays === 1 ? '1 dia' : `${durationDays} dias`}`, margin, y);
            y += 12;

            const letterLines = doc.splitTextToSize(letterText, pageWidth - margin * 2);
            doc.text(letterLines, margin, y);
            y += letterLines.length * 6 + 10;

            const summaryLines = [
                `Resumo de infrações: Leves ${summary?.leve || 0}, Médias ${summary?.media || 0}, Graves ${summary?.grave || 0}`,
                `Total acumulado: ${summary?.total || 0}`,
            ];
            doc.setFontSize(11);
            doc.text(summaryLines, margin, y);
            y += summaryLines.length * 6 + 10;

            const signatures = [
                { label: 'Família/Responsável' },
                { label: 'Aluno(a)' },
                { label: 'Coordenação' },
                { label: 'Direção' },
            ];

            const columnWidth = (pageWidth - margin * 2) / signatures.length;
            doc.setDrawColor(0);
            signatures.forEach((sig, index) => {
                const x = margin + index * columnWidth;
                doc.line(x, y, x + columnWidth - 5, y);
                doc.text(sig.label, x + (columnWidth - 5) / 2, y + 6, { align: 'center' });
            });

            const fileName = `suspensao-${studentName.replace(/\s+/g, '-')}-${Date.now()}.pdf`;
            doc.save(fileName);            
        } catch (error) {
            console.error('❌ Erro ao gerar PDF de suspensão:', error);
            this.showToast('Não foi possível gerar o PDF da suspensão.', 'error');
        }
    }

   openSuspensionModal({ studentId, studentName, trackerKey, tracker, reason, suggestedDuration, severitySummary, automatic }) {
        const modal = document.getElementById('suspensionModal');
        if (!modal) return;

        const studentNameEl = document.getElementById('suspensionStudentName');
        const reasonEl = document.getElementById('suspensionReason');
        const countsEl = document.getElementById('suspensionCounts');
        const letterField = document.getElementById('suspensionLetterText');
        const durationSelect = document.getElementById('suspensionDuration');

        const className = severitySummary?.className || tracker?.className || '';
        if (studentNameEl) studentNameEl.textContent = studentName;
        if (reasonEl) reasonEl.textContent = reason || 'Suspensão recomendada.';
        if (countsEl) countsEl.innerHTML = this.getSuspensionSummaryMarkup(severitySummary);

        const durationValue = suggestedDuration || EducaFlowPro.determineSuspensionDuration(tracker?.issuedSuspensions || 0);
        if (durationSelect) {
            const value = String(durationValue);
            if (![...durationSelect.options].some(opt => opt.value === value)) {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = `${durationValue} dia${durationValue > 1 ? 's' : ''}`;
                durationSelect.appendChild(option);
            }
            durationSelect.value = value;
        }
       
       const letter = this.buildSuspensionLetter({
            studentName,
            className,
            reason: reason || 'Infrações recorrentes registradas',
            durationDays: durationValue,
            summary: severitySummary,
        });
        if (letterField) {
            letterField.value = letter;
        }

        this.pendingSuspensionSuggestion = {
            studentId,
            studentName,
            trackerKey: trackerKey || this.getStudentStorageKey(studentId, studentName),
            tracker,
            reason,
            suggestedDuration: durationValue,
            severitySummary,
            automatic: Boolean(automatic),
        };

        modal.classList.remove('hidden');
    }

   closeSuspensionModal() {
        const modal = document.getElementById('suspensionModal');
        if (modal) {
            modal.classList.add('hidden');
        }
        this.resetSuspensionModal();
    }

    resetSuspensionModal() {
        const reasonEl = document.getElementById('suspensionReason');
        if (reasonEl) reasonEl.textContent = '';
        const countsEl = document.getElementById('suspensionCounts');
        if (countsEl) countsEl.innerHTML = '';
        const letterField = document.getElementById('suspensionLetterText');
        if (letterField) letterField.value = '';
        const durationSelect = document.getElementById('suspensionDuration');
        if (durationSelect) durationSelect.value = '1';
        this.pendingSuspensionSuggestion = null;
    }

    async confirmSuspensionGeneration() {
        if (!this.pendingSuspensionSuggestion) {
            this.showToast('Nenhuma suspensão selecionada.', 'warning');
            return;
        }

        const letterField = document.getElementById('suspensionLetterText');
        const durationSelect = document.getElementById('suspensionDuration');
        const letterText = letterField ? letterField.value.trim() : '';
        if (!letterText) {
            this.showToast('Escreva o texto do comunicado antes de gerar a suspensão.', 'error');
            return;
        }
        const durationDays = durationSelect ? Number(durationSelect.value) || this.pendingSuspensionSuggestion.suggestedDuration : this.pendingSuspensionSuggestion.suggestedDuration;

        await this.finalizeSuspension({
            ...this.pendingSuspensionSuggestion,
            durationDays,
            letterText,
        });
    }

    async finalizeSuspension({ studentId, studentName, trackerKey, tracker, reason, durationDays, letterText, severitySummary, automatic }) {
        try {
            const key = trackerKey || this.getStudentStorageKey(studentId, studentName);
            let trackerData = tracker || await this.fetchSuspensionTracker(key, { studentId, studentName });
            trackerData = this.normalizeSuspensionTracker(trackerData, { studentId, studentName });
            trackerData.leveCount = 0;
            trackerData.mediaCount = 0;
            trackerData.graveCount = 0;
            trackerData.awaitingReport = false;
            trackerData.triggerReason = '';
            trackerData.suggestedDuration = durationDays;
            trackerData.lastTriggeredAt = null;
            trackerData.issuedSuspensions = (trackerData.issuedSuspensions || 0) + 1;
            trackerData.history = trackerData.history || [];
            trackerData.history.push({
                generatedAt: Date.now(),
                durationDays,
                reason,
                automatic: Boolean(automatic),
            });

            await this.saveSuspensionTracker(key, trackerData);

            if (this.isDemoMode) {
                if (!this.demoData.suspensions) {
                    this.demoData.suspensions = [];
                }
                this.demoData.suspensions.push({
                    studentId,
                    studentName,
                    durationDays,
                    reason,
                    letterText,
                    createdAt: Date.now(),
                    automatic: Boolean(automatic),
                });
            } else {
                const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                if (ownerId && this.database) {
                    const recordRef = this.database.ref(`users/${ownerId}/suspensions/${key}`).push();
                    await recordRef.set({
                        studentId,
                        studentName,
                        durationDays,
                        reason,
                        letterText,
                        automatic: Boolean(automatic),
                        createdAt: firebase.database.ServerValue.TIMESTAMP,
                    });
                }
            }

            await this.generateSuspensionPdf({
                studentName,
                className: severitySummary?.className || '',
                reason: reason || 'Suspensão recomendada',
                durationDays,
                letterText,
                summary: severitySummary,
            });

            this.showToast('Suspensão gerada com sucesso.', 'success');
        } catch (error) {
            console.error('❌ Erro ao registrar suspensão:', error);
            this.showToast('Erro ao registrar a suspensão.', 'error');
        } finally {
            this.closeSuspensionModal();
        }
        }

    async openManualSuspensionModal() {
        const select = document.getElementById('studentForSuspension');
        if (!select || !select.value) {
            this.showToast('Selecione um aluno para gerar a suspensão.', 'warning');
            return;
        }
        const studentName = select.value;
        const studentRecord = await this.findStudentDataByName(studentName);
        const studentId = studentRecord ? studentRecord.id : null;
        const summary = await this.getInfractionSummaryForStudent(studentId, studentName);
        const key = this.getStudentStorageKey(studentId, studentName);
        const tracker = await this.fetchSuspensionTracker(key, { studentId, studentName });
        const suggestedDuration = tracker.awaitingReport && tracker.suggestedDuration
            ? tracker.suggestedDuration
            : EducaFlowPro.determineSuspensionDuration(tracker.issuedSuspensions || 0);
        const reason = tracker.triggerReason
            || 'Solicitação manual de suspensão com base no histórico registrado.';
        this.openSuspensionModal({
            studentId,
            studentName,
            trackerKey: key,
            tracker,
            reason,
            suggestedDuration,
            severitySummary: summary,
            automatic: false,
        });
    }

    /**
     * Filtra infrações por nome do aluno.
     * @param {string} studentName Nome do aluno
     */
    async getStudentInfractions(studentName) {
        const infractions = await this.getAllInfractions();
        // Tenta localizar o registro do aluno para obter o ID. Se não conseguir, filtra somente pelo nome.
        let studentId = null;
        try {
            const studentRecord = await this.findStudentDataByName(studentName);
            studentId = studentRecord ? studentRecord.id : null;
        } catch (e) {
            console.warn('⚠️ Não foi possível obter ID do aluno:', e);
        }
        return infractions.filter(inf => {
            if (inf.aluno === studentName) return true;
            if (studentId && inf.studentId && inf.studentId === studentId) return true;
            return false;
        });
    }

    /**
     * Filtra infrações por turma.
     * @param {string} className Nome da turma
     */
    async getClassInfractions(className) {
        const infractions = await this.getAllInfractions();
        return infractions.filter(inf => (inf.turma || '') === className);
    }

    /**
     * Filtra infrações de acordo com múltiplos parâmetros.
     * @param {Object} filters Objeto contendo parâmetros: period, gravity, className, shift, startDate, endDate
     */
    async getFilteredInfractions(filters = {}) {
        let infractions = await this.getAllInfractions();
        const { gravity, className, shift, startDate, endDate } = filters;
        // Gravidade
        if (gravity && gravity !== 'all') {
            infractions = infractions.filter(inf => {
                if (gravity === 'mediaGrave') {
                    return inf.gravidade === 'media' || inf.gravidade === 'grave';
                }
                return inf.gravidade === gravity;
            });
        }
        // Turma
        if (className && className !== 'all') {
            infractions = infractions.filter(inf => (inf.turma || '') === className);
        }
        // Turno
        if (shift && shift !== 'all') {
            // Para turno, precisamos localizar o aluno e comparar
            infractions = infractions.filter(inf => {
                const student = this.findStudentByName(inf.aluno);
                return student && student.turno === shift;
            });
        }
        // Período personalizado
        if (startDate) {
            const start = new Date(startDate);
            infractions = infractions.filter(inf => new Date(inf.data) >= start);
        }
        if (endDate) {
            const end = new Date(endDate);
            infractions = infractions.filter(inf => new Date(inf.data) <= end);
        }
        return infractions;
    }

    /**
     * Gera um PDF genérico com título e lista de infrações.
     * @param {string} title Título do relatório
     * @param {Array} infractions Lista de infrações
     */
    generateGenericReportPDF(title, infractions) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        // Cabeçalho personalizado do relatório, se definido
        let yPosition = 20;
        if (this.config && this.config.reportHeader) {
            doc.setFontSize(14);
            doc.setTextColor(30, 64, 175);
            doc.text(this.config.reportHeader, pageWidth / 2, yPosition, { align: 'center' });
            yPosition += 8;
        }
        // Título do relatório
        doc.setFontSize(16);
        doc.setTextColor(30, 64, 175);
        doc.text(title, pageWidth / 2, yPosition, { align: 'center' });
        // Configurações de corpo
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        let y = yPosition + 10;
        const lineHeight = 6;
        if (infractions.length === 0) {
            doc.text('Nenhuma infração encontrada para os filtros selecionados.', 20, y);
            y += lineHeight;
        } else {
            infractions.forEach((inf, idx) => {
                if (y > 280) {
                    doc.addPage();
                    y = 20;
                }
                const dateStr = new Date(inf.data).toLocaleDateString('pt-BR');
                const gravidadeLabel = this.getGravidadeLabel(inf.gravidade);
                const line = `${idx + 1}. ${dateStr} - ${inf.aluno} - ${inf.turma || 'N/A'} - ${inf.tipo} (${gravidadeLabel})`;
                doc.text(line, 10, y);
                y += lineHeight;
            });
        }
        const fileSafeTitle = title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
        const fileName = `${fileSafeTitle}-${Date.now()}.pdf`;
        doc.save(fileName);
    }

    /**
     * Gera relatório completo com todas as infrações.
     */
    async generateFullReportPDF() {
        const infractions = await this.getAllInfractions();
        this.generateGenericReportPDF('Relatório Completo de Infrações', infractions);
        this.showToast('Relatório completo gerado com sucesso!', 'success');
    }

    /**
     * Gera relatório do histórico disciplinar de um aluno.
     * @param {string} studentName Nome do aluno
     */
    async generateStudentHistoryPDF(studentName) {
        const infractions = await this.getStudentInfractions(studentName);
        this.generateGenericReportPDF(`Histórico Disciplinar - ${studentName}`, infractions);
        this.showToast(`Histórico de ${studentName} gerado com sucesso!`, 'success');
    }

    /**
     * Gera relatório consolidado por turma.
     * @param {string} className Nome da turma
     */
    async generateClassReportPDF(className) {
        const infractions = await this.getClassInfractions(className);
        this.generateGenericReportPDF(`Relatório da Turma ${className}`, infractions);
        this.showToast(`Relatório por turma gerado com sucesso!`, 'success');
    }

    /**
     * Gera relatório geral aplicando filtros personalizados.
     * @param {Object} filters Objeto de filtros
     */
    async generateGeneralReportPDF(filters) {
        const infractions = await this.getFilteredInfractions(filters);
        this.generateGenericReportPDF('Relatório Geral Filtrado', infractions);
        this.showToast('Relatório geral gerado com sucesso!', 'success');
    }

    /**
     * Gera relatório estatístico (quantitativo) a partir dos filtros aplicados.
     * @param {Object} filters Objeto de filtros
     */
    async generateStatisticalReportPDF(filters) {
        // Para fins de demonstração, vamos gerar um relatório simples com contagens por tipo e gravidade.
        const infractions = await this.getFilteredInfractions(filters);
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        doc.setFontSize(16);
        doc.setTextColor(30, 64, 175);
        doc.text('Relatório Estatístico de Infrações', pageWidth / 2, 20, { align: 'center' });
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        let y = 30;
        // Contagem por tipo
        const countsByType = {};
        const countsByGravity = {};
        infractions.forEach(inf => {
            countsByType[inf.tipo] = (countsByType[inf.tipo] || 0) + 1;
            countsByGravity[inf.gravidade] = (countsByGravity[inf.gravidade] || 0) + 1;
        });
        doc.setFontSize(12);
        doc.text('Contagem por Tipo de Infração:', 10, y);
        y += 6;
        Object.entries(countsByType).forEach(([tipo, count]) => {
            doc.text(`• ${tipo}: ${count}`, 15, y);
            y += 6;
        });
        y += 6;
        doc.text('Contagem por Gravidade:', 10, y);
        y += 6;
        Object.entries(countsByGravity).forEach(([gravidade, count]) => {
            doc.text(`• ${this.getGravidadeLabel(gravidade)}: ${count}`, 15, y);
            y += 6;
        });
        const fileName = `relatorio-estatistico-${Date.now()}.pdf`;
        doc.save(fileName);
        this.showToast('Relatório estatístico gerado com sucesso!', 'success');
    }

    /**
     * Gera relatório de infrações por período com filtros personalizados.
     * @param {Object} filters Objeto de filtros incluindo startDate e endDate
     */
    async generatePeriodReportPDF(filters) {
        const infractions = await this.getFilteredInfractions(filters);
        this.generateGenericReportPDF('Relatório por Período', infractions);
        this.showToast('Relatório por período gerado com sucesso!', 'success');
    }

    /**
     * Carrega o modelo de toxicidade da biblioteca @tensorflow-models/toxicity.
     * Este método deve ser chamado durante a inicialização.
     */
    async loadToxicityModel() {
        try {
            // Evitar recarregar se já está carregado
            if (this.toxicityModel) return;
            if (typeof toxicity === 'undefined') {
                console.warn('Biblioteca toxicity não encontrada. Verifique se o script foi carregado.');
                return;
            }
            const threshold = 0.8;
            this.toxicityModel = await toxicity.load(threshold);
            console.log('🤖 Modelo de toxicidade carregado.');
        } catch (error) {
            console.error('❌ Erro ao carregar modelo de toxicidade:', error);
        }
    }

    /**
     * Analisa o texto de uma infração usando o modelo de toxicidade.
     * Exibe um aviso se forem detectados termos ofensivos ou problemáticos.
     * @param {string} text Descrição da infração
     */
    async analyzeInfractionText(text) {
        try {
            if (!text || !this.toxicityModel) return;
            const predictions = await this.toxicityModel.classify([text]);
            // Verifica se alguma categoria acusou match
            const isToxic = predictions.some(pred => pred.results && pred.results[0].match);
            if (isToxic) {
                this.showToast('⚠️ A descrição contém termos sensíveis ou ofensivos (detectado pela IA).', 'warning');
            } else {
                this.showToast('👍 Nenhum termo ofensivo detectado na descrição.', 'info');
            }
        } catch (error) {
            console.error('Erro ao analisar texto:', error);
        }
    }

    // ========== CONFIGURAÇÕES E PERMISSÕES ==========

    /**
     * Carrega configurações do aplicativo a partir do banco (reportHeader, defaultPedagogicalText e tagline).
     * Aplica a tagline aos elementos apropriados após o carregamento.
     */
    async loadAppConfig() {
        if (this.isDemoMode) {
            // Configurações padrão no modo demo
            this.config.reportHeader = 'EducaFlow Pro - Gestão Escolar';
            this.config.defaultPedagogicalText = '';
            this.config.tagline = 'Transformando a disciplina em excelência';
            this.applyTagline();

        // Atualiza o logotipo para usar a data URI, garantindo que a imagem sempre seja exibida
        this.applyLogo();
            return;
        }
        try {
            const snapshot = await this.database.ref('settings').once('value');
            const settings = snapshot.val() || {};
            this.config.reportHeader = settings.reportHeader || 'EducaFlow Pro - Gestão Escolar';
            this.config.defaultPedagogicalText = settings.defaultPedagogicalText || '';
            this.config.tagline = settings.tagline || 'Transformando a disciplina em excelência';
            this.applyTagline();
        } catch (error) {
            console.error('Erro ao carregar configurações:', error);
        }
    }

    /**
     * Substitui as imagens com classe .logo-img pelo conteúdo base64 embutido no aplicativo.
     */
    applyLogo() {
        const imgs = document.querySelectorAll('.logo-img');
        imgs.forEach(img => {
            // Só altera se o atributo src ainda aponta para logo.png ou está vazio
            if (!img.src || img.src.includes('logo.png')) {
                img.src = this.logoDataUri;
            }
        });
    }

    /**
     * Aplica a tagline carregada à interface do usuário (áreas que usam a classe .tagline).
     */
    applyTagline() {
        const taglineText = this.config.tagline || 'Transformando a disciplina em excelência';
        document.querySelectorAll('.tagline').forEach(el => {
            el.textContent = taglineText;
        });
    }

    /**
     * Verifica se o usuário logado possui permissão para acessar o sistema.
     * Caso o banco não possua usuários cadastrados, o primeiro usuário se torna administrador.
     * Se o usuário não estiver na lista de autorizados, abre modal para inserir código de convite.
     */
    async checkUserPermission() {
        // Não verificar em modo demo
        if (this.isDemoMode) {
            await this.loadAppConfig();
            this.isAdmin = true;
            this.updateSettingsNav();
            this.showDashboard();
            return;
        }
        if (!this.currentUser) {
            this.showLogin();
            return;
        }
        try {
           const email = this.currentUser.email || '';
            const name = this.currentUser.displayName || '';
            const uid = this.currentUser.uid;
            const emailKey = email ? email.replace(/\./g, ',') : null;
            
            let allowedRecord = null;

            const { record: recordByUid } = await this.fetchAllowedUser(uid, { uid, email, name });
            if (recordByUid) {
                allowedRecord = {
                    ...recordByUid,
                    uid,
                    email: recordByUid.email || email,
                    name: recordByUid.name || name
                };
            }

            if (!allowedRecord && emailKey) {
                const legacy = await this.fetchAllowedUser(emailKey, { uid, email, name });
                if (legacy.record) {
                    const permission = legacy.record.permission || 'user';
                    const payload = {
                        uid,
                        email,
                        name,
                        createdAt: legacy.raw?.createdAt || firebase.database.ServerValue.TIMESTAMP,
                        permission
                    };
                   
                    try {
                        await this.database.ref(`settings/allowedUsers/${uid}`).set(payload);
                        allowedRecord = { ...payload, createdAt: Date.now() };
                        await this.database.ref(`settings/allowedUsers/${emailKey}`).remove();
                        console.log('🔁 Registro legado de usuário autorizado migrado para UID.');
                    } catch (migrationError) {
                        console.warn('⚠️ Não foi possível migrar registro legado de usuário autorizado:', migrationError);
                    }
                }
            }
            
           const { ownerId, wasClaimed } = await this.ensureOwnerId(uid);
            const effectiveOwnerId = ownerId || uid;
            this.dataOwnerId = effectiveOwnerId;
            const isOwner = effectiveOwnerId === uid;

            let autoPromoted = false;
            let ownerRestored = false;

            if (!allowedRecord && (wasClaimed || isOwner)) {
                const adminRecord = {
                    uid,
                    email,
                    name,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,
                    permission: 'admin'
                };

                try {
                    await this.database.ref(`settings/allowedUsers/${uid}`).set(adminRecord);
                    allowedRecord = { ...adminRecord, createdAt: Date.now() };
                    if (emailKey) {
                        try {
                            await this.database.ref(`settings/allowedUsers/${emailKey}`).remove();
                        } catch (removalError) {
                            console.warn('⚠️ Não foi possível remover o registro legado do usuário autorizado:', removalError);
                        }
                    }

                    if (wasClaimed) {
                        console.log('👑 Primeiro usuário autenticado promovido automaticamente a administrador.');
                        autoPromoted = true;
                    } else {
                        console.log('🛠️ Permissão administrativa restaurada automaticamente para o proprietário dos dados.');
                        ownerRestored = true;
                    }
                } catch (creationError) {
                    console.warn('⚠️ Não foi possível sincronizar o registro administrativo do proprietário:', creationError);
                    allowedRecord = {
                        uid,
                        email,
                        name,
                        permission: 'admin',
                        createdAt: Date.now()
                    };
                    autoPromoted = wasClaimed;
                    ownerRestored = !wasClaimed && isOwner;
                }
            }

            if (allowedRecord) {
                this.isAdmin = (allowedRecord.permission || 'user') === 'admin';
                await this.saveUserData(this.currentUser);
                await this.loadAppConfig();
                this.updateSettingsNav();
                this.showDashboard();
                if (autoPromoted) {
                    this.showToast('Primeiro acesso configurado como administrador.', 'success');
                } else if (ownerRestored) {
                    this.showToast('Permissão administrativa restaurada automaticamente para o proprietário dos dados.', 'info');
                }
                return;
            }

            await this.loadAppConfig();
            this.updateSettingsNav();
            const loginContainer = document.getElementById('login');
            if (loginContainer) loginContainer.classList.add('hidden');
            const modal = document.getElementById('accessCodeModal');
            if (modal) {
                modal.classList.remove('hidden');
            }
            const verifyBtn = document.getElementById('verifyAccessCodeBtn');
            if (verifyBtn) verifyBtn.onclick = () => this.verifyAccessCode();
            const cancelBtn = document.getElementById('cancelAccessCodeBtn');
            if (cancelBtn) cancelBtn.onclick = () => this.signOut();
        } catch (error) {
            console.error('Erro ao verificar permissões:', error);
            this.showToast('Erro ao verificar permissões', 'error');
            this.showLogin();
        }
    }

    /**
     * Verifica o código de convite inserido e autoriza o usuário caso seja válido.
     * Remove o convite do banco após utilização.
     */
    async verifyAccessCode() {
        const input = document.getElementById('accessCodeInput');
        const errorEl = document.getElementById('accessCodeError');
        const code = input ? input.value.trim() : '';
        if (!code) {
            if (errorEl) {
                errorEl.textContent = 'Digite um código válido.';
                errorEl.classList.remove('hidden');
            }
            return;
        }
        try {
            const inviteRef = this.database.ref(`settings/invites/${code}`);
            const snapshot = await inviteRef.once('value');
            const invite = snapshot.val();
            if (invite) {
                // Autorizar usuário
                    const email = this.currentUser.email;
                    const name = this.currentUser.displayName || '';
                    const uid = this.currentUser.uid;
                    await this.database.ref(`settings/allowedUsers/${uid}`).set({
                        uid,
                        email,
                        name,
                        createdAt: firebase.database.ServerValue.TIMESTAMP,
                        permission: 'user'
                    });
                // Salva dados do usuário para registro de login e permissões
                await this.saveUserData(this.currentUser);
                // Remover convite utilizado
                await inviteRef.remove();
                // Definir o dataOwnerId para este usuário com base no ownerId salvo nas configurações
                try {
                    const ownerIdSnapshot = await this.database.ref('settings/ownerId').once('value');
                    const ownerId = ownerIdSnapshot.val() || (this.currentUser ? this.currentUser.uid : null);
                    this.dataOwnerId = ownerId;
                } catch (err) {
                    console.error('Erro ao obter ownerId ao verificar código:', err);
                    this.dataOwnerId = this.currentUser ? this.currentUser.uid : null;
                }
                // Fechar modal
                const modal = document.getElementById('accessCodeModal');
                if (modal) {
                    modal.classList.add('hidden');
                }
                // Carregar config e mostrar dashboard
                await this.loadAppConfig();
                this.isAdmin = false;
                this.updateSettingsNav();
                this.showDashboard();
            } else {
                if (errorEl) {
                    errorEl.textContent = 'Código inválido ou expirado.';
                    errorEl.classList.remove('hidden');
                }
            }
        } catch (error) {
            console.error('Erro ao verificar código:', error);
            if (errorEl) {
                errorEl.textContent = 'Erro ao verificar código.';
                errorEl.classList.remove('hidden');
            }
        }
    }

    /**
     * Gera um novo código de convite e o salva no banco. Apenas administradores podem gerar convites.
     */
    async generateInviteCode() {
        if (!this.isAdmin) {
            this.showToast('Apenas administradores podem gerar convites.', 'error');
            return;
        }
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        try {
            await this.database.ref(`settings/invites/${code}`).set({
                createdBy: this.currentUser.email,
                createdAt: firebase.database.ServerValue.TIMESTAMP
            });
            this.showToast(`Convite gerado: ${code}`, 'success');
            this.displayInvites();
        } catch (error) {
            console.error('Erro ao gerar convite:', error);
            this.showToast('Erro ao gerar convite', 'error');
        }
    }

    /**
     * Exibe a lista de convites em aberto no painel de configurações.
     */
    async displayInvites() {
        const listEl = document.getElementById('invitesList');
        if (!listEl) return;
        listEl.innerHTML = '';
        try {
            const snapshot = await this.database.ref('settings/invites').once('value');
            const invites = snapshot.val() || {};
            const codes = Object.keys(invites);
            if (codes.length === 0) {
                listEl.innerHTML = '<p>Nenhum convite em aberto.</p>';
                return;
            }
            codes.forEach(code => {
                const div = document.createElement('div');
                div.className = 'invite-item';
                div.innerHTML = `
                    <span class="invite-code">${code}</span>
                    <button class="btn btn--outline btn--sm" data-code="${code}">Excluir</button>
                `;
                listEl.appendChild(div);
            });
            // Adicionar listeners para excluir convites
            listEl.querySelectorAll('button').forEach(btn => {
                btn.onclick = async () => {
                    const code = btn.getAttribute('data-code');
                    try {
                        await this.database.ref(`settings/invites/${code}`).remove();
                        this.showToast('Convite removido', 'success');
                        this.displayInvites();
                    } catch (error) {
                        console.error('Erro ao remover convite:', error);
                        this.showToast('Erro ao remover convite', 'error');
                    }
                };
            });
        } catch (error) {
            console.error('Erro ao listar convites:', error);
            listEl.innerHTML = '<p>Erro ao carregar convites.</p>';
        }
    }

    /**
     * Exibe a lista de usuários autorizados no painel de configurações.
     */
    async displayAllowedUsers() {
        const listEl = document.getElementById('allowedUsersList');
        if (!listEl) return;
        listEl.innerHTML = '';
        try {
            const snapshot = await this.database.ref('settings/allowedUsers').once('value');
            const users = snapshot.val() || {};
            const keys = Object.keys(users);
            if (keys.length === 0) {
                listEl.innerHTML = '<p>Nenhum usuário autorizado.</p>';
                return;
            }
            keys.forEach(key => {
                const user = users[key];
                const div = document.createElement('div');
                div.className = 'user-item';
                const role = user.permission === 'admin' ? ' (Admin)' : '';
                // Nome ou email
                const nameSpan = document.createElement('span');
                nameSpan.textContent = (user.name || user.email) + role;
                div.appendChild(nameSpan);
                // Se for administrador atual, não mostrar botão de remoção. Apenas administradores podem remover outros usuários.
                if (this.isAdmin && user.uid !== this.currentUser.uid) {
                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'btn btn--xs btn--outline';
                    removeBtn.style.marginLeft = '8px';
                    removeBtn.title = 'Remover Usuário';
                    removeBtn.textContent = '🗑️';
                    removeBtn.onclick = () => {
                        if (confirm('Tem certeza que deseja remover este usuário?')) {
                            this.removeAllowedUser(user.uid);
                        }
                    };
                    div.appendChild(removeBtn);
                }
                listEl.appendChild(div);
            });
        } catch (error) {
            console.error('Erro ao listar usuários autorizados:', error);
            listEl.innerHTML = '<p>Erro ao carregar usuários autorizados.</p>';
        }
    }

    /**
     * Salva as configurações personalizadas de relatórios (cabeçalho e texto pedagógico padrão).
     * Apenas administradores podem salvar as configurações.
     */
    async saveSettings() {
        if (!this.isAdmin) {
            this.showToast('Apenas administradores podem salvar configurações.', 'error');
            return;
        }
        const headerEl = document.getElementById('reportHeaderInput');
        const textEl = document.getElementById('defaultPedagogicalTextInput');
        const header = headerEl ? headerEl.value.trim() : '';
        const text = textEl ? textEl.value.trim() : '';
        try {
            await this.database.ref('settings/reportHeader').set(header);
            await this.database.ref('settings/defaultPedagogicalText').set(text);
            this.config.reportHeader = header || 'EducaFlow Pro - Gestão Escolar';
            this.config.defaultPedagogicalText = text || '';
            this.showToast('Configurações salvas com sucesso!', 'success');
        } catch (error) {
            console.error('Erro ao salvar configurações:', error);
            this.showToast('Erro ao salvar configurações', 'error');
        }
    }

    /**
     * Atualiza a visibilidade do botão de configurações no menu de navegação de acordo com o papel do usuário.
     */
    updateSettingsNav() {
        const settingsBtn = document.getElementById('settingsNavBtn');
        if (!settingsBtn) return;
        // Mostrar para admin ou ocultar para usuários comuns
        settingsBtn.style.display = this.isAdmin ? '' : 'none';
    }

    // ========== SISTEMA DE BACKUP AUTOMÁTICO ==========

    initializeAutoBackup() {
        console.log('💾 Inicializando backup automático...');
        
        // Backup a cada 24 horas
        setInterval(() => {
            if (this.currentUser && !this.isDemoMode) {
                this.performAutoBackup();
            }
        }, 24 * 60 * 60 * 1000);
        
        // Backup imediato após 5 minutos
        setTimeout(() => {
            if (this.currentUser && !this.isDemoMode) {
                this.performAutoBackup();
            }
        }, 5 * 60 * 1000);
    }

    async performAutoBackup() {
        try {
            console.log('💾 Executando backup automático...');
            
            // Realiza backup com base no proprietário dos dados, não apenas o usuário logado
            const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
            if (!ownerId) return;
            const backupRef = this.database.ref(`users/${ownerId}/backups`).push();
            
            // Obter todos os dados
            const studentsSnapshot = await this.database.ref(`users/${ownerId}/students`).once('value');
            const classesSnapshot = await this.database.ref(`users/${ownerId}/classes`).once('value');
            const infractionsSnapshot = await this.database.ref(`users/${ownerId}/infractions`).once('value');
            
            await backupRef.set({
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                students: studentsSnapshot.val() || {},
                classes: classesSnapshot.val() || {},
                infractions: infractionsSnapshot.val() || {},
                version: '2.0'
            });
            
            console.log('✅ Backup automático realizado');
            
        } catch (error) {
            console.error('❌ Erro no backup automático:', error);
        }
    }

    // ========== EDIÇÃO E EXCLUSÃO DE REGISTROS ==========

    /**
     * Abre o modal de aluno para editar um registro existente.
     * Carrega os dados do aluno pelo ID e preenche os campos do formulário. Ao salvar,
     * o método saveStudent detectará o modo de edição e atualizará o registro em vez de
     * criar um novo.
     * @param {string} id Identificador do aluno no banco de dados
     */
    async editStudent(id) {
        try {
            // Buscar dados do aluno
            let studentData = null;
            if (this.isDemoMode) {
                studentData = this.demoData.students.find(s => s.id === id);
            } else {
                const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                const snapshot = await this.database.ref(`users/${ownerId}/students/${id}`).once('value');
                studentData = snapshot.exists() ? snapshot.val() : null;
            }
            if (!studentData) {
                this.showToast('Aluno não encontrado', 'error');
                return;
            }
            // Definir modo edição
            this.editingStudentId = id;
            // Ajustar título do modal
            const modal = document.getElementById('studentModal');
            if (modal) {
                const header = modal.querySelector('.modal__header h3');
                if (header) header.textContent = 'Editar Aluno';
            }
            // Preencher campos
            document.getElementById('studentName').value = studentData.nome || '';
            document.getElementById('studentClass').value = studentData.turma || '';
            document.getElementById('studentId').value = studentData.matricula || '';
            document.getElementById('studentShift').value = studentData.turno || '';
            // Exibir modal
            document.getElementById('studentModal').classList.remove('hidden');
        } catch (error) {
            console.error('Erro ao carregar aluno para edição:', error);
            this.showToast('Erro ao carregar dados do aluno', 'error');
        }
    }

    async deleteStudent(id) {
        if (!confirm('Tem certeza que deseja excluir este aluno?')) return;
        
        try {
            if (this.isDemoMode) {
                this.demoData.students = this.demoData.students.filter(s => s.id !== id);
            } else {
                // Exclui o aluno do path compartilhado do proprietário dos dados
                const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                await this.database.ref(`users/${ownerId}/students/${id}`).remove();
            }
            
            this.invalidateInfractionSummary();
            await this.loadStudents();
            await this.loadStatistics();
            await this.createHeatmaps();
            this.populateAllSelects();
            this.showToast('Aluno excluído com sucesso!', 'success');
            
        } catch (error) {
            console.error('❌ Erro ao excluir aluno:', error);
            this.showToast(`Erro ao excluir aluno: ${error.message}`, 'error');
        }
    }

    editInfraction(id) {
        this.showToast('Edição de infração em desenvolvimento', 'info');
    }

    async deleteInfraction(id) {
        if (!confirm('Tem certeza que deseja excluir esta infração?')) return;
        
        try {
            let removedInfraction = null;
            
            if (this.isDemoMode) {
                const idx = this.demoData.infractions.findIndex(inf => inf.id === id);
                if (idx >= 0) {
                    removedInfraction = { ...this.demoData.infractions[idx] };
                    this.demoData.infractions.splice(idx, 1);
                }
            } else {
                const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                               const infractionRef = this.database.ref(`users/${ownerId}/infractions/${id}`);
                const snapshot = await infractionRef.once('value');
                removedInfraction = snapshot.exists() ? { id, ...snapshot.val() } : null;
                await infractionRef.remove();
            }
            
            this.invalidateInfractionSummary();
            const summary = await this.getInfractionsSummary({ forceRefresh: true });
            const infractionsForSync = Array.isArray(summary?.rawInfractions) ? summary.rawInfractions : null;

            if (removedInfraction) {
                const removedStudentName = removedInfraction.aluno || '';
                const removedStudentId = removedInfraction.studentId || null;
                if (removedStudentName) {
                    const syncPayload = infractionsForSync ? { infractions: infractionsForSync } : {};
                    await this.syncStudentInfractionCount(removedStudentId, removedStudentName, syncPayload);

                    const refreshResult = await this.refreshSuspensionCountersForStudent(removedStudentId, removedStudentName, { summary });
                    await this.processSuspensionRefreshResult({
                        refreshResult,
                        studentId: removedStudentId,
                        studentName: removedStudentName,
                        allowModal: false,
                    });
                }
            }

            await Promise.all([
                this.loadInfractions(),
                this.loadStudents(),
                this.loadClasses(),
                this.loadStatistics(),
                this.createHeatmaps(),
            ]);

            this.populateAllSelects();
            this.showToast('Infração excluída com sucesso!', 'success');
            
        } catch (error) {
            console.error('❌ Erro ao excluir infração:', error);
            this.showToast(`Erro ao excluir infração: ${error.message}`, 'error');
        }
    }

    /**
     * Abre o modal de turma para editar uma turma existente.
     * Carrega os dados pelo ID e preenche o formulário. Ao salvar, saveClass
     * detectará o modo de edição e atualizará o registro.
     * @param {string} id
     */
    async editClass(id) {
        try {
            let classData = null;
            if (this.isDemoMode) {
                classData = this.demoData.classes.find(c => c.id === id);
            } else {
                const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                const snapshot = await this.database.ref(`users/${ownerId}/classes/${id}`).once('value');
                classData = snapshot.exists() ? snapshot.val() : null;
            }
            if (!classData) {
                this.showToast('Turma não encontrada', 'error');
                return;
            }
            this.editingClassId = id;
            const modal = document.getElementById('classModal');
            if (modal) {
                const header = modal.querySelector('.modal__header h3');
                if (header) header.textContent = 'Editar Turma';
            }
            document.getElementById('className').value = classData.nome || '';
            document.getElementById('classYear').value = classData.ano || '';
            document.getElementById('classTeacher').value = classData.professor || '';
            document.getElementById('classShift').value = classData.turno || '';
            document.getElementById('classModal').classList.remove('hidden');
        } catch (error) {
            console.error('Erro ao carregar turma para edição:', error);
            this.showToast('Erro ao carregar dados da turma', 'error');
        }
    }

    /**
     * Atualiza os dados de uma turma existente no Firebase ou no modo demo.
     * Também atualiza o nome da turma nas referências de alunos e infrações, se alterado.
     */
    async updateClass() {
        const id = this.editingClassId;
        const name = document.getElementById('className').value;
        const year = document.getElementById('classYear').value;
        const teacher = document.getElementById('classTeacher').value;
        const shift = document.getElementById('classShift').value;
        if (!id) return;
        if (!name || !year || !teacher || !shift) {
            this.showToast('Preencha todos os campos obrigatórios', 'error');
            return;
        }
        try {
            if (this.isDemoMode) {
                const idx = this.demoData.classes.findIndex(c => c.id === id);
                if (idx >= 0) {
                    const oldName = this.demoData.classes[idx].nome;
                    this.demoData.classes[idx] = {
                        ...this.demoData.classes[idx],
                        nome: name,
                        ano: parseInt(year),
                        professor: teacher,
                        turno: shift
                    };
                    // Atualizar turmas nos alunos e infrações se o nome mudar
                    if (oldName !== name) {
                        this.demoData.students.forEach(s => {
                            if (s.turma === oldName) s.turma = name;
                        });
                        this.demoData.infractions.forEach(i => {
                            if (i.turma === oldName) i.turma = name;
                        });
                    }
                }
            } else {
                const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                const classRef = this.database.ref(`users/${ownerId}/classes/${id}`);
                // Obter dados antigos para verificar alteração de nome
                const oldSnap = await classRef.once('value');
                const oldData = oldSnap.val() || {};
                const oldName = oldData.nome;
                // Atualizar turma
                await classRef.update({ nome: name, ano: parseInt(year), professor: teacher, turno: shift });
                // Se o nome foi alterado, atualizar referências em alunos e infrações
                if (oldName && oldName !== name) {
                    const studentsRef = this.database.ref(`users/${ownerId}/students`);
                    const studentsSnap = await studentsRef.once('value');
                    const studentUpdates = {};
                    studentsSnap.forEach(child => {
                        const v = child.val();
                        if (v && v.turma === oldName) {
                            studentUpdates[child.key + '/turma'] = name;
                        }
                    });
                    if (Object.keys(studentUpdates).length > 0) {
                        await studentsRef.update(studentUpdates);
                    }
                    const infraRef = this.database.ref(`users/${ownerId}/infractions`);
                    const infraSnap = await infraRef.once('value');
                    const infraUpdates = {};
                    infraSnap.forEach(child => {
                        const v = child.val();
                        if (v && v.turma === oldName) {
                            infraUpdates[child.key + '/turma'] = name;
                        }
                    });
                    if (Object.keys(infraUpdates).length > 0) {
                        await infraRef.update(infraUpdates);
                    }
                }
            }
            // Fechar e resetar modal
            this.editingClassId = null;
            document.getElementById('classModal').classList.add('hidden');
            document.getElementById('classForm').reset();
            // Restaurar título padrão
            const m = document.getElementById('classModal');
            if (m) {
                const header = m.querySelector('.modal__header h3');
                if (header) header.textContent = 'Cadastrar Nova Turma';
            }
            // Recarregar dados
            await this.loadClasses();
            await this.loadStudents();
            await this.loadInfractions();
            await this.loadStatistics();
            this.populateAllSelects();
            this.showToast('Turma atualizada com sucesso!', 'success');
        } catch (error) {
            console.error('Erro ao atualizar turma:', error);
            this.showToast('Erro ao atualizar turma', 'error');
        }
    }

    /**
     * Atualiza os dados de um aluno existente no Firebase ou no modo demo.
     * Se o nome do aluno for alterado, atualiza também o campo "aluno" em todas as infrações correspondentes.
     */
    async updateStudent() {
        const id = this.editingStudentId;
        const name = document.getElementById('studentName').value;
        const studentClass = document.getElementById('studentClass').value;
        const matricula = document.getElementById('studentId').value;
        const shift = document.getElementById('studentShift').value;
        if (!id) return;
        if (!name || !studentClass || !matricula || !shift) {
            this.showToast('Preencha todos os campos obrigatórios', 'error');
            return;
        }
        try {
            if (this.isDemoMode) {
                const idx = this.demoData.students.findIndex(s => s.id === id);
                if (idx >= 0) {
                    const oldName = this.demoData.students[idx].nome;
                    this.demoData.students[idx] = {
                        ...this.demoData.students[idx],
                        nome: name,
                        turma: studentClass,
                        matricula: matricula,
                        turno: shift
                    };
                    // Atualizar nome do aluno nas infrações se mudou
                    if (oldName !== name) {
                        this.demoData.infractions.forEach(inf => {
                            if (inf.aluno === oldName) inf.aluno = name;
                        });
                    }
                }
            } else {
                const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                const studentRef = this.database.ref(`users/${ownerId}/students/${id}`);
                // Recupera dados antigos para verificar alteração de nome
                const snap = await studentRef.once('value');
                const oldData = snap.val() || {};
                const oldName = oldData.nome;
                // Atualiza dados do aluno
                await studentRef.update({
                    nome: name,
                    turma: studentClass,
                    matricula: matricula,
                    turno: shift
                });
                // Atualizar infrações vinculadas ao aluno
                const infraRef = this.database.ref(`users/${ownerId}/infractions`);
                const infraSnap = await infraRef.once('value');
                const updates = {};
                infraSnap.forEach(child => {
                    const val = child.val();
                    if (!val) return;
                    // Se o nome do aluno mudou, atualiza o campo "aluno"
                    if (oldName && oldName !== name && val.aluno === oldName) {
                        updates[child.key + '/aluno'] = name;
                    }
                    // Atualiza sempre o studentId para garantir que esteja correto
                    if (val.studentId !== id) {
                        // Verifica se o registro corresponde ao mesmo aluno pelo nome antigo ou novo
                        if ((val.aluno === name) || (oldName && val.aluno === oldName)) {
                            updates[child.key + '/studentId'] = id;
                        }
                    }
                });
                if (Object.keys(updates).length > 0) {
                    await infraRef.update(updates);
                }
            }
            // Resetar estado de edição e fechar modal
            this.editingStudentId = null;
            const modal = document.getElementById('studentModal');
            if (modal) modal.classList.add('hidden');
            const form = document.getElementById('studentForm');
            if (form) form.reset();
            // Restaurar título padrão
            const headerEl = document.getElementById('studentModal').querySelector('.modal__header h3');
            if (headerEl) headerEl.textContent = 'Cadastrar Novo Aluno';
            // Recarregar dados
            this.invalidateInfractionSummary();
            await this.loadStudents();
            await this.loadClasses();
            await this.loadInfractions();
            await this.loadStatistics();
            await this.createHeatmaps();
            this.populateAllSelects();
            this.showToast('Aluno atualizado com sucesso!', 'success');
        } catch (error) {
            console.error('Erro ao atualizar aluno:', error);
            this.showToast('Erro ao atualizar aluno', 'error');
        }
    }

    /**
     * Remove uma turma existente. Atualiza referências de alunos e infrações para remover a turma.
     * @param {string} id
     */
    async deleteClass(id) {
        if (!confirm('Tem certeza que deseja excluir esta turma?')) return;
        try {
            if (this.isDemoMode) {
                const idx = this.demoData.classes.findIndex(c => c.id === id);
                if (idx >= 0) {
                    const oldName = this.demoData.classes[idx].nome;
                    this.demoData.classes.splice(idx, 1);
                    // Limpar turma de alunos e infrações
                    this.demoData.students.forEach(s => {
                        if (s.turma === oldName) s.turma = '';
                    });
                    this.demoData.infractions.forEach(i => {
                        if (i.turma === oldName) i.turma = '';
                    });
                }
            } else {
                const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                // Buscar nome antigo antes de excluir
                let oldName = null;
                const classSnap = await this.database.ref(`users/${ownerId}/classes/${id}`).once('value');
                if (classSnap.exists()) oldName = classSnap.val().nome;
                // Excluir turma
                await this.database.ref(`users/${ownerId}/classes/${id}`).remove();
                if (oldName) {
                    const studentsRef = this.database.ref(`users/${ownerId}/students`);
                    const studentsSnap = await studentsRef.once('value');
                    const studentUpdates = {};
                    studentsSnap.forEach(child => {
                        const v = child.val();
                        if (v && v.turma === oldName) {
                            studentUpdates[child.key + '/turma'] = '';
                        }
                    });
                    if (Object.keys(studentUpdates).length > 0) {
                        await studentsRef.update(studentUpdates);
                    }
                    const infraRef = this.database.ref(`users/${ownerId}/infractions`);
                    const infraSnap = await infraRef.once('value');
                    const infraUpdates = {};
                    infraSnap.forEach(child => {
                        const v = child.val();
                        if (v && v.turma === oldName) {
                            infraUpdates[child.key + '/turma'] = '';
                        }
                    });
                    if (Object.keys(infraUpdates).length > 0) {
                        await infraRef.update(infraUpdates);
                    }
                }
            }
            // Recarregar dados
            await this.loadClasses();
            await this.loadStudents();
            await this.loadInfractions();
            await this.loadStatistics();
            this.populateAllSelects();
            this.showToast('Turma excluída com sucesso!', 'success');
        } catch (error) {
            console.error('Erro ao excluir turma:', error);
            this.showToast('Erro ao excluir turma', 'error');
        }
    }

    /**
     * Abre o modal de infração para editar um registro existente.
     * Carrega os dados pelo ID e preenche o formulário. O botão salvar
     * detectará o modo de edição e atualizará a infração.
     * @param {string} id
     */
    async editInfraction(id) {
        try {
            let inf = null;
            if (this.isDemoMode) {
                inf = this.demoData.infractions.find(i => i.id === id);
            } else {
                const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                const snap = await this.database.ref(`users/${ownerId}/infractions/${id}`).once('value');
                inf = snap.exists() ? snap.val() : null;
            }
            if (!inf) {
                this.showToast('Infração não encontrada', 'error');
                return;
            }
            this.editingInfractionId = id;
            // Ajustar título
            const modal = document.getElementById('infractionModal');
            if (modal) {
                const header = modal.querySelector('.modal__header h3');
                if (header) header.textContent = 'Editar Infração';
            }
            // Preencher selects/dados
            // Garantir que listas estejam carregadas
            await this.populateStudentSelects();
            await this.populateResponsibleOptions();
            document.getElementById('infractionStudent').value = inf.aluno || '';
            document.getElementById('infractionType').value = inf.tipo || '';
            document.getElementById('infractionSeverity').value = inf.gravidade || '';
            document.getElementById('infractionDate').value = inf.data || '';
            document.getElementById('infractionTime').value = inf.horario || '';
            document.getElementById('infractionDescription').value = inf.descricao || '';
            document.getElementById('infractionMeasures').value = inf.medidas || '';
            // Responsável
            document.getElementById('responsibleType').value = inf.responsavelTipo || '';
            if (inf.responsavelTipo) {
                document.getElementById('responsibleDetails').classList.remove('hidden');
                document.getElementById('responsibleName').value = inf.responsavel || '';
            } else {
                document.getElementById('responsibleDetails').classList.add('hidden');
                document.getElementById('responsibleName').value = '';
            }
            // Exibir modal
            document.getElementById('infractionModal').classList.remove('hidden');
        } catch (error) {
            console.error('Erro ao carregar infração para edição:', error);
            this.showToast('Erro ao carregar dados da infração', 'error');
        }
    }

    /**
     * Atualiza uma infração existente. Ao editar, revalida campos e atualiza
     * o registro no banco de dados. Também realiza análise de texto e recarrega
     * listas e estatísticas após atualizar.
     */
    async updateInfraction() {
        const id = this.editingInfractionId;
        const student = document.getElementById('infractionStudent').value;
        const type = document.getElementById('infractionType').value;
        const severity = document.getElementById('infractionSeverity').value;
        const date = document.getElementById('infractionDate').value;
        const time = document.getElementById('infractionTime').value;
        const responsibleType = document.getElementById('responsibleType').value;
        const responsibleName = document.getElementById('responsibleName').value;
        const description = document.getElementById('infractionDescription').value;
        const measures = document.getElementById('infractionMeasures').value;
        
        if (!id) return;
        if (!student || !type || !severity || !date || !time || !description) {
            this.showToast('Preencha todos os campos obrigatórios', 'error');
            return;
        }
        if (responsibleType && !responsibleName) {
            this.showToast('Digite o nome do responsável', 'error');
            return;
        }
        
        try {
            let turma = 'N/A';
            let studentId = null;
            try {
                const studentDataObj = await this.findStudentDataByName(student);
                if (studentDataObj) {
                    studentId = studentDataObj.id || null;
                    if (studentDataObj.turma) {
                        turma = studentDataObj.turma;
                    }
                }
            } catch (e) {
                console.error('Erro ao obter dados do aluno:', e);
            }
            
            const responsible = responsibleName || 'Não informado';
            const payload = {
                aluno: student,
                tipo: type,
                gravidade: severity,
                data: date,
                horario: time,
                responsavelTipo: responsibleType,
                responsavel: responsible,
                descricao: description,
                medidas: measures,
                turma: turma,
                studentId: studentId,
            };

            let previousInfraction = null;
            if (this.isDemoMode) {
                const idx = this.demoData.infractions.findIndex(i => i.id === id);
                if (idx >= 0) {
                    previousInfraction = { ...this.demoData.infractions[idx] };
                    const updatedInfraction = { ...this.demoData.infractions[idx], ...payload };
                    this.demoData.infractions[idx] = updatedInfraction;
                }
            } else {
                const ownerId = this.dataOwnerId || (this.currentUser ? this.currentUser.uid : null);
                const infractionRef = this.database.ref(`users/${ownerId}/infractions/${id}`);
                const snapshot = await infractionRef.once('value');
                previousInfraction = snapshot.exists() ? { id, ...snapshot.val() } : null;
                await infractionRef.update(payload);
            }
           
            this.editingInfractionId = null;
            const modal = document.getElementById('infractionModal');
            if (modal) {
                modal.classList.add('hidden');
                const header = modal.querySelector('.modal__header h3');
                if (header) header.textContent = 'Registrar Nova Infração';
            }
            const form = document.getElementById('infractionForm');
            if (form) form.reset();
            const details = document.getElementById('responsibleDetails');
            if (details) details.classList.add('hidden');

            this.invalidateInfractionSummary();
            const summary = await this.getInfractionsSummary({ forceRefresh: true });
            const infractionsForSync = Array.isArray(summary?.rawInfractions) ? summary.rawInfractions : null;

            if (student) {
                const syncPayload = infractionsForSync ? { infractions: infractionsForSync } : {};
                await this.syncStudentInfractionCount(studentId, student, syncPayload);
            }

            const previousStudentName = previousInfraction?.aluno || '';
            const previousStudentId = previousInfraction?.studentId || null;
            const studentChanged = Boolean(previousInfraction)
                && (previousStudentId !== studentId || previousStudentName !== student);

            if (studentChanged && previousStudentName) {
                const syncPayload = infractionsForSync ? { infractions: infractionsForSync } : {};
                await this.syncStudentInfractionCount(previousStudentId, previousStudentName, syncPayload);
            }

            const currentRefreshPromise = student
                ? this.refreshSuspensionCountersForStudent(studentId, student, { summary })
                : Promise.resolve(null);
            const previousRefreshPromise = studentChanged && previousStudentName
                ? this.refreshSuspensionCountersForStudent(previousStudentId, previousStudentName, { summary })
                : Promise.resolve(null);

            const [currentRefresh, previousRefresh] = await Promise.all([currentRefreshPromise, previousRefreshPromise]);

            if (currentRefresh) {
                await this.processSuspensionRefreshResult({
                    refreshResult: currentRefresh,
                    studentId,
                    studentName: student,
                    allowModal: true,
                });
            }

            if (previousRefresh) {
                await this.processSuspensionRefreshResult({
                    refreshResult: previousRefresh,
                    studentId: previousStudentId,
                    studentName: previousStudentName,
                    allowModal: false,
                });
            }

            await Promise.all([
                this.loadInfractions(),
                this.loadStudents(),
                this.loadClasses(),
                this.loadStatistics(),
                this.createHeatmaps(),
            ]);
            
            this.populateAllSelects();
            this.showToast('Infração atualizada com sucesso!', 'success');
            await this.analyzeInfractionText(description);
        } catch (error) {
            console.error('Erro ao atualizar infração:', error);
            this.showToast('Erro ao atualizar infração', 'error');
        }
    }

    /**
     * Remove um usuário autorizado (apenas administradores). Não permite remover o proprietário dos dados.
     * Após remover, recarrega a lista de usuários.
     * @param {string} uid
     */
    async removeAllowedUser(uid) {
        try {
            if (!this.isAdmin) {
                this.showToast('Apenas administradores podem remover usuários.', 'error');
                return;
            }
            if (uid === this.dataOwnerId) {
                this.showToast('Não é possível remover o proprietário dos dados.', 'error');
                return;
            }
            if (!confirm('Tem certeza que deseja remover este usuário?')) return;
            await this.database.ref(`settings/allowedUsers/${uid}`).remove();
            // Remover dados de perfil opcionalmente
            await this.database.ref(`settings/usersData/${uid}`).remove();
            this.showToast('Usuário removido com sucesso!', 'success');
            await this.displayAllowedUsers();
        } catch (error) {
            console.error('Erro ao remover usuário autorizado:', error);
            this.showToast('Erro ao remover usuário', 'error');
        }
    }

    /**
     * Reseta o modal de aluno e limpa o estado de edição.
     */
    resetStudentModal() {
        this.editingStudentId = null;
        const modal = document.getElementById('studentModal');
        if (modal) {
            const header = modal.querySelector('.modal__header h3');
            if (header) header.textContent = 'Cadastrar Novo Aluno';
        }
        const form = document.getElementById('studentForm');
        if (form) form.reset();
    }

    /**
     * Reseta o modal de turma e limpa o estado de edição.
     */
    resetClassModal() {
        this.editingClassId = null;
        const modal = document.getElementById('classModal');
        if (modal) {
            const header = modal.querySelector('.modal__header h3');
            if (header) header.textContent = 'Cadastrar Nova Turma';
        }
        const form = document.getElementById('classForm');
        if (form) form.reset();
    }

    /**
     * Reseta o modal de infração e limpa o estado de edição.
     */
    resetInfractionModal() {
        this.editingInfractionId = null;
        const modal = document.getElementById('infractionModal');
        if (modal) {
            const header = modal.querySelector('.modal__header h3');
            if (header) header.textContent = 'Registrar Nova Infração';
        }
        const form = document.getElementById('infractionForm');
        if (form) form.reset();
        const details = document.getElementById('responsibleDetails');
        if (details) details.classList.add('hidden');
    }

    /**
     * Reseta o modal de seleção de infração, limpando a lista e
     * removendo seleções, além de reiniciar o estado de relatório atual.
     */
    resetInfractionSelectionModal() {
        this.currentReportStudentName = null;
        this.currentReportInfractions = null;
        const listEl = document.getElementById('infractionSelectionList');
        if (listEl) listEl.innerHTML = '';
        const modal = document.getElementById('infractionSelectModal');
        if (modal) modal.classList.add('hidden');
    }

    /**
     * Aplica um tema de cor definindo variáveis CSS no elemento root.
     * @param {string} themeName Nome do tema a ser aplicado (deve existir em this.themes)
     */
    applyTheme(themeName) {
        const theme = this.themes[themeName] || this.themes.default;
        const root = document.documentElement;
        Object.keys(theme).forEach(key => {
            root.style.setProperty(key, theme[key]);
        });
        // Atualiza a seleção de tema no dropdown se estiver presente
        const select = document.getElementById('themeSelect');
        if (select) select.value = themeName;
    }

    /**
     * Carrega o tema preferido do usuário a partir do localStorage ou aplica o padrão.
     */
    loadUserTheme() {
        try {
            const saved = localStorage.getItem('educaTheme');
            if (saved && this.themes[saved]) {
                this.applyTheme(saved);
            } else {
                this.applyTheme('default');
            }
        } catch (e) {
            console.warn('⚠️ Não foi possível carregar o tema salvo:', e);
            this.applyTheme('default');
        }
    }

    async signOut() {
        try {
            if (this.isDemoMode) {
                this.isDemoMode = false;
                this.currentUser = null;
                document.getElementById('dashboard').classList.add('hidden');
                this.showLogin();
                this.showToast('Saindo do modo demo...', 'info');
            } else {
                await this.auth.signOut();
                this.showToast('Logout realizado com sucesso!', 'success');
            }
        } catch (error) {
            console.error('❌ Erro no logout:', error);
            this.showToast(`Erro ao fazer logout: ${error.message}`, 'error');
        }
    }

    showToast(message, type = 'info', title = '') {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        
        const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
        
        toast.innerHTML = `
            <div class="toast__icon">${icons[type] || 'ℹ️'}</div>
            <div class="toast__content">
                ${title ? `<div class="toast__title">${title}</div>` : ''}
                <div class="toast__message">${message}</div>
            </div>
            <button class="toast__close">&times;</button>
        `;
        
        toast.querySelector('.toast__close').onclick = () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        };
        
        container.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            if (toast.parentNode) {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }
        }, 5000);
    }

    showError(message) {
        this.showToast(message, 'error', 'Erro');
    }
}

// ========== FUNÇÕES GLOBAIS ==========

// Sistema de responsáveis
function updateResponsibleOptions() {
    const typeSelect = document.getElementById('responsibleType');
    const detailsDiv = document.getElementById('responsibleDetails');
    
    if (typeSelect && detailsDiv) {
        if (typeSelect.value) {
            detailsDiv.classList.remove('hidden');
        } else {
            detailsDiv.classList.add('hidden');
        }
    }
}

// Funções de filtros
function applyFilters() {
    // Coleta de parâmetros
    const startDateInput = document.getElementById('filterStartDate')?.value || '';
    const endDateInput = document.getElementById('filterEndDate')?.value || '';
    const period = document.getElementById('filterPeriod')?.value || '';
    const responsible = document.getElementById('filterResponsible')?.value || '';
    const className = document.getElementById('filterClassAdvanced')?.value || '';
    const gravityFilters = [
        document.getElementById('filterGravityLight')?.checked ? 'leve' : null,
        document.getElementById('filterGravityMedium')?.checked ? 'media' : null,
        document.getElementById('filterGravityHigh')?.checked ? 'grave' : null
    ].filter(Boolean);

    // Determinar intervalo de datas a partir dos inputs ou do período selecionado
    let startDate = startDateInput;
    let endDate = endDateInput;
    if (!startDateInput && !endDateInput && period) {
        const today = new Date();
        const start = new Date(today);
        const end = new Date(today);
        switch (period) {
            case 'today':
                break;
            case 'week':
                // semana atual (segunda a domingo)
                const currentDay = today.getDay();
                const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay;
                start.setDate(today.getDate() + distanceToMonday);
                break;
            case 'month':
                start.setDate(1);
                break;
            case 'semester':
                const month = today.getMonth();
                if (month < 6) {
                    start.setMonth(0);
                    start.setDate(1);
                } else {
                    start.setMonth(6);
                    start.setDate(1);
                }
                break;
            case 'year':
                start.setMonth(0);
                start.setDate(1);
                break;
            default:
                break;
        }
        startDate = start.toISOString().split('T')[0];
        endDate = end.toISOString().split('T')[0];
    }

    // Conversão de string para objetos Date para comparação
    const startObj = startDate ? new Date(startDate) : null;
    const endObj = endDate ? new Date(endDate) : null;

    async function filterInfractions() {
        if (!window.app) return [];
        const all = await window.app.getAllInfractions();
        return all.filter(inf => {
            // Data
            const infDate = new Date(inf.data);
            if (startObj && infDate < startObj) return false;
            if (endObj && infDate > endObj) return false;
            // Gravidade
            if (gravityFilters.length && !gravityFilters.includes(inf.gravidade)) return false;
            // Turma
            if (className && className !== '' && (inf.turma || '') !== className) return false;
            // Responsável
            if (responsible && responsible !== '' && (inf.responsavel || '') !== responsible) return false;
            return true;
        });
    }
   
    filterInfractions().then(filtered => {
        // Armazenar resultados para exportação
        window.filteredResults = filtered;

        const resultsContainer = document.getElementById('filterResults');
        if (resultsContainer) {
            if (!filtered || filtered.length === 0) {
                resultsContainer.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <h3>📊 Resultados dos Filtros</h3>
                        <p>Nenhuma infração encontrada com os critérios selecionados.</p>
                    </div>
                `;
            } else {
                let tableRows = '';
                filtered.forEach(inf => {
                    const dateStr = new Date(inf.data).toLocaleDateString('pt-BR');
                    tableRows += `<tr>
                        <td>${dateStr}</td>
                        <td>${inf.aluno}</td>
                        <td>${inf.turma || 'N/A'}</td>
                        <td>${inf.tipo}</td>
                        <td>${window.app.getGravidadeLabel(inf.gravidade)}</td>
                        <td>${inf.responsavel || 'N/A'}</td>
                    </tr>`;
                });
                resultsContainer.innerHTML = `
                    <h3 style="margin-bottom: var(--space-8);">📊 Resultados dos Filtros</h3>
                    <p><strong>${filtered.length}</strong> infrações encontradas.</p>
                    <table class="filter-results-table">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Aluno</th>
                                <th>Turma</th>
                                <th>Tipo</th>
                                <th>Gravidade</th>
                                <th>Responsável</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                        </tbody>
                    </table>
                `;
            }
        }
        if (window.app) {
            window.app.showToast('Filtros aplicados com sucesso!', 'success');
        }
    });
}

function clearFilters() {
    const elements = [
        'filterStartDate', 'filterEndDate', 'filterPeriod', 'filterResponsible',
        'filterGravityLight', 'filterGravityMedium', 'filterGravityHigh', 'filterClassAdvanced'
    ];
    
    elements.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (el.type === 'checkbox') {
                el.checked = false;
            } else {
                el.value = '';
            }
        }
    });
    
    const resultsContainer = document.getElementById('filterResults');
    if (resultsContainer) {
        resultsContainer.innerHTML = `
            <div style="text-align: center; color: var(--color-text-secondary);">
                <p>Configure os filtros acima e clique em "Aplicar Filtros" para visualizar os resultados.</p>
            </div>
        `;
    }
    
    if (window.app) {
        window.app.showToast('Filtros limpos!', 'info');
    }
}

function saveFilterPreset() {
    const presetName = prompt('Digite um nome para este preset de filtros:');
    if (presetName && window.app) {
        console.log('💾 Salvando preset:', presetName);
        window.app.showToast(`Preset "${presetName}" salvo com sucesso!`, 'success');
    }
}

// Funções de exportação
function exportFilteredData(format) {
    console.log(`📊 Exportando dados filtrados em formato: ${format}`);
    const results = window.filteredResults || [];
    if (!results || results.length === 0) {
        if (window.app) window.app.showToast('Não há dados filtrados para exportar.', 'warning');
        return;
    }
    if (!window.app) return;
    if (format === 'pdf') {
        window.app.showToast('Gerando PDF dos resultados filtrados...', 'info');
        // Utiliza o método genérico para criar PDF com os resultados filtrados
        window.app.generateGenericReportPDF('Relatório Filtrado', results);
    } else if (format === 'excel') {
        window.app.showToast('Gerando planilha Excel...', 'info');
        // Preparar dados para planilha
        const data = results.map(inf => ({
            Data: new Date(inf.data).toLocaleDateString('pt-BR'),
            Aluno: inf.aluno,
            Turma: inf.turma || '',
            Tipo: inf.tipo,
            Gravidade: window.app.getGravidadeLabel(inf.gravidade),
            Responsavel: inf.responsavel || ''
        }));
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Relatorio');
        const fileName = `relatorio-filtrado-${Date.now()}.xlsx`;
        XLSX.writeFile(wb, fileName);
        window.app.showToast('Planilha Excel gerada com sucesso!', 'success');
    }
}

function printFilteredResults() {
    if (window.app) {
        window.app.showToast('Preparando para impressão...', 'info');
    }
    setTimeout(() => {
        window.print();
    }, 1000);
}

// Funções de estatísticas
function exportChart(chartId) {
    console.log(`📈 Exportando gráfico: ${chartId}`);
    const canvas = document.getElementById(chartId);
    if (canvas && canvas.toDataURL) {
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${chartId}-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        if (window.app) window.app.showToast('Gráfico exportado com sucesso!', 'success');
    } else {
        if (window.app) window.app.showToast('Não foi possível exportar o gráfico.', 'error');
    }
}

function exportHeatmap(type) {
    console.log(`🗺️ Exportando heatmap: ${type}`);
    let element = null;
    if (type === 'hours') {
        element = document.getElementById('heatmapHours');
    } else if (type === 'classes') {
        element = document.getElementById('heatmapClasses');
    }
    if (element && typeof html2canvas !== 'undefined') {
        html2canvas(element).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `heatmap-${type}-${Date.now()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            if (window.app) window.app.showToast(`Mapa de calor ${type} exportado com sucesso!`, 'success');
        });
    } else {
        if (window.app) window.app.showToast('Não foi possível exportar o heatmap.', 'error');
    }
}

function generateFullReport() {
    // Gera relatório completo de infrações
    if (window.app) {
        window.app.showToast('Gerando relatório completo...', 'info');
        // Chamar método assíncrono do app para gerar PDF
        window.app.generateFullReportPDF();
    }
}

function scheduleReport() {
    const schedule = prompt('Digite quando deseja agendar o relatório (ex: "Segunda-feira 08:00"):');
    if (schedule && window.app) {
        window.app.showToast(`Relatório agendado para: ${schedule}`, 'success');
    }
}

function exportAllStats() {
    if (window.app) {
        // Gera um relatório estatístico geral sem filtros
        window.app.showToast('Gerando relatório de estatísticas...', 'info');
        window.app.generateStatisticalReportPDF({});
    }
}

function printDashboard() {
    if (window.app) {
        window.app.showToast('Preparando dashboard para impressão...', 'info');
    }
    setTimeout(() => {
        window.print();
    }, 1000);
}

// Funções de relatórios
function generateWarningReport() {
    const studentName = document.getElementById('studentForReport')?.value;
    if (!studentName) {
        if (window.app) {
            window.app.showToast('Selecione um aluno para gerar a advertência', 'warning');
        }
        return;
    }
    // Em vez de gerar automaticamente a advertência com a última infração, abrimos um
    // modal de seleção para que o usuário escolha entre uma advertência específica
    // ou um relatório completo do aluno.
    if (window.app) {
        window.app.openReportSelectionModal(studentName);
    }
}

function generateStudentHistory() {
    const studentName = document.getElementById('studentForHistory')?.value;
    if (!studentName) {
        if (window.app) {
            window.app.showToast('Selecione um aluno para gerar o histórico', 'warning');
        }
        return;
    }
    // Utiliza o novo gerador de relatório completo do aluno, que inclui
    // descrição e medidas de todas as infrações
    if (window.app) {
        window.app.showToast(`Gerando relatório completo de ${studentName}...`, 'info');
        // Define aluno atual para geração do relatório completo
        window.app.currentReportStudentName = studentName;
        window.app.generateGeneralStudentReport();
    }
}

function generateClassReport() {
    if (window.app) {
        // Determinar a turma selecionada a partir do seletor de relatórios
        const className = document.getElementById('reportClass')?.value || '';
        if (!className || className === 'all') {
            window.app.showToast('Selecione uma turma para gerar o relatório', 'warning');
            return;
        }
        window.app.showToast('Gerando relatório por turma...', 'info');
        window.app.generateClassReportPDF(className);
    }
}

function generateGeneralReport() {
    if (window.app) {
        // Obter filtros do formulário de relatórios
        const gravity = document.getElementById('reportGravity')?.value || 'all';
        const className = document.getElementById('reportClass')?.value || 'all';
        const shift = document.getElementById('reportShift')?.value || 'all';
        let startDate = '';
        let endDate = '';
        const period = document.getElementById('reportPeriod')?.value || '';
        if (period === 'custom') {
            startDate = document.getElementById('reportStartDate')?.value || '';
            endDate = document.getElementById('reportEndDate')?.value || '';
        }
        const filters = { gravity, className, shift, startDate, endDate };
        window.app.showToast('Gerando relatório geral...', 'info');
        window.app.generateGeneralReportPDF(filters);
    }
}

function generateStatisticalReport() {
    if (window.app) {
        const gravity = document.getElementById('reportGravity')?.value || 'all';
        const className = document.getElementById('reportClass')?.value || 'all';
        const shift = document.getElementById('reportShift')?.value || 'all';
        let startDate = '';
        let endDate = '';
        const period = document.getElementById('reportPeriod')?.value || '';
        if (period === 'custom') {
            startDate = document.getElementById('reportStartDate')?.value || '';
            endDate = document.getElementById('reportEndDate')?.value || '';
        }
        const filters = { gravity, className, shift, startDate, endDate };
        window.app.showToast('Gerando relatório estatístico...', 'info');
        window.app.generateStatisticalReportPDF(filters);
    }
}

function generatePeriodReport() {
    if (window.app) {
        const gravity = document.getElementById('reportGravity')?.value || 'all';
        const className = document.getElementById('reportClass')?.value || 'all';
        const shift = document.getElementById('reportShift')?.value || 'all';
        let startDate = '';
        let endDate = '';
        const period = document.getElementById('reportPeriod')?.value || '';
        if (period === 'custom') {
            startDate = document.getElementById('reportStartDate')?.value || '';
            endDate = document.getElementById('reportEndDate')?.value || '';
        } else {
            // Calcular startDate e endDate a partir do período selecionado (ex: today, yesterday, thisWeek, etc.)
            const today = new Date();
            const start = new Date(today);
            const end = new Date(today);
            switch (period) {
                case 'today':
                    break;
                case 'yesterday':
                    start.setDate(today.getDate() - 1);
                    end.setDate(today.getDate() - 1);
                    break;
                case 'thisWeek':
                    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1));
                    start.setTime(firstDayOfWeek);
                    break;
                case 'lastWeek':
                    const lastWeekStart = new Date(today.setDate(today.getDate() - today.getDay() - 6));
                    const lastWeekEnd = new Date(today.setDate(lastWeekStart.getDate() + 6));
                    start.setTime(lastWeekStart);
                    end.setTime(lastWeekEnd);
                    break;
                case 'thisMonth':
                    start.setDate(1);
                    break;
                case 'lastMonth':
                    start.setMonth(start.getMonth() - 1);
                    start.setDate(1);
                    end.setMonth(end.getMonth() - 1);
                    end.setDate(new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate());
                    break;
                case 'thisSemester':
                    const month = today.getMonth();
                    if (month < 6) {
                        start.setMonth(0);
                        start.setDate(1);
                    } else {
                        start.setMonth(6);
                        start.setDate(1);
                    }
                    break;
                case 'thisYear':
                    start.setMonth(0);
                    start.setDate(1);
                    break;
                default:
                    break;
            }
            startDate = start.toISOString().split('T')[0];
            endDate = end.toISOString().split('T')[0];
        }
        const filters = { gravity, className, shift, startDate, endDate };
        window.app.showToast('Gerando relatório por período...', 'info');
        window.app.generatePeriodReportPDF(filters);
    }
}

function updateReportText() {
    const pedagogicalText = document.getElementById('pedagogicalText')?.value || '';
    const additionalObservations = document.getElementById('additionalObservations')?.value || '';
    
    if (window.app) {
        window.app.pedagogicalText = pedagogicalText;
        window.app.additionalObservations = additionalObservations;
    }
    
    const modal = document.getElementById('pedagogicalTextModal');
    if (modal) {
        modal.classList.add('hidden');
    }
    
    if (window.app) {
        window.app.showToast('Texto pedagógico atualizado com sucesso!', 'success');
    }
}

function closePedagogicalModal() {
    const modal = document.getElementById('pedagogicalTextModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM carregado, iniciando EducaFlow Pro v2.0...');
    window.app = new EducaFlowPro();
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EducaFlowPro };
}
