import { ReactComponent as ContactMedia } from '../../assets/icons/contact-media.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook-icon.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram-icon.svg';
import { ReactComponent as Location } from '../../assets/icons/location-icon.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter-icon.svg';
import { ReactComponent as Email } from '../../assets/icons/email-icon.svg';
import Container from '../container';
import { useLanguage } from '../../components/language-selector/language-hook';
import * as footerCopy from '../../copy/footer.json';

import styles from './index.module.scss';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.socialTextWrapper}>
              <ContactMedia className={styles.icon} />
              <span>{footerCopy[language].social}</span>
            </div>
            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/Nepetome-101793545754884"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <Facebook className={styles.icon} />
              </a>
              <a
                href="https://instagram.com/_nepetome_?utm_medium=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <Instagram className={styles.icon} />
              </a>
              <a
                href="https://twitter.com/nepetome"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <Twitter className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.innerWrapper}>
            <div className={styles.socialTextWrapper}>
              <Email className={styles.icon} />
              <span>{footerCopy[language].contact}</span>
            </div>
            <div className={styles.contactWrapper}>
              <span>
                {footerCopy[language].email}:{' '}
                <a
                  href="mailto:nepetome@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                >
                  nepetome@gmail.com
                </a>
              </span>
            </div>
          </div>

          <div className={styles.innerWrapper}>
            <div className={styles.socialTextWrapper}>
              <Location className={styles.icon} />
              <span>{footerCopy[language].location}</span>
            </div>
            <div className={styles.contactWrapper}>
              <a
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/Institute+for+Biological+Research+%22Sini%C5%A1a+Stankovi%C4%87%22+-+National+Institute+of+Republic+of+Serbia,+University+of+Belgrade/@44.8169872,20.4847612,17z/data=!3m1!4b1!4m5!3m4!1s0x475a7a950e2ae945:0x1f43ec5bc9d11d4f!8m2!3d44.8169872!4d20.4869499"
              >
                {footerCopy[language].institute}
                <div>Bulevar Despota Stefana 142</div>
                <div>{footerCopy[language].city}</div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
