import Divider from '../divider';
import { useRef, useEffect } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';
import imagePathEN from '../../assets/images/science-eng.png';
import imagePathSR from '../../assets/images/science-srb.png';
import ministry from '../../assets/images/ministry.png';
import { useLanguage } from '../../components/language-selector/language-hook';

const Sponsors = () => {
  const { language } = useLanguage();
  const sponsorsRef = useRef(null);

  const imagesMap = {
    srb: imagePathSR,
    en: imagePathEN,
  };

  const linkMap = {
    science: {
      srb: 'http://fondzanauku.gov.rs/',
      en: 'http://fondzanauku.gov.rs/?lang=en',
    },
    ibiss: {
      srb: 'https://www.ibiss.bg.ac.rs/index.php/sr-yu/',
      en: 'https://www.ibiss.bg.ac.rs/index.php/en/',
    },
    ministry: {
      srb: 'https://mpn.gov.rs/',
      en: 'https://mpn.gov.rs/',
    },
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(styles.fadeIn);
      }
    });
  };

  useEffect(() => {
    const options = { root: null, rootMargin: '-120px', threshold: 0 };
    const myObserver = new IntersectionObserver(callback, options);

    myObserver.observe(sponsorsRef.current);
  }, []);

  return (
    <>
      <Divider />
      <div className={styles.sponsorWrapper} ref={sponsorsRef}>
        <a
          href={linkMap.science[language]}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx(styles.sponsors, styles.scienceFond)}
            src={imagesMap[language]}
          />
        </a>
        <a
          href={linkMap.ministry[language]}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.sponsors} src={ministry} />
        </a>
        <a
          href={linkMap.ibiss[language]}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.sponsors}
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.opasuljise.rs/wp-content/uploads/2020/10/Ibiss_LOGO_web.png"
          />
        </a>
      </div>
    </>
  );
};

export default Sponsors;
