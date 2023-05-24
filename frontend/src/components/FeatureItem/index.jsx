import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function FeatureItem({ image, title, paragraph }) {
  return (
    <div className={styles.feature_item}>
      <img src={image} alt="Chat Icon" className={styles.feature_item__icon} />
      <h3 className={styles.feature_item__title}>{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
}

FeatureItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
