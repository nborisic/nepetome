import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLanguage } from '../../components/language-selector/language-hook';
import LightGallery from 'lightgallery/react';
import Header from '../../components/header';
import Main from '../../components/main';

import styles from './index.module.scss';

const Gallery = () => {
  const [images, setImages] = useState(null);
  const { language } = useLanguage();

  useEffect(async () => {
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    const token = 'gallery';

    const {
      data: { resources },
    } = await axios.get(
      `https://res.cloudinary.com/${cloudName}/image/list/${token}.json`,
    );
    const images = resources.map(image => {
      return {
        href: `https://res.cloudinary.com/${cloudName}/image/upload/v${image.version}/${image.public_id}.${image.format}`,
        caption: {
          srb: image?.context?.custom?.srb,
          en: image?.context?.custom?.caption,
        },
      };
    });
    setImages(images);
  }, []);

  return (
    <Main className={styles.main}>
      <Header title="gallery" />
      <div className={styles.grid}>
        {images && (
          <LightGallery mode="lg-slide" download={false}>
            {images?.map(image => {
              return (
                <a
                  className={styles.ratio}
                  key={image.href}
                  data-src={image.href}
                  data-sub-html={
                    image.caption?.[language]
                      ? `<h3>${image.caption[language]}</h3>`
                      : null
                  }
                >
                  <img className={styles.galleryItem} src={image.href} />
                </a>
              );
            })}
          </LightGallery>
        )}
      </div>
    </Main>
  );
};

export default Gallery;
