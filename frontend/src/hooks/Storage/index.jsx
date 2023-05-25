import { useState } from 'react';

// Enum defining different storage types: local (persistent) or memory (react state)
const STORAGE = {
  PERSISTENT: Symbol('persistent'),
  MEMORY: Symbol('memory'),
};

const useStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue, storageType) => {
    if (storageType === STORAGE.PERSISTENT) {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    }
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};

export { STORAGE, useStorage };
