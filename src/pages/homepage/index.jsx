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

import styles from './index.module.scss';

const Homepage = () => {
  // const { language } = useLanguage();
  const language = 'srb';

  return (
    <Container className={styles.homepage}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.title}>{copy[language].title}</div>
      <div className={styles.cardsWrapper}>
        <HomepageCards
          title={tabs[language]['about-project']}
          linkHref={routes['about-project']}
          linkText={copy[language].aboutProjectLinkText}
        >
          {copy[language].description}
        </HomepageCards>
        <HomepageCards
          title={tabs[language].news}
          linkHref={routes.news}
          linkText={copy[language].newsLinkText}
        >
          Novosti text
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
