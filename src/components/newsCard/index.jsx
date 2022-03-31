import * as news from '../../copy/news.json';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const NewsCard = ({ imageId, newsId, title, date, imageMap }) => {
  return (
    <div>
      <Link to={`/news?id=${newsId}`} className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={imageMap[imageId]} className={styles.image} />
        </div>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
        <div className={styles.date}>{date}</div>
      </Link>
    </div>
  );
};

export default NewsCard;
