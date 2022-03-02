import { useLanguage } from '../../components/language-selector/language-hook';
import Header from '../../components/header';
import Main from '../../components/main';

import styles from './index.module.scss';

const AboutProject = () => {
  const { language } = useLanguage();

  return (
    <Main className={styles.main}>
      <Header title="about-project" />
    </Main>
  );
};

export default AboutProject;
