import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const HomepageCards = ({ title, children, linkHref, linkText }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.textWrapper}>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: children,
          }}
        />
        <Link to={linkHref} className={styles.link}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default HomepageCards;
