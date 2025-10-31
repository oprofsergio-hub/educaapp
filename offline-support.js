(function (global) {
  const storageAvailable = () => {
    try {
      if (typeof window === 'undefined' || !('localStorage' in window)) {
        return false;
      }
      const testKey = '__educaflow_test__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      console.warn('⚠️ Armazenamento local indisponível:', error);
      return false;
    }
  };

  class EducaFlowOfflineDatabase {
    constructor(options = {}) {
      this.storageKey = options.storageKey || 'educaflow.offline.v1';
      this._storageEnabled = storageAvailable();
    }

    getEmptyData() {
      return {
        students: [],
        classes: [],
        infractions: [],
        suspensionTrackers: {},
        suspensions: [],
        settings: {}
      };
    }

    normalize(data = {}) {
      const base = this.getEmptyData();
      return {
        ...base,
        ...data,
        students: Array.isArray(data.students) ? data.students : base.students,
        classes: Array.isArray(data.classes) ? data.classes : base.classes,
        infractions: Array.isArray(data.infractions) ? data.infractions : base.infractions,
        suspensionTrackers: typeof data.suspensionTrackers === 'object' && data.suspensionTrackers !== null
          ? data.suspensionTrackers
          : base.suspensionTrackers,
        suspensions: Array.isArray(data.suspensions) ? data.suspensions : base.suspensions,
        settings: typeof data.settings === 'object' && data.settings !== null ? data.settings : base.settings
      };
    }

    load() {
      if (!this._storageEnabled) {
        return null;
      }
      try {
        const raw = window.localStorage.getItem(this.storageKey);
        if (!raw) {
          return null;
        }
        const parsed = JSON.parse(raw);
        return this.normalize(parsed);
      } catch (error) {
        console.warn('⚠️ Não foi possível carregar dados offline:', error);
        return null;
      }
    }

    save(data) {
      if (!this._storageEnabled) {
        return false;
      }
      try {
        const normalized = this.normalize(data);
        window.localStorage.setItem(this.storageKey, JSON.stringify(normalized));
        return true;
      } catch (error) {
        console.warn('⚠️ Não foi possível salvar dados offline:', error);
        return false;
      }
    }

    clear() {
      if (!this._storageEnabled) {
        return false;
      }
      try {
        window.localStorage.removeItem(this.storageKey);
        return true;
      } catch (error) {
        console.warn('⚠️ Não foi possível limpar dados offline:', error);
        return false;
      }
    }
  }

  class EducaFlowLicenseManager {
    constructor(options = {}) {
      this.storageKey = options.storageKey || 'educaflow.license.v1';
      this.defaultEdition = options.defaultEdition || 'free';
      this._storageEnabled = storageAvailable();
      this.state = {
        edition: this.defaultEdition,
        activatedAt: null,
        purchaser: null
      };
      this.load();
    }

    load() {
      if (!this._storageEnabled) {
        return this.state;
      }
      try {
        const raw = window.localStorage.getItem(this.storageKey);
        if (!raw) {
          return this.state;
        }
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          this.state = {
            ...this.state,
            ...parsed,
            edition: parsed.edition || this.state.edition
          };
        }
      } catch (error) {
        console.warn('⚠️ Não foi possível carregar licença offline:', error);
      }
      return this.state;
    }

    save() {
      if (!this._storageEnabled) {
        return false;
      }
      try {
        window.localStorage.setItem(this.storageKey, JSON.stringify(this.state));
        return true;
      } catch (error) {
        console.warn('⚠️ Não foi possível salvar licença offline:', error);
        return false;
      }
    }

    reload() {
      return this.load();
    }

    getState() {
      return { ...this.state };
    }

    getEdition() {
      return this.state.edition || this.defaultEdition;
    }

    isPro() {
      return this.getEdition() === 'pro';
    }

    isFree() {
      return !this.isPro();
    }

    getLimits() {
      if (this.isPro()) {
        return { students: null, classes: null };
      }
      return { students: 10, classes: 3 };
    }

    canAddStudents(currentCount) {
      const limit = this.getLimits().students;
      return limit === null || currentCount < limit;
    }

    canAddClasses(currentCount) {
      const limit = this.getLimits().classes;
      return limit === null || currentCount < limit;
    }

    activatePro(details = {}) {
      this.state = {
        ...this.state,
        edition: 'pro',
        activatedAt: Date.now(),
        purchaser: details.purchaser || 'in-app-purchase'
      };
      this.save();
      return this.state;
    }

    downgrade() {
      this.state = {
        edition: 'free',
        activatedAt: null,
        purchaser: null
      };
      this.save();
      return this.state;
    }
  }

  global.EducaFlowOfflineDatabase = EducaFlowOfflineDatabase;
  global.EducaFlowLicenseManager = EducaFlowLicenseManager;
})(typeof window !== 'undefined' ? window : globalThis);
