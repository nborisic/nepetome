import { useEffect, useState } from 'react';
import { useLanguage } from '../../components/language-selector/language-hook';
import Header from '../../components/header';
import cx from 'classnames';
import { useSearchParams } from 'react-router-dom';
import Main from '../../components/main';
import { ReactComponent as Chevron } from '../../assets/icons/chevron.svg';
import * as copy from '../../copy/news.json';
import NewsCard from '../../components/newsCard';
import Markdown from '../../components/markdown';
import imageMap from '../../utils/imageMap';
import pdfMap from '../../utils/pdfMap';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import styles from './index.module.scss';

const News = () => {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const newsId = searchParams.get('id');
  let newsIndex = copy[language].findIndex(news => news.newsId == newsId);
  const hasNews = newsIndex >= 0;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [newsId, pageNumber]);

  const buttonPrevClassNames = cx(styles.button, {
    [styles.disabled]: pageNumber <= 1,
  });

  const buttonNextClassNames = cx(styles.button, {
    [styles.disabled]: pageNumber >= numPages,
  });

  const hideImage = hasNews && copy[language][newsIndex].hideImage;

  return (
    <Main className={styles.main}>
      <Header
        title={hasNews ? copy[language][newsIndex].title : 'news'}
        override={newsId}
      />
      {hasNews ? (
        <div>
          {imageMap[copy[language][newsIndex].imageId] && !hideImage && (
            <img
              src={imageMap[copy[language][newsIndex].imageId]}
              className={styles.image}
            />
          )}
          <Markdown content={copy[language][newsIndex].text} />
          <div className={styles.canvasWrapper}>
            <Document
              file={pdfMap[copy[language][newsIndex].pdfId]}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={buttonPrevClassNames}
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              <Chevron />
            </button>
            <button
              className={buttonNextClassNames}
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              <Chevron />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.grid}>
          {[...copy[language]].reverse().map(news => {
            return <NewsCard {...news} key={news.newsId} imageMap={imageMap} />;
          })}
        </div>
      )}
    </Main>
  );
};

export default News;
