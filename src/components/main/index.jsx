import classnames from 'classnames';

import styles from './index.module.scss';

const Main = ({ className = '', children, ...props }) => {
  const colClasses = classnames(className, styles.main);
  return (
    <div {...props} className={colClasses}>
      {children}
    </div>
  );
};

export default Main;
