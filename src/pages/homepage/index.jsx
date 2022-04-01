import { useEffect } from 'react';
import * as copy from '../../copy/home.json';
import * as tabs from '../../copy/navigation.json';
import Sponsors from '../../components/sponsors';
import Container from '../../components/container';
import teamPath from '../../assets/images/team.jpg';
import logo from '../../assets/images/logo.png';
import routes from '../../utils/routes';
import HomepageCards from '../../components/homepage-cards';
import { useLanguage } from '../../components/language-selector/language-hook';
import { Link } from 'react-router-dom';
import NewsCard from '../../components/newsCard';
import imageMap from '../../utils/imageMap';

import styles from './index.module.scss';

const Homepage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container className={styles.homepage}>
      <MetaData language={language} />
      <div
        className={styles.title}
        dangerouslySetInnerHTML={{
          __html: copy[language].title,
        }}
      />
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.cardsWrapper}>
        <HomepageCards
          title={tabs[language]['about-project']}
          linkHref={routes['about-project']}
          linkText={copy[language].aboutProjectLinkText}
        >
          {copy[language].description}
        </HomepageCards>
        <HomepageCards
          linkHref={routes.news}
          linkText={copy[language].newsLinkText}
        >
          <NewsCard {...copy[language].latestNews} imageMap={imageMap} />
        </HomepageCards>
      </div>
      <Link to={routes.participants}>
        <img src={teamPath} alt="team" className={styles.image} />
      </Link>
      <Sponsors />
    </Container>
  );
};

export default Homepage;
