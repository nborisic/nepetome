import srFlag from '../../assets/icons/sr-flag.gif';
import enFlag from '../../assets/icons/en-flag.gif';
import { useLanguage } from './language-hook';

import styles from './index.module.scss';

const LanguageSelector = () => {
  const { setLanguage } = useLanguage();

  const setLanguageAction = language => {
    setLanguage(language);
    localStorage.setItem('nepetome-lang', language);
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={() => setLanguageAction('srb')}>
        <img src={srFlag} alt="team" className={styles.image} />
      </button>
      <button type="button" onClick={() => setLanguageAction('en')}>
        <img src={enFlag} alt="team" className={styles.image} />
      </button>
    </div>
  );
};

export default LanguageSelector;
