import { useState, useEffect, createContext } from 'react';

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  useEffect(() => {
    const hasPresetLanguage = localStorage.getItem('nepetome-lang');
    if (hasPresetLanguage) {
      setLanguage(hasPresetLanguage);
    }
  }, []);

  const [language, setLanguage] = useState('srb');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
