import React, { Component } from 'react';
import Helmet from 'react-helmet';

class MetaData extends Component {
  render() {
    const { language } = this.props;

    const displayedPageTitle =
      language === 'srb' ? 'Nepetome projekat' : 'Nepetome project';
    const pageDescription =
      language === 'srb'
        ? 'Opisivanje diverziteta iridoida u okviru roda Nepeta L. korišćenjem “omics” tehnologija, u cilju in planta metaboličkog inženjeringa i njihove održive eksploatacije (NEPETOME)'
        : 'Omics-guided disentangling of the iridoid diversity in the genus Nepeta L. for in planta metabolic engineering towards sustainable exploitation';
    const pageKeywords =
      'nepata, nepotme, nepetalactone, institut sinisa stankovic, fond za nauku';

    return (
      <Helmet>
        <title>{displayedPageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="distribution" content="global" />
        <meta name="googlebot" content="noodp" />
        <meta property="og:site_name" content="Active drive" />
        <meta property="og:title" content={displayedPageTitle} />
        <meta property="og:description" content={pageDescription} />

        <meta property="og:url" content="https://www.nepetome.rs/" />
      </Helmet>
    );
  }
}

export default MetaData;
