import { useLanguage } from '../../components/language-selector/language-hook';
import Main from '../../components/main';

import styles from './index.module.scss';

const labelMap = {
  srb: {
    title: 'Nešto je pošlo po zlu! :(',
    string1: 'Probajte da ponovo učitate stranicu?',
  },
  en: {
    title: 'Something went wrong! :(',
    string1: 'Why don’t you reload the page and try again?',
  },
};

const ErrorHandler = () => {
  const { language } = useLanguage();

  return (
    <div className={styles.errorHandler}>
      <Main>
        <h1 className={styles.errorHandlerTitle}>{labelMap[language].title}</h1>
        <div className={styles.ErrorHandlerText}>
          {labelMap[language].string1}
        </div>
      </Main>
    </div>
  );
};

export default ErrorHandler;
