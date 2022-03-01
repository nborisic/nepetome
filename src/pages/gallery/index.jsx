import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LightGallery from 'lightgallery/react';
import Main from '../../components/main';

import styles from './index.module.scss';

const Gallery = () => {
  const [images, setImages] = useState(null);
  const language = 'srb';

  useEffect(async () => {
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    const token = 'gallery';

    const {
      data: { resources },
    } = await axios.get(
      `http://res.cloudinary.com/${cloudName}/image/list/${token}.json`,
    );
    const images = resources.map(image => {
      console.log(image);
      return {
        href: `https://res.cloudinary.com/${cloudName}/image/upload/v${image.version}/${image.public_id}.${image.format}`,
        caption: {
          srb: image.context.custom.srb,
          eng: image.context.custom.caption,
        },
      };
    });
    setImages(images);
  }, []);

  return (
    <Main className={styles.main}>
      {images && (
        <LightGallery mode="lg-slide" download={false}>
          {images?.map(image => {
            return (
              <a
                className={styles.ratio}
                key={image.href}
                data-src={image.href}
                data-sub-html={`<h3>${image.caption[language]}</h3>`}
              >
                <img
                  className="img-responsive"
                  className={styles.galleryItem}
                  src={image.href}
                />
              </a>
            );
          })}
        </LightGallery>
      )}
    </Main>
  );
};

export default Gallery;
