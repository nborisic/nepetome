import classnames from 'classnames';

import styles from './index.module.scss';

const Container = ({ className = '', children, ...props }) => {
  const colClasses = classnames(className, styles.container);
  return (
    <div {...props} className={colClasses}>
      {children}
    </div>
  );
};

export default Container;
