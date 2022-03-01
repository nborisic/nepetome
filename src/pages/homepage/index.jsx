import * as copy from '../../copy/home.json';
import Sponsors from '../../components/sponsors';
import Container from '../../components/container';
import teamPath from '../../assets/images/team.jpg';
import logo from '../../assets/images/logo.png';
import routes from '../../utils/routes';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const Homepage = () => {
  const language = 'srb';

  return (
    <Container className={styles.homepage}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.title}>{copy[language].title}</div>
      <Link to={routes.participants}>
        <img src={teamPath} alt="team" className={styles.image} />
      </Link>
      <Sponsors />
    </Container>
  );
};

export default Homepage;
