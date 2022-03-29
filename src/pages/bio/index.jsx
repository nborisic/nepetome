import { useEffect } from 'react';
import cx from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../components/language-selector/language-hook';
import Main from '../../components/main';
import * as bio from '../../copy/bio.json';
import { bioMap } from '../participants';

import styles from './index.module.scss';

const Bio = () => {
  const { language } = useLanguage();
  let [searchParams] = useSearchParams();
  const userId = searchParams.get('id');
  const biography = bio[language];
  const userBio = biography.teamMembers[userId];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const getPublicationWithBold = (publication, name) => {
    let text = publication;
    name.forEach(name => {
      text = text.replace(name, `<b>${name}</b>`);
    });
    return text;
  };

  return (
    <Main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.topCard}>
          <img src={bioMap[userId]} alt="" className={styles.bioImage} />
          <div className={styles.generalInfo}>
            <div>
              {`${biography.name} `}
              <span className={styles.nameAccent}>{userBio.name}</span>
            </div>
            <div>
              {`${biography.title} `}
              <span className={styles.textAccent}>{userBio.title}</span>
            </div>
            <div>
              {!!parseInt(userId) && `${biography.participant} `}
              <span className={styles.textAccent}>{userBio.participant}</span>
            </div>
            <div>{`${biography.birth} ${userBio.birth}`}</div>
            <div>
              <span className={styles.contact}>{biography.contact}</span>
              <a
                href={`mailto:${userBio.contact}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {userBio.contact}
              </a>
            </div>
            <div>{userBio.role}</div>
            <div>{biography.link}</div>
            {userBio.link.orcid && (
              <div>
                <span className={styles.textAccent}>{`ORCID: `}</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={userBio.link.orcid}
                  className={styles.link}
                >
                  {userBio.link.orcid}
                </a>
              </div>
            )}
            {userBio.link.researchgate && (
              <div>
                <span className={styles.textAccent}>{`Researchgate: `}</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={userBio.link.researchgate}
                  className={styles.link}
                >
                  {userBio.link.researchgate}
                </a>
              </div>
            )}
            {userBio.link.scopus?.length > 0 && (
              <div className={styles.scopusWrapper}>
                <span className={styles.textAccent}>{`Scopus: `}</span>
                <div className={styles.scopus}>
                  {userBio.link.scopus.map(link => {
                    return (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link}
                        className={styles.link}
                      >
                        {link}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.bio}>{userBio.bio}</div>
        {userBio.prizes?.length > 0 && (
          <div className={styles.prizes}>
            <div className={styles.prizesTitle}>{biography.prizes}</div>
            <ul>
              {userBio.prizes.map(prize => {
                return (
                  <li>
                    <span
                      className={styles.textAccent}
                    >{`${prize.name} `}</span>
                    {prize.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className={styles.prizes}>
          <div className={styles.prizesTitle}>{biography.publications}</div>
          <ol>
            {userBio.publications.project.map(project => {
              return (
                <li
                  dangerouslySetInnerHTML={{
                    __html: getPublicationWithBold(
                      project,
                      userBio.publications.name,
                    ),
                  }}
                />
              );
            })}
          </ol>
        </div>
        <div className={styles.prizes}>
          <div className={styles.prizesTitle}>{biography.projects}</div>
          <div>
            {userBio.projects.map(project => {
              return (
                <div className={styles.projectsWrapper}>
                  <div
                    className={cx(styles.textAccent, styles.year)}
                  >{`${project.year} `}</div>
                  <div>
                    {project.name}
                    <span
                      className={styles.textAccent}
                    >{` ${project.role}`}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Bio;
