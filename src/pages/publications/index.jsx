import { useLanguage } from '../../components/language-selector/language-hook';
import Header from '../../components/header';
import Main from '../../components/main';
import * as copy from '../../copy/publications.json';

import styles from './index.module.scss';

const Publications = () => {
  const { language } = useLanguage();
  console.log(copy[language]);
  return (
    <Main className={styles.main}>
      <Header title={copy[language].title} override />
    </Main>
  );
};

export default Publications;
