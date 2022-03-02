import { LanguageContext } from './index.context';
import { useContext } from 'react';

export const useLanguage = () => useContext(LanguageContext);
