import { useEffect } from 'react';
import { useLanguage } from '../../components/language-selector/language-hook';
import Header from '../../components/header';
import { useSearchParams } from 'react-router-dom';
import Main from '../../components/main';
import * as copy from '../../copy/news.json';
import NewsCard from '../../components/newsCard';
import Markdown from '../../components/markdown';
import imageMap from '../../utils/imageMap';

import styles from './index.module.scss';

const News = () => {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const newsId = searchParams.get('id');
  let newsIndex = copy[language].findIndex(news => news.newsId == newsId);
  const hasNews = newsIndex >= 0;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [newsId]);

  return (
    <Main className={styles.main}>
      <Header
        title={hasNews ? copy[language][newsIndex].title : 'news'}
        override={newsId}
      />
      {hasNews ? (
        <div>
          <img
            src={imageMap[copy[language][newsIndex].imageId]}
            className={styles.image}
          />
          <Markdown content={copy[language][newsIndex].text} />
        </div>
      ) : (
        <div className={styles.grid}>
          {copy[language].map(news => {
            return <NewsCard {...news} key={news.newsId} imageMap={imageMap} />;
          })}
        </div>
      )}
    </Main>
  );
};

export default News;
