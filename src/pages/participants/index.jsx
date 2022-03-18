import { useLanguage } from '../../components/language-selector/language-hook';
import cx from 'classnames';
import Header from '../../components/header';
import Main from '../../components/main';
import { Link } from 'react-router-dom';
import * as copy from '../../copy/participants.json';
import * as bio from '../../copy/bio.json';
import p0 from '../../assets/images/participents/0.jpg';
import p1 from '../../assets/images/participents/1.jpg';
import p2 from '../../assets/images/participents/2.jpg';
import p3 from '../../assets/images/participents/3.jpg';
import p4 from '../../assets/images/participents/4.jpg';
import p5 from '../../assets/images/participents/5.jpg';
import p6 from '../../assets/images/participents/6.png';
import p7 from '../../assets/images/participents/7.jpg';
import p8 from '../../assets/images/participents/8.jpg';
import p9 from '../../assets/images/participents/9.jpg';
import p10 from '../../assets/images/participents/10.jpg';
import p11 from '../../assets/images/participents/11.png';
import p12 from '../../assets/images/participents/12.jpg';

import styles from './index.module.scss';

export const bioMap = {
  0: p0,
  1: p1,
  2: p2,
  3: p3,
  4: p4,
  5: p5,
  6: p6,
  7: p7,
  8: p8,
  9: p9,
  10: p10,
  11: p11,
  12: p12,
};

const Participants = () => {
  const { language } = useLanguage();

  return (
    <Main className={styles.main}>
      <Header title="participants" />
      <div className={styles.bioOuterWrapper}>
        <Link className={styles.bioWrapper} to={`/bio?id=0`}>
          <div className={styles.bioContent}>
            <img src={bioMap[0]} alt="" className={styles.bioImage} />
            <div className={cx(styles.bioName, styles.pi)}>
              {`${copy[language].phdTitle} ${bio[language].teamMembers[0].name},`}
              <div>{copy[language].pi}</div>
            </div>
          </div>
        </Link>
        <div className={styles.bioInnerWrapper}>
          {bio[language].teamMembers.slice(1).map(member => {
            return (
              <Link
                className={styles.bioWrapper}
                to={`/bio?id=${member.id}`}
                key={member.id}
              >
                <div className={styles.bioContent}>
                  <img
                    src={bioMap[member.id]}
                    alt=""
                    className={styles.bioImage}
                  />
                  <div
                    className={styles.bioName}
                  >{`${copy[language].phdTitle} ${member.name}`}</div>
                </div>
              </Link>
            );
          })}
          <div className={styles.bioWrapper}>
            <img src={bioMap[12]} alt="" className={styles.bioImage} />
            <div
              className={styles.bioName}
            >{`Luka Petrović, ${copy[language].studentTitle}`}</div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Participants;
