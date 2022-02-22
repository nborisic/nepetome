import * as copy from '../../copy/home.json';
import styles from './index.module.scss';

const Homepage = () => {
  const language = 'srb';

  return (
    <div className={styles.homepage}>
      <div className={styles.title}>{copy[language].title}</div>
    </div>
  );
};

export default Homepage;
