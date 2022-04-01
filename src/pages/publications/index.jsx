import { useLanguage } from '../../components/language-selector/language-hook';
import Header from '../../components/header';
import Main from '../../components/main';
import copy from '../../copy/publications.json';

import styles from './index.module.scss';

const Publications = () => {
  const { language } = useLanguage();
  const { list } = copy;

  return (
    <Main className={styles.main}>
      <Header title={copy[language].title} override />
      <div className={styles.subtitle}>{copy[language].subtitle}</div>
      <ul>
        {list.map(publication => {
          return (
            <a
              href={publication.link}
              key={publication.link}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li
                dangerouslySetInnerHTML={{
                  __html: publication.text,
                }}
              />
            </a>
          );
        })}
      </ul>
    </Main>
  );
};

export default Publications;
