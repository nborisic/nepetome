import { useRef, useEffect } from 'react';
import { useLanguage } from '../../components/language-selector/language-hook';
import Header from '../../components/header';
import Main from '../../components/main';
import arrowEn from '../../assets/images/arrow-en.png';
import implementationEn from '../../assets/images/implementation-eng.jpg';
import impactEn from '../../assets/images/impact-en.png';
import objectiveEn from '../../assets/images/objectives-en.png';
import arrowSrb from '../../assets/images/arrow-srb.png';
import implementationSrb from '../../assets/images/implementation-srb.jpg';
import impactSrb from '../../assets/images/impact-srb.png';
import objectiveSrb from '../../assets/images/objectives-srb.png';

import * as copy from '../../copy/about-project.json';

import styles from './index.module.scss';

const AboutProject = () => {
  const { language } = useLanguage();
  const activitiesRef = useRef(null);
  const implementationRef = useRef(null);
  const impactRef = useRef(null);

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('entry', entry);
        entry.target.classList.add(styles.fadeIn);
      }
    });
  };

  useEffect(() => {
    const options = { root: null, rootMargin: '-120px', threshold: 0 };
    const myObserver = new IntersectionObserver(callback, options);

    myObserver.observe(implementationRef.current);
    myObserver.observe(activitiesRef.current);
    myObserver.observe(impactRef.current);
  }, []);

  const imageMap = {
    srb: {
      arrow: arrowSrb,
      implementation: implementationSrb,
      impact: impactSrb,
      objective: objectiveSrb,
    },
    en: {
      arrow: arrowEn,
      implementation: implementationEn,
      impact: impactEn,
      objective: objectiveEn,
    },
  };

  return (
    <Main className={styles.main}>
      <Header title="about-project" />
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{
          __html: copy[language].text,
        }}
      />
      <div className={styles.imageWrapper}>
        <img src={imageMap[language].arrow} alt="" className={styles.img}></img>
      </div>
      <div className={styles.subtitle} ref={activitiesRef}>
        {copy[language].objective.title}
      </div>
      <div
        className={styles.intro}
        dangerouslySetInnerHTML={{
          __html: copy[language].objective.intro,
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: copy[language].objective.text,
        }}
      />
      <div>
        {copy[language].objective.list.map(item => {
          return (
            <div
              className={styles.list}
              dangerouslySetInnerHTML={{
                __html: item,
              }}
            />
          );
        })}
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={imageMap[language].objective}
          alt=""
          className={styles.img}
        ></img>
      </div>

      <div className={styles.subtitle} ref={implementationRef}>
        {copy[language].activities.name}
      </div>
      <div className={styles.header}>{copy[language].activities.title}</div>
      <div className={styles.imageWrapper}>
        <img
          src={imageMap[language].implementation}
          alt=""
          className={styles.implementation}
        />
        <div>{copy[language].activities.description}</div>
      </div>
      <div className={styles.tableWrapper}>
        {copy[language].activities.table.map(row => {
          return (
            <div className={styles.rowWrapper} key={row.id}>
              <div className={styles.id}>{row.id}</div>
              <div className={styles.title}>{row.title}</div>
              <div className={styles.coordinator}>{row.coordinator}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.subtitle} ref={impactRef}>
        {copy[language].impact}
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={imageMap[language].impact}
          alt=""
          className={styles.impact}
        ></img>
      </div>
    </Main>
  );
};

export default AboutProject;
