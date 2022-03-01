import classnames from 'classnames';

import styles from './index.module.scss';

const Divider = ({ className, ...props }) => {
  const dividerClasses = classnames(styles.divider, className);
  return <div className={dividerClasses} {...props} />;
};

export default Divider;
