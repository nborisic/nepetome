import Divider from '../divider';
import cx from 'classnames';
import styles from './index.module.scss';
import imagePathEN from '../../assets/images/science-eng.png';
import imagePathSR from '../../assets/images/science-srb.png';

const Sponsors = () => {
  const language = 'srb';

  const imagesMap = {
    srb: imagePathSR,
    eng: imagePathEN,
  };

  const linkMap = {
    science: {
      srb: 'http://fondzanauku.gov.rs/',
      eng: 'http://fondzanauku.gov.rs/?lang=en',
    },
    ibiss: {
      srb: 'https://www.ibiss.bg.ac.rs/index.php/sr-yu/',
      eng: 'https://www.ibiss.bg.ac.rs/index.php/en/',
    },
  };
  console.log();
  return (
    <>
      <Divider />
      <div className={styles.sponsorWrapper}>
        <a
          href={linkMap.science[language]}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cx(styles.sponsors, styles.seanceFond)}
            src={imagesMap[language]}
          />
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
