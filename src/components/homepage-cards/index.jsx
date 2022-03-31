import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const HomepageCards = ({ title, children, linkHref, linkText }) => {
  const isText = typeof children === 'string';

  return (
    <div className={styles.wrapper}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.textWrapper}>
        {isText ? (
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: children,
            }}
          />
        ) : (
          children
        )}
        <Link to={linkHref} className={styles.link}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default HomepageCards;
