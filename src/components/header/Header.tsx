import styles from './Header.module.scss';

import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>Investment and Financial Portal</h1>
        <p>
          Looking for a company? Use the site search, read reviews, and compare
          conditions with similar companies.
        </p>
      </div>
      <div className={styles.right}>
        <Image src='/img/header.png' alt='' fill />
      </div>
    </header>
  );
};

export default Header;
